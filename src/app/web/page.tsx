import Web from "@/shared/icons/Web";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartmentWrapper from "@/widgets/web/AboutDepartmentWrapper";
import SchoolSecurity from "@/widgets/web/SchoolSecurity";
import WebActivities from "@/widgets/web/WebActivities";

function WebPage() {
  return (
    <>
      <MainSection
        icon={<Web />}
        name="Blockchain / Web3"
        title="Создание цифровых продуктов и Web3-решений"
        image="/assets/ai-ds.png"
      />

      <AboutDepartmentWrapper />

      <WebActivities />

      <SchoolSecurity />
    </>
  );
}

export default WebPage;
