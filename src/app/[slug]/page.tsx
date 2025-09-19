import getTabContentData from "@/entities/tabContent/getTabContent";
import { sectionsMapper } from "@/entities/tabContent/sectionsMapper";
import { TabResponse } from "@/entities/tabContent/TabContent.t";
import NotFound from "../not-found";

export default async function DepartmentFormatPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const res: TabResponse | null = await getTabContentData(slug);

  if (!res || !res.data?.length || !res.data[0]?.sections?.length) {
    return NotFound();
  }

  const tabData = res.data[0];

  return (
    <div className="page-wrapper py-6 md:py-8">
      {tabData.sections?.map((section, index) => {
        if (!section.__component) return null;

        const Component = sectionsMapper[section.__component];

        if (!Component) return null;

        const sectionKey: string = `section-${String(section.id)}-${index}`;

        return (
          <div key={sectionKey}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Component {...(section as any)} />
          </div>
        );
      })}
    </div>
  );
}
