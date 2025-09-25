import { DepartmentCenterResponse } from "./DepartmentCenter.t";

export default async function GetDepartmentCenter(
  slug: string
): Promise<DepartmentCenterResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/center-departments?filters[slug][$eq]=${slug}&populate[sections][populate]=*`,
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
