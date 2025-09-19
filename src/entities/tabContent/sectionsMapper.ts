import MainSection from "@/shared/ui/MainSection";
import { Section } from "./TabContent.t";
import AboutDepartment from "@/shared/ui/AboutDepartment";
import MainActivities from "@/shared/ui/MainActivities";

type SectionsMap = {
  [K in Section["__component"]]: React.ComponentType<
    Extract<Section, { __component: K }>
  >;
};

export const sectionsMapper: SectionsMap = {
  "sections.tab-content-main-section": MainSection as React.ComponentType<
    Extract<Section, { __component: "sections.tab-content-main-section" }>
  >,
  "sections.about-department": AboutDepartment as React.ComponentType<
    Extract<Section, { __component: "sections.about-department" }>
  >,
  "sections.main-areas-activity": MainActivities as React.ComponentType<
    Extract<Section, { __component: "sections.main-areas-activity" }>
  >,
};
