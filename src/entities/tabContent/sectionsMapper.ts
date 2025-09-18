import MainSection, { MainSectionProps } from "@/shared/ui/MainSection";

type SectionsMap = {
  "sections.tab-content-main-section": React.FC<MainSectionProps>;
};

export const sectionsMapper: SectionsMap = {
  "sections.tab-content-main-section": MainSection,
};
