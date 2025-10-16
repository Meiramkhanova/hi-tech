import { getLocale } from "next-intl/server";
import { LabItemsResponse } from "./LabItems.t";

export default async function getLabItems(): Promise<LabItemsResponse | null> {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lab-items?populate=*&locale=${locale}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Fetch error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
}
