import SchoolMainSection from "@/widgets/department-school/SchoolMainSection";
import { DepartmentSchoolSection } from "./DepartmentSchool.t";

type SectionsMap = {
  [K in DepartmentSchoolSection["__component"]]: React.ComponentType<
    Extract<DepartmentSchoolSection, { __component: K }>
  >;
};

// export const departmentSchoolSectionsMapper: SectionsMap = {
//   "sections.school-main-section": SchoolMainSection as React.ComponentType<
//     Extract<
//       DepartmentSchoolSection,
//       { __component: "sections.school-main-section" }
//     >
//   >,
// };
