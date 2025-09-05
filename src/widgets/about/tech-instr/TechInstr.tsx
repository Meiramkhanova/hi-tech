import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import TechItems from "./TechItems";

function TechInstr() {
  return (
    <section className="tech-instr">
      <Container>
        <div className="tech-instr-wrapper py-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            ТЕХНИЧЕСКИЕ ИНСТРУМЕНТЫ
          </Headline>

          <Headline>
            Мы используем современные цифровые решения для анализа данных,
            командной работы и разработки
          </Headline>

          <TechItems />
        </div>
      </Container>
    </section>
  );
}

export default TechInstr;
