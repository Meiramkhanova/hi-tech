import HowGetInto from "@/widgets/laboratories/HowGetInto";
import LabDirections from "@/widgets/laboratories/LabDirections";
import LabFAQ from "@/widgets/laboratories/LabFAQ";
import LabFormats from "@/widgets/laboratories/LabFormats";
import LabMainSection from "@/widgets/laboratories/LabMainSection";

function LaboratoriesPage() {
  return (
    <>
      <LabMainSection />

      <LabDirections />

      <HowGetInto />

      <LabFormats />

      <LabFAQ />
    </>
  );
}

export default LaboratoriesPage;
