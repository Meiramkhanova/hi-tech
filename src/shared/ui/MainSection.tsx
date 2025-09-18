import Image from "next/image";
import Container from "./Container";
import { Headline } from "./Headline";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "../utils/getStrapiMedia";
import { TabMainSection } from "@/entities/tabContent/TabContent.t";
import { ReactNode } from "react";

export interface MainSectionProps extends TabMainSection {
  tempIcon?: ReactNode;
  tempImage?: string;
}

function MainSection({ icon, name, title, image }: MainSectionProps) {
  return (
    <section className="main-section">
      <Container>
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
          <div className="left-wrapper flex flex-col justify-between gap-6 md:gap-8">
            <div
              className={cn(
                "icon-title",
                icon
                  ? "flex flex-col md:flex-row md:items-center gap-6 md:gap-8"
                  : "pt-4"
              )}>
              {icon && icon[0]?.url && (
                <div className="icon size-16 md:size-20 flex items-center justify-center shrink-0 bg-theprimary/10 rounded-2xl">
                  {/* <IconWrapper icon={icon} /> */}
                  <img src={getStrapiMedia(icon[0].url)} alt="icon" />
                </div>
              )}

              <Headline className="uppercase max-w-[31rem]">{name}</Headline>
            </div>

            <Headline className="uppercase">{title}</Headline>

            <div className="btns flex flex-col md:flex-row md:items-center gap-2">
              <Button className="w-full md:w-fit">Поступить</Button>

              <Button variant="outlined" className="w-full md:w-fit">
                Программы и проекты
              </Button>
            </div>
          </div>

          <div className="right-wrapper w-full">
            <Image
              src={getStrapiMedia(image?.url)}
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

export default MainSection;
