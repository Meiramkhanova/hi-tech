import { LabItemSingleSection } from "@/entities/lab-item/LabItemSingle.t";
import Career from "@/shared/icons/Career";
import Focus from "@/shared/icons/Focus";
import Skills from "@/shared/icons/Skills";
import Container from "@/shared/ui/Container";
import InfoItem from "@/shared/ui/InfoItem";

interface LabItemInfosProps {
  sectionInfo: LabItemSingleSection;
}

function LabItemInfos({ sectionInfo }: LabItemInfosProps) {
  if (!sectionInfo) return null;

  return (
    <section className="lab-item-infos">
      <Container>
        <div className="wrapper pt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <InfoItem
            localIcon={<Focus />}
            title="Фокус"
            desc={sectionInfo.focus_title}
            isTitleGreen
          />

          <InfoItem
            localIcon={<Skills />}
            title="Навыки (что умеют выпускники)"
            descWithId={sectionInfo.skills}
            isTitleGreen
          />

          <InfoItem
            localIcon={<Career />}
            title="Карьера"
            descWithId={sectionInfo.careers}
            isTitleGreen
            HasDescWithIdTitle
          />
        </div>
      </Container>
    </section>
  );
}

export default LabItemInfos;
