import { StrapiBaseLocale, StrapiImage } from "../types";

export interface ExportItem extends StrapiBaseLocale {
  fullName: string;
  role: string;
  image: StrapiImage;
}

export interface MentoringPageData extends StrapiBaseLocale {
  experts: ExportItem[];
}

export interface MentoringPageResponse {
  data: MentoringPageData;
  meta: Record<string, unknown>;
}
