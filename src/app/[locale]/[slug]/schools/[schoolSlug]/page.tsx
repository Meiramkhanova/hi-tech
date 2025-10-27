import NotFound from "@/app/[locale]/not-found";
import { DepartmentSchoolResponse } from "@/entities/department-school/DepartmentSchool.t";
import GetDepartmentSchool from "@/entities/department-school/getDepartmentSchool";
import { departmentSchoolSectionsMapper } from "@/entities/department-school/schoolsSectionsMapper";

export default async function SchoolSinglePage({
  params,
}: {
  params: Promise<{ slug: string; schoolSlug: string }>;
}) {
  const { schoolSlug } = await params;

  const res: DepartmentSchoolResponse | null = await GetDepartmentSchool(
    schoolSlug
  );

  if (!res || !res.data?.length || !res.data[0]?.sections?.length) {
    return NotFound();
  }

  const schoolData = res.data[0];

  return schoolData.sections?.map((section, index) => {
    if (!section.__component) return null;

    const Component = departmentSchoolSectionsMapper[section.__component];

    if (!Component) return null;

    const sectionKey: string = `section-${String(section.id)}-${index}`;

    return (
      <div key={sectionKey}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Component {...(section as any)} />
      </div>
    );
  });
}
