import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ChooseLab from "./ChooseLab";
import getLabDirections from "@/entities/lab-directions/getLabDirections";

async function LabDirections() {
  const data = await getLabDirections();

  if (!data) {
    return null;
  }

  const labDirections = data?.data;

  return (
    <section className="lab-directions">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline>Выбери направление лабораторий</Headline>

          <ChooseLab labDirections={labDirections} />
        </div>
      </Container>
    </section>
  );
}

export default LabDirections;
