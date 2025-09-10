import Up from "@/shared/icons/Up";
import MainSection from "@/shared/ui/MainSection";
import AboutDepartmentWrapper from "@/widgets/department/AboutDepartmentWrapper";
import DepartmentActivities from "../../widgets/department/DepartmentActivities";
import LabClub from "@/widgets/department/LabClub";

function DepartmentPage() {
  return (
    <>
      <MainSection
        icon={<Up />}
        name="VC Department"
        title="Инвестиции, стартапы и управление капиталом нового поколения"
        image="/assets/department.png"
      />

      <AboutDepartmentWrapper />

      <DepartmentActivities />

      <LabClub />
    </>
  );
}

export default DepartmentPage;
