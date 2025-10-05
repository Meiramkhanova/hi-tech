import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Stepper from "@/shared/ui/Stepper";

function HowGetInto() {
  return (
    <section className="how-to-get-into-lab">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Как попасть в лабораторию
          </Headline>

          <Stepper textClassName="text-2xl" />
        </div>
      </Container>
    </section>
  );
}

export default HowGetInto;
