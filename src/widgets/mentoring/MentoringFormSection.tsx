import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import MentoringForm from "./components/MentoringForm";

interface MentoringFormSectionProps {
  id?: string;
}

async function MentoringFormSection({ id }: MentoringFormSectionProps) {
  const t = await getTranslations("MentoringPage");

  return (
    <section className="mentoring-form" id={id}>
      <Container>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-24">
          <Headline>{t("formTitle")}</Headline>

          <MentoringForm />
        </div>
      </Container>
    </section>
  );
}

export default MentoringFormSection;
