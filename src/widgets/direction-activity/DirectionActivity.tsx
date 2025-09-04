import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Carousel from "./Carousel";

function DirectionActivity() {
  return (
    <section className="direction-activity">
      <Container>
        <div className="activities-wrapper py-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" className="text-gray-400 pb-2">
            Основные направления деятельности
          </Headline>

          <Carousel />
        </div>
      </Container>
    </section>
  );
}

export default DirectionActivity;
