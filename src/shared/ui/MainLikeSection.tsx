import Image from "next/image";
import Container from "./Container";
import { Headline } from "./Headline";
import Button from "./Button";

interface MainLikeSectionProps {
  name: string;
  title: string;
  subtitle: string;
  image: string;
}

function MainLikeSection({
  name,
  title,
  subtitle,
  image,
}: MainLikeSectionProps) {
  return (
    <section className="school-info">
      <Container>
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pt-24">
          <div className="left-wrapper flex flex-col justify-between gap-6 md:gap-8">
            <Headline size="sm" as="h5" className="text-gray-400 pb-2">
              {name}
            </Headline>

            <Headline className="uppercase">{title}</Headline>

            <div className="subtitle-btns flex flex-col gap-10">
              <div className="subtitle text-gray-400">{subtitle}</div>

              <Button className="w-full md:w-fit">Подробнее о школе</Button>
            </div>
          </div>

          <div className="right-wrapper w-full">
            <Image
              src={image}
              alt="info-img"
              width={672}
              height={672}
              className="h-[21rem] md:h-[35rem] rounded-2xl object-cover w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainLikeSection;
