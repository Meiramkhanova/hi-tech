import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface OneSchoolItemProps {
  slug: string;
  schoolName: string;
  desc: string;
}

async function OneSchoolItem({ slug, schoolName, desc }: OneSchoolItemProps) {
  const t = await getTranslations("slugPage");

  return (
    <section className="department-school">
      <Container>
        <div className="wrapper pt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="schoolInfo h-full flex flex-col justify-between">
            <Headline size="sm" as="h5" className="text-gray-400">
              {schoolName}
            </Headline>

            <Headline>{desc}</Headline>

            <div className="flex flex-col gap-6 md:gap-8">
              <div className="programm-info text-gray-400">
                {t("schoolMoreInfoText")}
              </div>

              <Button>{t("schoolMoreInfoBtn")}</Button>
            </div>
          </div>

          <div className="school-info-image w-full">
            <Image
              src="/assets/school-image.png"
              alt="school-image"
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

export default OneSchoolItem;
