import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import CareerForm from "./components/CareerForm";

interface CareerFormProps {
  id?: string;
}

async function CareerFormSection({ id }: CareerFormProps) {
  const t = await getTranslations("CareerCenterPage");

  return (
    <section className="career-form" id={id}>
      <Container>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-24">
          <Headline>{t("formTitle")}</Headline>

          <CareerForm />
        </div>
      </Container>
    </section>
  );
}

export default CareerFormSection;
