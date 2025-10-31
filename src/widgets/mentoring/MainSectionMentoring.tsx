import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import ScrollButton from "../it-development/components/ScrollButton";

async function MainSectionMentoring() {
  const t = await getTranslations("MentoringPage");

  return (
    <section className="it-development-info">
      <Container>
        <div className="wrapper py-24">
          <div className="main-section-title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>{t("sectionTitle")}</Headline>

            <div className="desc-btn flex flex-col gap-6 md:gap-8">
              <div className="desc text-gray-400">{t("sectionDesc1")}</div>

              <div className="desc text-gray-400">{t("sectionDesc2")}</div>

              <ScrollButton elId="mentoring" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainSectionMentoring;
