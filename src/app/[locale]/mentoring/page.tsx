import MainSectionMentoring from "@/widgets/mentoring/MainSectionMentoring";
import MentoringFormSection from "@/widgets/mentoring/MentoringFormSection";
import MentoringForWhom from "@/widgets/mentoring/MentoringForWhom";

function MentoringPage() {
  return (
    <>
      <MainSectionMentoring />

      <MentoringForWhom />

      <MentoringFormSection id="mentoring" />
    </>
  );
}

export default MentoringPage;
