import AboutSection from "@/widgets/home/about/AboutSection";
import AiInstitute from "@/widgets/home/ai-institute/AiInstitute";
import MainInfoNews from "@/widgets/home/info-news/MainInfoNews";
import Lab from "@/widgets/home/Lab";
import News from "@/widgets/home/news/News";

export default async function Home() {
  return (
    <>
      <MainInfoNews />

      <AboutSection />

      <Lab />

      <AiInstitute />

      <News />
    </>
  );
}
