import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getTranslations } from "next-intl/server";
import ItDevelopmentForm from "./ItDevelopmentForm";

interface DiscussProjectProps {
  id?: string;
}

async function DiscussProject({ id }: DiscussProjectProps) {
  const t = await getTranslations("ItDevelopmentPage");

  return (
    <section className="discuss-project" id={id}>
      <Container>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-24">
          <Headline>{t("wanna discuss project")}</Headline>

          <div className="form-wrapper flex flex-col gap-12">
            <div className="form-description text-gray-400">
              {t("formDesc")}
            </div>

            <ItDevelopmentForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DiscussProject;
