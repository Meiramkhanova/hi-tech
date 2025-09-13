import { AxiosResponse } from "axios";
import { api } from "../api";
import { HeaderData, HeaderResponse } from "./getHeader.t";

export const getHeaderData = async (): Promise<HeaderData[]> => {
  try {
    const response: AxiosResponse<HeaderResponse> = await api.get(
      "navlinks?populate=*"
    );

    // если Strapi вернул undefined или пустоту → подставим []
    return response.data?.data ?? [];
  } catch (error) {
    console.error("Ошибка при получении данных для header:", error);
    return []; // сайт не упадёт, а просто будет пустое меню
  }
};
