import Biotech from "@/shared/icons/Biotech";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartmentWrapper from "@/widgets/biotech/AboutDepartmentWrapper";
import BiotechActivities from "@/widgets/biotech/BiotechActivities";
import SchoolBiotech from "@/widgets/biotech/SchoolBiotech";

function BiotechPage() {
  return (
    <>
      <MainSection
        icon={<Biotech />}
        name="Biotech"
        title="Аналитика, моделирование и оценка биотехнологических компаний и технологий"
        image="/assets/biotech.png"
      />

      <AboutDepartmentWrapper />

      <BiotechActivities />

      <SchoolBiotech />
    </>
  );
}

export default BiotechPage;
