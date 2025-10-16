import { getLocale } from "next-intl/server";
import { LabItemResponse } from "./LabItemSingle.t";

export default async function getLabItem(
  labSlug: string
): Promise<LabItemResponse | null> {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lab-items?filters[slug]=${labSlug}&populate[section][populate]=*&locale=${locale}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Fetch error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Ошибка при получении данных лаборотории:", error);
    return null;
  }
}
