import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { env } from "@/lib/env";
import { S3 } from "@/lib/s3client";

// const ALLOWED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/png",
//   "image/webp",
//   "image/gif",
// ] as const;
// const MAX_SIZE = 5 * 1024 * 1024; // 5MB
// export const fileUploadSchema = z.object({
//   fileName: z.string().min(1, { error: "Filename is required" }),
//   contentType: z.enum(ALLOWED_IMAGE_TYPES),
//   size: z.number().int().positive().max(MAX_SIZE, { error: "File too large" }),
// });

export const fileUploadSchema = z.object({
  fileName: z.string().min(1, { error: "Filename is required" }),
  contentType: z.string().min(1, { error: "Content type is required" }),
  size: z.number().min(1, { error: "Size is required" }),
  isImage: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = fileUploadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid Request body" },
        { status: 400 }
      );
    }

    const { fileName, contentType, size } = validation.data;

    const uniqueKey = `${uuidv4()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME,
      ContentType: contentType,
      ContentLength: size,
      Key: uniqueKey,
    });

    const presignedUrl = await getSignedUrl(S3, command, {
      expiresIn: 360, // 6min
    });

    const response = {
      presignedUrl,
      key: uniqueKey,
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: "Failed to generate presigned Url" },
      { status: 500 }
    );
  }
}
