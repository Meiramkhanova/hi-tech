import getLabItems from "@/entities/lab-items/getLabItems.service";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { LabWord } from "@/shared/utils/getLabWord";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function LabMainSection() {
  const data = await getLabItems();

  if (!data || !data.data?.length) {
    return null;
  }

  const t = await getTranslations("LaboratoriesPage");

  const totalLabItems = data?.data.length;

  return (
    <section className="lab-main-section">
      <Container>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:h-[calc(100vh-80px)]">
          <div className="left-main-section h-full flex flex-col gap-4 justify-between pt-12 md:pb-12">
            <Headline>{t("Laboratories")}</Headline>

            <Headline>
              <span>{totalLabItems ?? 0}</span> {LabWord(totalLabItems ?? 0)}{" "}
              {t("inNarxoz")}
            </Headline>

            <div className="lab-description text-gray-400">{t("labDesc")}</div>
          </div>

          <div className="right-main-section h-full md:pb-12">
            <Image
              src="/assets/narxoz-lab.png"
              alt="narxoz-lab"
              width={672}
              height={672}
              className="h-[21rem] md:h-[35rem]  xl:size-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LabMainSection;
