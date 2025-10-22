import { MisstionProductInfo } from "../department-center/DepartmentCenter.t";
import { Meta, StrapiBase, StrapiImage } from "../types";

export interface SchoolMainSection {
  __component: "sections.school-main-section";
  id: number;
  title: string;
  desc: string;
  image: StrapiImage;
}

export interface MainActivitiesOrderItem {
  order: number;
  id: number;
  title: string;
}

export interface MainActivities {
  __component: "sections.center-title-order-items";
  id: number;
  title: string;
  order_items: MainActivitiesOrderItem[];
}

export interface QuantitativeRiskManagement {
  __component: "sections.title-iconed-items";
  id: number;
  projectDesc: string;
  financeDesc: string;
  riskManagementDesc: string;
  quantitativeModeling: string;
}

export interface CreditAnalysis {
  __component: "sections.credit-analysis";
  id: number;
  projectDesc: string;
  financeDesc: string;
  riskManagementDesc: string;
  quantitativeModeling: string;
}

export type DepartmentSchoolSection =
  | SchoolMainSection
  | MainActivities
  | MisstionProductInfo
  | QuantitativeRiskManagement
  | CreditAnalysis;

interface DepartmentSchoolData extends StrapiBase {
  slug: string;
  schoolName: string;
  desc: string;
  sections: DepartmentSchoolSection[];
}

export interface DepartmentSchoolResponse {
  data: DepartmentSchoolData[];
  meta: Meta;
}
