import { StrapiBaseLocale, StrapiImage } from "../types";

export interface InternationalTeam {
  id: number;
  person_name: string;
  person_surname: string;
  graduate_year: string;
  graduate_direction: string;
  description: string;
  image: StrapiImage;
}

export interface CareerCenterPageData extends StrapiBaseLocale {
  international_team: InternationalTeam[];
}

export interface CareerCenterPageResponse {
  data: CareerCenterPageData;
  meta: Record<string, unknown>;
}
