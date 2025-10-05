import parsePhoneNumberFromString from "libphonenumber-js";
import z from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Имя должно быть минимум 2 символа"),
  email: z.string().email({ message: "Неверный формат email" }),
  phone: z.string().refine(
    (val) => {
      const phoneNumber = parsePhoneNumberFromString(val, "KZ");
      return phoneNumber?.isValid();
    },
    {
      message: "Неверный номер телефона",
    }
  ),
});

export type LeadFormData = z.infer<typeof leadSchema>;
