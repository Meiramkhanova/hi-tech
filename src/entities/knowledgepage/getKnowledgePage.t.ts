import { SchoolOfDepartmentItem } from "../tabContent/TabContent.t";
import { LocaleItem, StrapiBaseLocale, StrapiIcon } from "../types";

export interface KnowledgeInfoItem {
  id: number;
  title: string;
  description: string;
  icon: StrapiIcon;
}

export interface KnowledgeLabItem extends LocaleItem {
  title: string;
  subtitle: string;
  desc: string;
  slug: string;
}

export interface KnowledgePageData extends StrapiBaseLocale {
  main_section_title: string;
  main_section_decscription: string;
  headline: string;
  yaizy_title: string;
  yaizy_description: string;
  yaizy_image: StrapiIcon;
  info_items: KnowledgeInfoItem[];
  schools: SchoolOfDepartmentItem[];
  lab_items: KnowledgeLabItem[];
}

export interface KnowledgePageResponse {
  data: KnowledgePageData;
  meta: Record<string, unknown>;
}
