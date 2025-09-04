import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";
import AboutInfos from "./AboutInfos";

function AboutSection() {
  return (
    <section className="about">
      <Container>
        <div className="about-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            О нас
          </Headline>

          <div className="about-info grid grid-cols-1 md:grid-cols-2 w-full">
            <Headline>
              Подготавливаем специалистов и создаём экосистему технологий
            </Headline>

            <div className="info-btn flex flex-col gap-6 md:gap-8">
              <p className="text-gray-400">
                Hi-Tech Institute — это современный центр образования и
                инноваций в Казахстане и Центральной Азии. Мы объединяем
                обучение, практику и исследования, помогая студентам развивать
                ключевые компетенции и реализовывать проекты в сфере технологий
                и бизнеса
              </p>

              <Button variant="outlined">Подробнее о HTI</Button>
            </div>
          </div>

          <div className="about-images grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            <Image
              src="/assets/about1.png"
              alt="about"
              width={672}
              height={392}
              className="w-full h-[24.5rem] object-cover rounded-2xl"
            />

            <Image
              src="/assets/about2.png"
              alt="about"
              width={672}
              height={392}
              className="w-full h-[24.5rem] object-cover rounded-2xl transform -scale-x-100"
            />
          </div>

          <AboutInfos />
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
