import { getLocale } from "next-intl/server";
import { DepartmentCenterResponse } from "./DepartmentCenter.t";

export default async function GetDepartmentCenter(
  slug: string
): Promise<DepartmentCenterResponse | null> {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/center-departments?filters[slug][$eq]=${slug}&populate[sections][populate]=*&locale=${locale}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Fetch error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Ошибка при получении данных департмента:", error);
    return null;
  }
}
