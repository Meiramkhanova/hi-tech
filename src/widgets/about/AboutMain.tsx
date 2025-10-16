import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import AboutSwiper from "./AboutSwiper";
import { getAboutPageData } from "@/entities/aboutpage/AboutPage.service";
import { getTranslations } from "next-intl/server";

export default async function AboutMain() {
  const data = await getAboutPageData();

  const aboutItems = data?.about_history;

  if (!aboutItems?.length) {
    return null;
  }

  const t = await getTranslations("AboutPage");

  return (
    <section className="about-main">
      <Container>
        <div className="wrapper pt-28 flex flex-col gap-8 pb-24">
          <Headline size="sm" as="h5" className="text-gray-400">
            {t("HistoryConception.sectionTitle")}
          </Headline>

          <AboutSwiper aboutItems={aboutItems} />
        </div>
      </Container>
    </section>
  );
}
