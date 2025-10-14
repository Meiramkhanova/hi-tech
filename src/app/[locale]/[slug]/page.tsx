import getTabContentData from "@/entities/tabContent/getTabContent";
import { departmentSectionsMapper } from "@/entities/tabContent/sectionsMapper";
import { DepartmentTabResponse } from "@/entities/tabContent/TabContent.t";
import NotFound from "../not-found";

// export default async function DepartmentFormatPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const res: DepartmentTabResponse | null = await getTabContentData(slug);

//   if (
//     !res ||
//     !res.data?.length ||
//     !res.data[0]?.sections ||
//     !res.data[0]?.sections?.length
//   ) {
//     return NotFound();
//   }

//   const tabData = res?.data[0];

//   return (
//     <div className="page-wrapper pt-6 md:pt-8">
//       {tabData.sections?.map((section, index) => {
//         if (!section.__component) return null;

//         const Component = departmentSectionsMapper[section.__component];

//         if (!Component) return null;

//         const sectionKey: string = `section-${String(section.id)}-${index}`;

//         return (
//           <div key={sectionKey}>
//             {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//             <Component {...(section as any)} departmentSlug={slug} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default function DepartmentFormatPage() {
  return NotFound();
}
