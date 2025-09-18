import getTabContentData from "@/entities/tabContent/getTabContent";
import { sectionsMapper } from "@/entities/tabContent/sectionsMapper";
import { TabResponse } from "@/entities/tabContent/TabContent.t";
import NotFound from "../not-found";

export default async function DeparetmentFormatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res: TabResponse | null = await getTabContentData(slug);

  if (!res || !res.data?.length || !res.data[0]?.sections?.length) {
    return NotFound();
  }

  const tabData = res.data[0];

  return (
    <div className="page-wrapper py-6 md:py-8">
      {tabData.sections?.map((section) => {
        if (!section.__component) return null;

        const Component =
          sectionsMapper[section.__component as keyof typeof sectionsMapper];

        if (!Component) return null;

        return <Component key={section.id} {...section} />;
      })}
    </div>
  );
}
