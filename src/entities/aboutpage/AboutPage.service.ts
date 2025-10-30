import { getLocale } from "next-intl/server";
import { AboutPageData } from "./getAboutpage.t";

export const getAboutPageData = async (): Promise<AboutPageData | null> => {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/aboutpage?populate=*&locale=${locale}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

    const json = await res.json();

    return json.data ?? null;
  } catch (error) {
    console.error("Ошибка при получении данных для aboutpage:", error);
    return null;
  }
};
