import MainSection from "@/shared/ui/MainSection";
import AboutDepartment from "@/shared/ui/AboutDepartment";
import MainActivities from "@/shared/ui/MainActivities";
import CentersOfDepartment from "@/shared/ui/CentersOfTheDepartment";
import { DepartmentSection } from "@/entities/tabContent/TabContent.t";
import SchoolOfDepartmentSection from "@/widgets/department-center/SchoolOfDepartmentSection";

type SectionsMap = {
  [K in DepartmentSection["__component"]]: React.ComponentType<
    Extract<DepartmentSection, { __component: K }>
  >;
};

export const departmentSectionsMapper: SectionsMap = {
  "sections.tab-content-main-section": MainSection as React.ComponentType<
    Extract<
      DepartmentSection,
      { __component: "sections.tab-content-main-section" }
    >
  >,
  "sections.about-department": AboutDepartment as React.ComponentType<
    Extract<DepartmentSection, { __component: "sections.about-department" }>
  >,
  "sections.main-areas-activity": MainActivities as React.ComponentType<
    Extract<DepartmentSection, { __component: "sections.main-areas-activity" }>
  >,
  "sections.centers-of-department": CentersOfDepartment as React.ComponentType<
    Extract<
      DepartmentSection,
      { __component: "sections.centers-of-department" }
    >
  >,
  "sections.school-of-tab": SchoolOfDepartmentSection as React.ComponentType<
    Extract<DepartmentSection, { __component: "sections.school-of-tab" }>
  >,
};
