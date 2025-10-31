import { LocaleItem, StrapiImage } from "../types";

export interface CaseItem {
  id: number;
  date: string;
  description: string;
  images: StrapiImage[];
  title: string;
}

export interface ItDevelopmentPageData extends LocaleItem {
  cases: CaseItem[];
}

export interface ItDevelopmentPageResponse {
  data: ItDevelopmentPageData;
  meta: Record<string, unknown>;
}
