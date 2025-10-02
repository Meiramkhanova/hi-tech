import NotFound from "@/app/not-found";
import { departmentCenterSectionsMapper } from "@/entities/department-center/centersSectionsMapper";
import { DepartmentCenterResponse } from "@/entities/department-center/DepartmentCenter.t";
import GetDepartmentCenter from "@/entities/department-center/getDepartmentCenter";
import CenterMainSection from "@/widgets/department-center/CenterMainSection";

// export default async function DepartmentCenterPage({
//   params,
// }: {
//   params: Promise<{ slug: string; centerSlug: string }>;
// }) {
//   const { centerSlug } = await params;

//   const res: DepartmentCenterResponse | null = await GetDepartmentCenter(
//     centerSlug
//   );

//   if (!res || !res.data?.length || !res.data[0]?.sections?.length) {
//     return NotFound();
//   }

//   const centerData = res.data[0];

//   return (
//     <div className="page-wrapper pt-6 md:pt-8">
//       <CenterMainSection title={centerData?.title} />

//       {centerData.sections?.map((section, index) => {
//         if (!section.__component) return null;

//         const Component = departmentCenterSectionsMapper[section.__component];

//         if (!Component) return null;

//         const sectionKey: string = `section-${String(section.id)}-${index}`;

//         return (
//           <div key={sectionKey}>
//             {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//             <Component {...(section as any)} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

function DepartmentCenterPage() {
  return <NotFound />;
}

export default DepartmentCenterPage;
