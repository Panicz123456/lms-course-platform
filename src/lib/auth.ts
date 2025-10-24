import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "./prisma";
import { env } from "./env";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [
    emailOTP({ 
      async sendVerificationOTP({ email, otp }) { 
        const { } = await resend.emails.send({ 
          from: "PaniczLMS <onboarding@resend.dev>",
          to: [email],
          subject: "PaniczLMS. - Verify your email",
          html: `<p>Your OTP is <strong>${otp}</strong></p>`
        })
      }
    })
  ]
});
