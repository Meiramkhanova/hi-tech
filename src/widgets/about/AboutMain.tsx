import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import AboutSwiper from "./AboutSwiper";
import { getAboutPageData } from "@/entities/aboutpage/AboutPage.service";

export default async function AboutMain() {
  const data = await getAboutPageData();

  const aboutItems = data?.about_history;

  if (!aboutItems?.length) {
    return null;
  }

  return (
    <section className="about-main">
      <Container>
        <div className="wrapper pt-28 flex flex-col gap-8">
          <Headline size="sm" as="h5" className="text-gray-400">
            история и концепция
          </Headline>

          <AboutSwiper aboutItems={aboutItems} />
        </div>
      </Container>
    </section>
  );
}
