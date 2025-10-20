import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";

async function AnalytycsMainSection() {
  const t = await getTranslations("Analytics");

  return (
    <section>
      <Container>
        <div className="wrapper py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Headline>{t("sectionTitle")}</Headline>

          <div className="descriptions flex flex-col gap-6 md:gap-8 text-gray-400">
            <div className="description">{t("desc1")}</div>

            <div className="description">{t("desc2")}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AnalytycsMainSection;
