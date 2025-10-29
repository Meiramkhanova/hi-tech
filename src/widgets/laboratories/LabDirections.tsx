import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ChooseLab from "./ChooseLab";
import getLabDirections from "@/entities/lab-directions/getLabDirections";
import { getTranslations } from "next-intl/server";

async function LabDirections() {
  const data = await getLabDirections();

  if (!data?.data?.length) return null;

  const t = await getTranslations("LaboratoriesPage");

  const labDirections = data?.data;

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
