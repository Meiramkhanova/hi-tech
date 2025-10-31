import parsePhoneNumberFromString from "libphonenumber-js";
import z from "zod";

export const developerSchema = z.object({
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
  message: z
    .string()
    .min(5, "Сообщение должно содержать минимум 5 символов")
    .max(1000, "Сообщение слишком длинное"),
});

export type DeveloperFormData = z.infer<typeof developerSchema>;
