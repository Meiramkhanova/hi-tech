import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import MethodsWrapper from "./MethodsWrapper";

function Methods() {
  return (
    <section className="methods">
      <Container>
        <div className="methods-outer-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline as="h5" size="sm" className="text-gray-400 pb-2">
            ПРАКТИКИ И МЕТОДЫ
          </Headline>

          <Headline className="md:w-1/2">
            Обучение в Hi-Tech Institute строится на современных практиках
            которые делают процесс динамичным и прикладным
          </Headline>

          <MethodsWrapper />

          <div className="learning-desc text-gray-400 md:w-1/2 pt-2">
            Эти практики помогают студентам не просто усваивать знания, а
            накапливать опыт и готовиться к работе в индустрии ещё во время
            учёбы.
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Methods;
