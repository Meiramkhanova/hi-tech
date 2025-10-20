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

export interface CentersOfDepartmentItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  order: number | null;
}

export interface CentersOfDepartment {
  __component: "sections.centers-of-department";
  id: number;
  center_departments: CentersOfDepartmentItem[];
}

export type DepartmentSection =
  | TabMainSection
  | TabAboutDepartment
  | MainAreasActivity
  | CentersOfDepartment;

interface DataItem extends StrapiBase {
  sections: DepartmentSection[];
}

export interface DepartmentTabResponse {
  data: DataItem[];
  meta: Meta;
}
