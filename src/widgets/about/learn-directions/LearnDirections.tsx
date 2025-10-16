import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import DirectionsWrapper from "./DirectionsWrapper";
import { getTranslations } from "next-intl/server";

export default async function LearnDirections() {
  const t = await getTranslations("AboutPage");

  return (
    <section className="learning-directions">
      <Container>
        <div className="directions-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline as="h5" size="sm" className="text-gray-400 pb-2">
            {t("Approach.sectionTitle")}
          </Headline>

          <Headline className="lg:w-1/2">{t("Approach.sectionDesc")}</Headline>

          <DirectionsWrapper />

          <div className="learning-desc text-gray-400 lg:w-1/2 pt-2">
            {t("Approach.sectionBottomDesc")}
          </div>
        </div>
      </Container>
    </section>
  );
}
