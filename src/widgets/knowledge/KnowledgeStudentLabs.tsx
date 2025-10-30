import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import KnowledgeLabsSwiper from "./components/KnowledgeLabsSwiper";
import { getKnowledgePageData } from "@/entities/knowledgepage/knowledge.service";

async function KnowledgeStudentLabs() {
  const t = await getTranslations("KnowledgePage");

  const data = await getKnowledgePageData();

  if (!data || !data?.schools || !data?.lab_items?.length) {
    return null;
  }

  const labs = data?.lab_items;

  return (
    <section className="student-laboratories">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            {t("studentLabs")}
          </Headline>

          <KnowledgeLabsSwiper labs={labs} />
        </div>
      </Container>
    </section>
  );
}

export default KnowledgeStudentLabs;
