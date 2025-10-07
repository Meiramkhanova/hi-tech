import NotFound from "@/app/not-found";
import getLabItem from "@/entities/lab-item/getLabItem.service";
import { LabItemResponse } from "@/entities/lab-item/LabItemSingle.t";
import LabItemInfos from "@/widgets/lab-item/LabItemInfos";
import LabItemMainSection from "@/widgets/lab-item/LabItemMainSection";

export default async function LabSinglePage({
  params,
}: {
  params: Promise<{ labSlug: string }>;
}) {
  const { labSlug } = await params;

  const res: LabItemResponse | null = await getLabItem(labSlug);

  if (!res || !res.data?.length || !res.data[0]?.section?.length) {
    return NotFound();
  }

  const labData = res.data[0];

  console.log("labData", labData);

  return (
    <>
      <LabItemMainSection
        title={labData?.section[0]?.main_section_title}
        subtTitle={labData?.section[0]?.main_section_desc}
      />

      <LabItemInfos sectionInfo={labData?.section[0]} />
    </>
  );
}
