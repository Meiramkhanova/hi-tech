import { getLocale } from "next-intl/server";
import { ItDevelopmentPageData } from "./it-development.t";

export const getItDevelopmentPageData =
  async (): Promise<ItDevelopmentPageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/it-development-page?populate[cases][populate]=images&locale=${locale}`,
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
      console.error(
        "Ошибка при получении данных для it-development page:",
        error
      );
      return null;
    }
  };
