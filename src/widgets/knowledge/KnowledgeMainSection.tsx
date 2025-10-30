import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";

function KnowledgeMainSection() {
  return (
    <section>
      <Container>
        <div className="wrapper min-h-[10rem] md:min-h-[20rem] flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>rfds</Headline>

            <div className="knowledge-description text-gray-400">edsxzsax</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default KnowledgeMainSection;
