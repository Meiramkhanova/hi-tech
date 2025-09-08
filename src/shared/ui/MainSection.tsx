import Image from "next/image";
import Container from "./Container";
import BusinessAnalysis from "../icons/BusinessAnalysis";
import { Headline } from "./Headline";
import Button from "./Button";

function MainSection() {
  return (
    <section className="main-section">
      <Container>
        <div className="wrapper grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
          <div className="left-wrapper flex flex-col justify-between gap-6 md:gap-8">
            <div className="icon-title flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="icon size-16 md:size-24 flex items-center justify-center shrink-0 bg-theprimary/10 rounded-2xl">
                <BusinessAnalysis className="size-8 md:size-12 fill-theprimary/5" />
              </div>

              <Headline className="uppercase max-w-[31rem]">
                Business Analytics & Strategy
              </Headline>
            </div>

            <Headline className="uppercase">
              Департамент бизнес-аналитики и стратегического развития
            </Headline>

            <div className="btns flex flex-col md:flex-row md:items-center gap-2">
              <Button className="w-full md:w-fit">Поступить</Button>

              <Button variant="outlined" className="w-full md:w-fit">
                Программы и проекты
              </Button>
            </div>
          </div>

          <div className="right-wrapper">
            <Image
              src="/assets/slide1.png"
              alt="info-img"
              width={672}
              height={672}
              className="h-[21rem] md:h-[35rem] rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainSection;
