import { Meta, StrapiBase } from "../types";

export interface MastersDegreeOfCenter {
  __component: "sections.masterd-degree-of-center";
  id: number;
  title: string;
  desc: string;
}

export interface AboutDepartmentCenter {
  __component: "sections.about-department-center";
  id: number;
  title: string;
  desc: string;
}

export interface FintechItemCenter {
  __component: "sections.fintech-item";
  id: number;
  sectionTitle: string | null;
  innerTitleOne: string | null;
  innerTitleTwo: string | null;
  innerTitleThree: string | null;
  innerTitleTwoBold: string | null;
  innerTitleTwoGrey: string | null;
  innerTitleThreeBold: string | null;
  innerTitleThreeGrey: string | null;
}

export interface CenterTitleOrderItems {
  __component: "sections.center-title-order-items";
  id: number;
  title: string;
  order_items: Array<{ order: number; id: number; title: string }>;
}

export type DepartmentCenterSection =
  | AboutDepartmentCenter
  | MastersDegreeOfCenter
  | FintechItemCenter
  | CenterTitleOrderItems;

interface DepartmentCenterData extends StrapiBase {
  title: string;
  slug: string;
  order: number;
  sections: DepartmentCenterSection[];
}

export interface DepartmentCenterResponse {
  data: DepartmentCenterData[];
  meta: Meta;
}
