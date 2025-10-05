import { LabItemResponse } from "./LabItemSingle.t";

export default async function getLabItem(
  labSlug: string
): Promise<LabItemResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lab-items?filters[slug]=${labSlug}&populate[section][populate]=*`,
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
