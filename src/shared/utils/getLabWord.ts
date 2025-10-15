import { getTranslations } from "next-intl/server";

export async function LabWord(count: number) {
  const t = await getTranslations("HomePage");

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return t("laboratory.one");
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
    return t("laboratory.few");
  return t("laboratory.many");
}
