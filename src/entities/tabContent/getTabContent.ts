import { getLocale } from "next-intl/server";
import { DepartmentTabResponse } from "./TabContent.t";

export default async function getTabContentData(
  slug: string
): Promise<DepartmentTabResponse | null> {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tab-contents?filters[slug]=${slug}&populate[sections][populate]=*&locale=${locale}`,
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
