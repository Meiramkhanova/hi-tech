import CareerForm from "@/widgets/career-center/CareerFormSection";
import InternationalTeam from "@/widgets/career-center/InternationalTeam";
import MainSectionCareer from "@/widgets/career-center/MainSectionCareer";

function CareerCenterPage() {
  return (
    <>
      <MainSectionCareer />

      <InternationalTeam />

      <CareerForm id="career" />
    </>
  );
}

export default CareerCenterPage;
