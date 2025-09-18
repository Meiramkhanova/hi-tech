import { Meta, StrapiBaseLocale } from "../types";

export interface HeaderData extends StrapiBaseLocale {
  text: string;
  url: string;
}

export interface HeaderResponse {
  data: HeaderData[];
  meta: Meta;
}
