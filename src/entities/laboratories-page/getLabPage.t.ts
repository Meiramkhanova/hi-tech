import { StrapiBase, StrapiBaseLocale, StrapiIcon } from "../types";

export interface LaboratoryItem extends StrapiBase {
  title: string;
  subtitle: string;
  desc: string;
  slug: string;
  icon: StrapiIcon;
}

export interface LabDirectionItem extends StrapiBase {
  title: string;
  lab_items: Array<LaboratoryItem>;
}

export interface LaboratoriesPageData extends StrapiBaseLocale {
  lab_directions: Array<LabDirectionItem>;
}

export interface LabPageResponse {
  data: LaboratoriesPageData;
  meta: Record<string, unknown>;
}
