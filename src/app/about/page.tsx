import TitleInfo from "@/shared/ui/TitleInfo";
import AboutMain from "@/widgets/about/AboutMain";
import GoalMission from "@/widgets/about/GoalMission";
import LearnDirections from "@/widgets/about/learn-directions/LearnDirections";
import Methods from "@/widgets/about/methods/Methods";
import TechInstr from "@/widgets/about/tech-instr/TechInstr";
import TitleInfoWrapper from "@/widgets/about/TitleInfoWrapper";
import UsingAI from "@/widgets/about/using-ai/UsingAI";

function AboutPage() {
  return (
    <>
      <AboutMain />

      <GoalMission />

      <TitleInfoWrapper />

      <LearnDirections />

      <Methods />

      <UsingAI />

      <TechInstr />
    </>
  );
}

export default AboutPage;
