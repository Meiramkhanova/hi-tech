import { TabResponse } from "./TabContent.t";

export default async function getTabContentData(
  slug: string
): Promise<TabResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tab-contents?filters[slug]=${slug}&populate[sections][populate]=*`,
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
