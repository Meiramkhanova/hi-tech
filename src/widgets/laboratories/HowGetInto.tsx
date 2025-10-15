import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import Stepper from "@/shared/ui/Stepper";
import { getTranslations } from "next-intl/server";

async function HowGetInto() {
  const t = await getTranslations("LaboratoriesPage");

  return (
    <section className="how-to-get-into-lab">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("howGetIntoLab")}
          </Headline>

          <Stepper textClassName="text-2xl" />
        </div>
      </Container>
    </section>
  );
}

export default HowGetInto;
