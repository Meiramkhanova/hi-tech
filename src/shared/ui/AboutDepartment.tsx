import { TabAboutDepartment } from "@/entities/tabContent/TabContent.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";

async function AboutDepartment({
  title,
  desc,
}: TabAboutDepartment & { departmentSlug: string }) {
  const t = await getTranslations("slugPage");

  return (
    <section className="about-department">
      <Container>
        <div className="about-wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("aboutDepartment")}
          </Headline>

          <div className="title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline className="xl:max-w-[38rem]">{title}</Headline>

            <div className="description flex flex-col gap-6 md:gap-8 text-gray-400">
              {desc &&
                desc.map((descItem, index) => (
                  <p key={`desc-${descItem.id}-${index}`}>{descItem.text}</p>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutDepartment;
