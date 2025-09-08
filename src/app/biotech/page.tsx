import Biotech from "@/shared/icons/Biotech";
import BusinessAnalysis from "@/shared/icons/BusinessAnalysis";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartment from "@/widgets/biotech/AboutDepartment";
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

      <AboutDepartment />

      <BiotechActivities />

      <SchoolBiotech />
    </>
  );
}

export default BiotechPage;
