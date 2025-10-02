import z from "zod";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
