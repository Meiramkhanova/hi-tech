import { Meta, StrapiBase } from "../types";

export interface PotentialPartnersOfCenter {
  __component: "sections.potential-partners-of-center";
  id: number;
  potential_partners: Array<{
    order: number;
    id: number;
    title: string;
  }>;
}

export interface MastersDegreeOfCenter {
  __component: "sections.masterd-degree-of-center";
  id: number;
  title: string;
  desc: string;
}

export interface ExampleProjectsOfCenter {
  __component: "sections.example-projects-of-center";
  id: number;
  example_projects_of_center: Array<{
    order: number;
    id: number;
    title: string;
  }>;
}

export interface MainActivitiesOfCenter {
  __component: "sections.main-activities-of-center";
  id: number;
  main_activities: Array<{
    order: number;
    id: number;
    title: string;
  }>;
}

export interface AboutDepartmentCenter {
  __component: "sections.about-department-center";
  id: number;
  title: string;
  desc: string;
}

export type DepartmentCenterSection =
  | AboutDepartmentCenter
  | MainActivitiesOfCenter
  | ExampleProjectsOfCenter
  | MastersDegreeOfCenter
  | PotentialPartnersOfCenter;

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
