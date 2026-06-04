import { z } from "zod";

export const serviceEnum = z.enum([
  "construction",
  "contractor",
  "rib-block",
  "other",
]);

export const serviceOptions = [
  { value: "construction", label: "Building construction" },
  { value: "contractor", label: "General building contractor" },
  { value: "rib-block", label: "Rib & block supply & install" },
  { value: "other", label: "Something else" },
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  company: z
    .string()
    .trim()
    .max(80, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email("Please enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || /^[+\d\s()-]{7,20}$/.test(v),
      "Please enter a valid phone number.",
    ),
  service: serviceEnum,
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000, "Message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;
