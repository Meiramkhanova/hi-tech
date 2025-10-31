import { getLocale } from "next-intl/server";
import { MentoringPageData } from "./getMentoringPage.t";

export const getMentoringPageData =
  async (): Promise<MentoringPageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/mentoring-page?populate[experts][populate]=image&locale=${locale}`,
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
      console.error("Ошибка при получении данных для mentoring page:", error);
      return null;
    }
  };
