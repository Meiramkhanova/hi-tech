import { HomePageData } from "./getHomepage.t";

export const getHomePageData = async (): Promise<HomePageData | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[swiper][populate]=*&populate[about][populate]=*&populate[aboutinfos][populate]=*&populate[mainNews][populate]=*&populate[tabs][populate][tab_contents][populate]=icon`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

    const json = await res.json();

    return json.data ?? null;
  } catch (error) {
    console.error("Ошибка при получении данных для homepage:", error);
    return null;
  }
};
