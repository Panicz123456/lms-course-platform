import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archive"] as const;
export const courseCategory = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Digital Marketing",
  "Business & Finance",
  "Photography",
  "Music Production",
  "Language Learning",
  "Personal Development",
  "Health & Fitness",
  "Cooking",
  "Art & Design",
  "Programming Languages",
  "Database Management",
  "Project Management",
  "Sales & Marketing",
  "Leadership",
  "Communication Skills",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" })
    .max(250, { message: "Description cannot exceed 250 characters" }),
  fileKey: z.string().min(1, { message: "Please select a file" }),
  price: z.number().min(1, { message: "Price must be at least $1" }),
  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration cannot exceed 500 hours" }),
  level: z.enum(courseLevels, { message: "Please select a course level" }),
  category: z.enum(courseCategory, {
    message: "Please select a course category",
  }),
  smallDescription: z
    .string()
    .min(1, { message: "Short description is required" })
    .max(200, { message: "Short description cannot exceed 200 characters" }),
  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
  status: z.enum(courseStatus),
});

export type courseSchemaType = z.infer<typeof courseSchema>;
