import { StrapiBaseLocale } from "../types";

export interface AboutHistoryItem {
  id: number;
  year: string;
  yearDesc: string;
}

export interface AboutPageData extends StrapiBaseLocale {
  about_history: Array<AboutHistoryItem>;
}

export interface AboutPageResponse {
  data: AboutPageData;
  meta: Record<string, unknown>;
}
