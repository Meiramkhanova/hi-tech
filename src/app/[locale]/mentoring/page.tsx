import MainSectionMentoring from "@/widgets/mentoring/MainSectionMentoring";
import MentoringExperts from "@/widgets/mentoring/MentoringExperts";
import MentoringFormSection from "@/widgets/mentoring/MentoringFormSection";
import MentoringForWhom from "@/widgets/mentoring/MentoringForWhom";

function MentoringPage() {
  return (
    <>
      <MainSectionMentoring />

      <MentoringForWhom />

      <MentoringExperts />

      <MentoringFormSection id="mentoring" />
    </>
  );
}

export default MentoringPage;
