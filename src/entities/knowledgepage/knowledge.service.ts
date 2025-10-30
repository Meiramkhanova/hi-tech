import { getLocale } from "next-intl/server";
import { KnowledgePageData } from "./getKnowledgePage.t";

export const getKnowledgePageData =
  async (): Promise<KnowledgePageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/knowledgepage?populate[yaizy_image]=true&populate[info_items][populate]=icon&populate[schools][populate]&populate[lab_items][populate]&locale=${locale}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        console.error(`Strapi error: ${res.status} ${res.statusText}`);
        return null;
      }

      const json = await res.json();

      return json.data ?? null;
    } catch (error) {
      console.error("Ошибка при получении данных для knowledgepage:", error);
      return null;
    }
  };
