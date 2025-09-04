import AboutSection from "@/widgets/about/AboutSection";
import DirectionActivity from "@/widgets/direction-activity/DirectionActivity";
import MainInfoNews from "@/widgets/info-news/MainInfoNews";

export default async function Home() {
  return (
    <>
      <MainInfoNews />
      <AboutSection />
      <DirectionActivity />
    </>
  );
}
