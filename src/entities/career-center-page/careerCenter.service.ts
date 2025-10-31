import { getLocale } from "next-intl/server";
import { CareerCenterPageData } from "./getCareerCenterPage.t";

export const getCareerCenterPageData =
  async (): Promise<CareerCenterPageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/career-center-page?populate[international_team][populate]=image&locale=${locale}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

      const json = await res.json();

      return json.data ?? null;
    } catch (error) {
      console.error(
        "Ошибка при получении данных для career-center page:",
        error
      );
      return null;
    }
  };
