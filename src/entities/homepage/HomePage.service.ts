import { AxiosResponse } from "axios";
import { api } from "../api";
import { HomePageData, HomePageResponse } from "./getHomepage.t";

export const getHomePageData = async (): Promise<HomePageData | null> => {
  try {
    const response: AxiosResponse<HomePageResponse> = await api.get(
      "homepage?populate[swiper][populate]=*&populate[about][populate]=*&populate[aboutinfos][populate]=*&populate[mainNews][populate]=*&",
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    // если Strapi вернул undefined или пустоту → подставим []
    return response.data?.data ?? null;
  } catch (error) {
    console.error("Ошибка при получении данных для header:", error);
    return null; // сайт не упадёт, а просто будет пустое меню
  }
};
