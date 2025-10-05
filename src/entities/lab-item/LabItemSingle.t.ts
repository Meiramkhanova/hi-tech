import { Meta, StrapiBaseLocale } from "../types";

export interface LabItemSingleSection {
  __component: "sections.lab-item-single-info";
  id: number;
  main_section_title: string;
  main_section_desc: string;
  focus_title: string;
  skills: Array<{ id: number; text: string }>;
  careers: Array<{ id: number; text: string }>;
}

export interface LabItemSingle extends StrapiBaseLocale {
  title: string;
  subtitle: string;
  desc: string;
  slug: string;
  section: LabItemSingleSection[];
}

export interface LabItemResponse {
  data: LabItemSingle[];
  meta: Meta;
}
