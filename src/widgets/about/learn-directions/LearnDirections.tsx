import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import DirectionsWrapper from "./DirectionsWrapper";

function LearnDirections() {
  return (
    <section className="learning-directions">
      <Container>
        <div className="directions-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline as="h5" size="sm" className="text-gray-400 pb-2">
            ПОДХОД
          </Headline>

          <Headline className="lg:w-1/2">
            В основе обучения Hi-Tech Institute баланс трёх направлений
          </Headline>

          <DirectionsWrapper />

          <div className="learning-desc text-gray-400 lg:w-1/2 pt-2">
            Такой подход превращает процесс обучения в полноценный опыт:
            студенты не просто получают знания, а учатся применять их сразу на
            практике и строить карьеру ещё во время учёбы.
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LearnDirections;
