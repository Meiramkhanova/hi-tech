import getLabItems from "@/entities/lab-items/getLabItems.service";
import Button from "@/shared/ui/Button";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { LabWord } from "@/shared/utils/getLabWord";
import { getTranslations } from "next-intl/server";

async function Lab() {
  const data = await getLabItems();

  if (!data || !data.data?.length) {
    return null;
  }

  const t = await getTranslations("HomePage");

  const totalLabItems = data?.data.length;

  return (
    <section className="laborotories">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("Laboratories")}
          </Headline>

          <div className="lab-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>
              <span>{totalLabItems ?? 0}</span> {LabWord(totalLabItems ?? 0)}
            </Headline>

            <div className="lab-info-wrapper flex flex-col gap-6 md:gap-8">
              <div className="lab-info text-gray-400">{t("labInfo")}</div>

              <Button href="/laboratories">
                {t("More about laboratories")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Lab;
