import AboutSection from "@/widgets/home/about/AboutSection";
import DirectionActivity from "@/widgets/home/direction-activity/DirectionActivity";
import MainInfoNews from "@/widgets/home/info-news/MainInfoNews";
import Lab from "@/widgets/home/Lab";
import News from "@/widgets/home/news/News";

export default async function Home() {
  return (
    <>
      <MainInfoNews />
      <AboutSection />
      {/* <DirectionActivity /> */}
      <Lab />
      <News />
    </>
  );
}
