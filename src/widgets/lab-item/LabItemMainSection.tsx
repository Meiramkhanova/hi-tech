import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Stepper from "@/shared/ui/Stepper";

interface LabItemMainSectionProps {
  title: string;
  subtTitle: string;
}

function LabItemMainSection({
  title = "",
  subtTitle = "",
}: LabItemMainSectionProps) {
  return (
    <section className="lab-item-info">
      <Container>
        <div className="wrapper flex items-center pt-8 xl:pt-0 xl:h-[calc(100vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Headline className="font-medium uppercase">{title}</Headline>

            <div className="right-lab-info flex flex-col gap-8 md:gap-18">
              <Headline>«{subtTitle}»</Headline>

              <Button
                href={`/lab-registration?lab=${encodeURIComponent(title)}`}
                className="w-full md:w-fit">
                Записаться в лабораторию
              </Button>

              <Stepper />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabItemMainSection;
