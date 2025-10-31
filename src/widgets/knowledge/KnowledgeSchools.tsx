import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import KnowledgeSchoolsSwiper from "./components/KnowledgeSchoolsSwiper";
import { getTranslations } from "next-intl/server";
import { getKnowledgePageData } from "@/entities/knowledgepage/knowledge.service";

async function KnowledgeSchools() {
  const t = await getTranslations("KnowledgePage");

  const data = await getKnowledgePageData();

  if (!data || !data?.schools || !data?.schools?.length) {
    return null;
  }

  const schools = data?.schools;

  return (
    <section>
      <div className="outer-wrapper bg-theprimary py-8 rounded-2xl mt-24">
        <Container>
          <div className="wrapper flex flex-col gap-6 md:gap-8">
            <Headline size="sm" as="h5" className="text-white">
              {t("schools")}
            </Headline>

            <KnowledgeSchoolsSwiper schools={schools} />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default KnowledgeSchools;
