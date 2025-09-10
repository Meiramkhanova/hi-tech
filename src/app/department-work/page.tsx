import MainSection from "@/shared/ui/MainSection";
import AboutWrapper from "@/widgets/department-work/AboutWrapper";
import Conception from "@/widgets/department-work/Conception";
import Labs from "@/widgets/department-work/Labs";
import Partners from "@/widgets/department-work/Partners";
import SchoolActivities from "@/widgets/department-work/SchoolActivities";

function DepartmentWorkPage() {
  return (
    <>
      <MainSection
        name="Департамент работы со школами"
        title="Подготовка школьников к карьере, предпринимательству и поступлению в вузы"
        image="/assets/department.png"
      />

      <AboutWrapper />

      <SchoolActivities />

      <Conception />

      <Labs />

      <Partners />
    </>
  );
}

export default DepartmentWorkPage;
