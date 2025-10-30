import { getLocale } from "next-intl/server";
import { LaboratoriesPageData } from "./getLabPage.t";

export const getLabPageData =
  async (): Promise<LaboratoriesPageData | null> => {
    const locale = await getLocale();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/laboratorypage?populate[lab_directions][populate][lab_items][populate]=icon&locale=${locale}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Ошибка при запросе к Strapi");

      const json = await res.json();

      return json.data ?? null;
    } catch (error) {
      console.error("Ошибка при получении данных для labpage:", error);
      return null;
    }
  };
