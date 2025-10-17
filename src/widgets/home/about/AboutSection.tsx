import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";
import AboutInfos from "./AboutInfos";
import { getTranslations } from "next-intl/server";

async function AboutSection() {
  const t = await getTranslations("HomePage");

  return (
    <section className="about">
      <Container>
        <div className="about-wrapper pt-24 flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2">
            {t("About us")}
          </Headline>

          <div className="about-info grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            <Headline>{t("About.sectionTitle")}</Headline>

            <div className="info-btn flex flex-col gap-6 md:gap-8">
              <p className="text-gray-400">{t("About.sectionDesc")}</p>

              <Button href="/about" variant="outlined">
                {t("More about HTI")}
              </Button>
            </div>
          </div>

          <div className="about-images grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8">
            <Image
              src="/assets/about1.webp"
              alt="about"
              width={672}
              height={392}
              className="w-full h-[24.5rem] object-cover rounded-2xl"
            />

            <Image
              src="/assets/about2.webp"
              alt="about"
              width={672}
              height={392}
              className="w-full h-[24.5rem] object-cover rounded-2xl"
            />
          </div>

          <AboutInfos />
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
