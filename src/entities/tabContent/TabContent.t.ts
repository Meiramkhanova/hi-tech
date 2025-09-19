import { Meta, StrapiBase, StrapiIcon } from "../types";

export interface TabMainSection {
  __component: "sections.tab-content-main-section";
  id: number;
  name: string;
  title: string;
  icon?: StrapiIcon[];
  image?: StrapiIcon;
}

export interface TabAboutDepartment {
  __component: "sections.about-department";
  id: number;
  title: string;
  desc: Array<{
    id: number;
    text: string;
  }>;
}

export interface MainAreasActivity {
  __component: "sections.main-areas-activity";
  id: number;
  activityItems: Array<{
    id: number;
    title: string;
    desc: string;
  }>;
}

export type Section = TabMainSection | TabAboutDepartment | MainAreasActivity;

interface DataItem extends StrapiBase {
  sections: Section[];
}

export interface TabResponse {
  data: DataItem[];
  meta: Meta;
}
