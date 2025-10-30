import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ChooseLab from "./ChooseLab";
import { getTranslations } from "next-intl/server";
import { getLabPageData } from "@/entities/laboratories-page/lab-page.service";

async function LabDirections() {
  const data = await getLabPageData();

  if (!data || !data.lab_directions?.length) return null;

  const t = await getTranslations("LaboratoriesPage");

  const labDirections = data?.lab_directions;

  return (
    <section className="lab-directions">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline>{t("chooseLab")}</Headline>

          <ChooseLab labDirections={labDirections} />
        </div>
      </Container>
    </section>
  );
}

export default LabDirections;
