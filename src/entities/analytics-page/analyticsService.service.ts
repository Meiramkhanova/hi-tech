import { getLocale } from "next-intl/server";
import { AnalyticsPageData } from "./getAnalyticsPage";

export const getAnalyticsPageData =
  async (): Promise<AnalyticsPageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/analytycspage?populate=*&locale=${locale}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

      const json = await res.json();

      return json.data ?? null;
    } catch (error) {
      console.error("Ошибка при получении данных для analyticspage:", error);
      return null;
    }
  };
