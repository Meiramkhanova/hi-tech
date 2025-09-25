import { DepartmentCenterSection } from "./DepartmentCenter.t";
import AboutCenter from "@/widgets/department-center/AboutCenter";
import ExampleProjects from "@/widgets/department-center/ExampleProjects";
import MainActivities from "@/widgets/department-center/MainActivities";
import MastersDegreeCenter from "@/widgets/department-center/MastersDegreeCenter";
import PotentialPartners from "@/widgets/department-center/PotentialPartners";

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
  "sections.main-activities-of-center": MainActivities as React.ComponentType<
    Extract<
      DepartmentCenterSection,
      { __component: "sections.main-activities-of-center" }
    >
  >,
  "sections.example-projects-of-center": ExampleProjects as React.ComponentType<
    Extract<
      DepartmentCenterSection,
      { __component: "sections.example-projects-of-center" }
    >
  >,
  "sections.masterd-degree-of-center":
    MastersDegreeCenter as React.ComponentType<
      Extract<
        DepartmentCenterSection,
        { __component: "sections.masterd-degree-of-center" }
      >
    >,
  "sections.potential-partners-of-center":
    PotentialPartners as React.ComponentType<
      Extract<
        DepartmentCenterSection,
        { __component: "sections.potential-partners-of-center" }
      >
    >,
};
