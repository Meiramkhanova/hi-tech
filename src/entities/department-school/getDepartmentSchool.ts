import { getLocale } from "next-intl/server";
import { DepartmentSchoolResponse } from "./DepartmentSchool.t";

export default async function GetDepartmentSchool(
  slug: string
): Promise<DepartmentSchoolResponse | null> {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/schools?filters[slug][$eq]=${slug}&populate[sections][populate]=*&locale=${locale}`,
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
