import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import MethodsWrapper from "./MethodsWrapper";
import { getTranslations } from "next-intl/server";

export default async function Methods() {
  const t = await getTranslations("AboutPage");

  return (
    <section className="methods">
      <Container>
        <div className="methods-outer-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline as="h5" size="sm" className="text-gray-400 pb-2">
            {t("PracticeAndMethods.sectionTitle")}
          </Headline>

          <Headline className="lg:w-1/2">
            {t("PracticeAndMethods.sectionDesc")}
          </Headline>

          <MethodsWrapper />

          <div className="learning-desc text-gray-400 lg:w-1/2 pt-2">
            {t("PracticeAndMethods.sectionBottomDesc")}
          </div>
        </div>
      </Container>
    </section>
  );
}
