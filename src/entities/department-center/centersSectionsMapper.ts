import { DepartmentCenterSection } from "./DepartmentCenter.t";
import AboutCenter from "@/widgets/department-center/AboutCenter";
import ExampleProjects from "@/widgets/department-center/ExampleProjects";
import MainActivities from "@/widgets/department-center/MainActivities";
import MastersDegreeCenter from "@/widgets/department-center/MastersDegreeCenter";
import PotentialPartners from "@/widgets/department-center/PotentialPartners";
import FintechItem from "./FintechItem";
import CenterTitleOrderItems from "./CenterTitleOrderItemsSection";

type SectionsMap = {
  [K in DepartmentCenterSection["__component"]]: React.ComponentType<
    Extract<DepartmentCenterSection, { __component: K }>
  >;
};

export const departmentCenterSectionsMapper: SectionsMap = {
  "sections.about-department-center": AboutCenter as React.ComponentType<
    Extract<
      DepartmentCenterSection,
      { __component: "sections.about-department-center" }
    >
  >,
  "sections.masterd-degree-of-center":
    MastersDegreeCenter as React.ComponentType<
      Extract<
        DepartmentCenterSection,
        { __component: "sections.masterd-degree-of-center" }
      >
    >,
  "sections.fintech-item": FintechItem as React.ComponentType<
    Extract<DepartmentCenterSection, { __component: "sections.fintech-item" }>
  >,
  "sections.center-title-order-items":
    CenterTitleOrderItems as React.ComponentType<
      Extract<
        DepartmentCenterSection,
        { __component: "sections.center-title-order-items" }
      >
    >,
};
