import AboutMain from "@/widgets/about/AboutMain";
import GoalMission from "@/widgets/about/GoalMission";
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

      {/* <LearnDirections /> */}

      <Methods />

      <UsingAI />

      <TechInstr />
    </>
  );
}

export default AboutPage;
