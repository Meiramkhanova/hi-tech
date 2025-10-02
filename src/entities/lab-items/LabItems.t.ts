import { Meta, StrapiBaseLocale, StrapiIcon } from "../types";

export interface LabItem extends StrapiBaseLocale {
  title: string;
  subtitle: string;
  desc: string;
  slug: string;
  icon: StrapiIcon;
}

export interface LabItemsResponse {
  data: LabItem[];
  meta: Meta;
}
