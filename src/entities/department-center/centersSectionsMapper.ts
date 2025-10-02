import { DepartmentCenterSection } from "./DepartmentCenter.t";
import AboutCenter from "@/widgets/department-center/AboutCenter";
import MastersDegreeCenter from "@/widgets/department-center/MastersDegreeCenter";
import CenterTitleOrderItems from "../../widgets/department-center/CenterTitleOrderItemsSection";
import FintechItem from "@/widgets/department-center/FintechItem";
import MissionProductInfo from "@/shared/ui/MissionProductInfo";
import TitleUnorderedItems from "@/shared/ui/TitleUnorderedItems";

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
  "sections.mission-product-info": MissionProductInfo as React.ComponentType<
    Extract<
      DepartmentCenterSection,
      { __component: "sections.mission-product-info" }
    >
  >,
  "sections.title-unordered-items": TitleUnorderedItems as React.ComponentType<
    Extract<
      DepartmentCenterSection,
      { __component: "sections.title-unordered-items" }
    >
  >,
};
