import Star from "@/shared/icons/Star";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartmentWrapper from "@/widgets/ai-ds/AboutDepartmentWrapper";
import AIActivities from "@/widgets/ai-ds/AIActivities";
import CenterDepartment from "@/widgets/ai-ds/CenterDepartment";
import SchoolAI from "@/widgets/ai-ds/SchoolAI";

function AiDsPage() {
  return (
    <>
      <MainSection
        icon={<Star />}
        name="AI & DS"
        title="Аналитика, искусственный интеллект и Data Science"
        image="/assets/ai-ds.png"
      />

      <AboutDepartmentWrapper />

      <AIActivities />

      <CenterDepartment />

      <SchoolAI />
    </>
  );
}

export default AiDsPage;
