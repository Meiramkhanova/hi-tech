"use client";

import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";
import AboutInfos from "./AboutInfos";
import { useHomePage } from "@/entities/homepage/HomePageClientProvider";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";

function AboutSection() {
  const data = useHomePage();

  if (!data?.about?.length) return null;

  const aboutInfo = data.about[0];

  const aboutInfos = data.aboutinfos;

  return (
    <section className="about">
      <Container>
        <div className="about-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            О нас
          </Headline>

          <div className="about-info grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            <Headline>{aboutInfo.title}</Headline>

            <div className="info-btn flex flex-col gap-6 md:gap-8">
              <p className="text-gray-400">{aboutInfo.desc}</p>

              <Button href="/about" variant="outlined">
                Подробнее о HTI
              </Button>
            </div>
          </div>

          <div className="about-images grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            {aboutInfo.images?.map((image) => (
              <Image
                key={image.id}
                src={getStrapiMedia(image?.formats?.large?.url || image?.url)}
                alt="about"
                width={672}
                height={392}
                className="w-full h-[24.5rem] object-cover rounded-2xl"
              />
            ))}
          </div>

          <AboutInfos aboutInfos={aboutInfos} />
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
