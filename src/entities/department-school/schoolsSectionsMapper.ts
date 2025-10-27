import SchoolMainSection from "@/widgets/department-school/SchoolMainAboutSection";
import { DepartmentSchoolSection } from "./DepartmentSchool.t";
import MissionProductInfo from "@/shared/ui/MissionProductInfo";
import CenterTitleOrderItemsSection from "@/widgets/department-center/CenterTitleOrderItemsSection";
import QuantitativeRiskManagementSection from "@/widgets/department-school/QuantitativeRiskManagementSection";
import CreditAnalysis from "@/widgets/department-school/CreditAnalysisSection";

type SectionsMap = {
  [K in DepartmentSchoolSection["__component"]]: React.ComponentType<
    Extract<DepartmentSchoolSection, { __component: K }>
  >;
};

export const departmentSchoolSectionsMapper: SectionsMap = {
  "sections.school-main-section": SchoolMainSection as React.ComponentType<
    Extract<
      DepartmentSchoolSection,
      { __component: "sections.school-main-section" }
    >
  >,

  "sections.mission-product-info": MissionProductInfo as React.ComponentType<
    Extract<
      DepartmentSchoolSection,
      { __component: "sections.mission-product-info" }
    >
  >,
  "sections.center-title-order-items":
    CenterTitleOrderItemsSection as React.ComponentType<
      Extract<
        DepartmentSchoolSection,
        { __component: "sections.center-title-order-items" }
      >
    >,
  "sections.title-iconed-items":
    QuantitativeRiskManagementSection as React.ComponentType<
      Extract<
        DepartmentSchoolSection,
        { __component: "sections.title-iconed-items" }
      >
    >,
  "sections.credit-analysis": CreditAnalysis as React.ComponentType<
    Extract<
      DepartmentSchoolSection,
      { __component: "sections.credit-analysis" }
    >
  >,
};
