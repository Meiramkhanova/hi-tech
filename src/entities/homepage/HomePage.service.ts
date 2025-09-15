import { HomePageData } from "./getHomepage.t";

export const getHomePageData = async (): Promise<HomePageData | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[swiper][populate]=*&populate[about][populate]=*&populate[aboutinfos][populate]=*&populate[mainNews][populate]=*`,
      {
        cache: "no-store", // ключ! всегда свежие данные, Vercel не отдаст старую страницу
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
