import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import AICarousel from "./AICarousel";

function UsingAI() {
  return (
    <section className="using-ai">
      <Container>
        <div className="using-ai-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400">
            история и концепция
          </Headline>

          <Headline className="md:w-1/2">
            Мы применяем ИИ, чтобы сделать образование персонализированным,
            гибким и эффективным
          </Headline>

          <AICarousel />
        </div>
      </Container>
    </section>
  );
}

export default UsingAI;
