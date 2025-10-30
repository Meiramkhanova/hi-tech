import { getKnowledgePageData } from "@/entities/knowledgepage/knowledge.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

async function KnowledgeMainSection() {
  const data = await getKnowledgePageData();

  if (!data || !data?.main_section_title || !data?.main_section_decscription) {
    return null;
  }

  const title = data?.main_section_title;

  const description = data?.main_section_decscription;

  return (
    <section>
      <Container>
        <div className="wrapper min-h-[10rem] md:min-h-[20rem] flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>{title}</Headline>

            <div className="knowledge-description text-gray-400">
              {description}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default KnowledgeMainSection;
