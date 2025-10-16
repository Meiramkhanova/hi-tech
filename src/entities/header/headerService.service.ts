import { getLocale } from "next-intl/server";
import { HeaderData } from "./getHeader.t";

export const getHeaderData = async (): Promise<HeaderData[]> => {
  const locale = await getLocale();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/navlinks?populate=*&locale=${locale}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

    const json = await res.json();

    return json.data ?? [];
  } catch (error) {
    console.error("Ошибка при получении данных для header:", error);
    return [];
  }
};
