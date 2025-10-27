import NotFound from "@/app/[locale]/not-found";
import { DepartmentSchoolResponse } from "@/entities/department-school/DepartmentSchool.t";
import GetDepartmentSchool from "@/entities/department-school/getDepartmentSchool";

export default async function SchoolSinglePage({
  params,
}: {
  params: Promise<{ slug: string; schoolSlug: string }>;
}) {
  const { schoolSlug } = await params;

  const res: DepartmentSchoolResponse | null = await GetDepartmentSchool(
    schoolSlug
  );

  console.log("yoyy", res?.data[0].sections);

  if (!res || !res.data?.length || !res.data[0]?.sections?.length) {
    return NotFound();
  }

  return <>SchoolSinglePage</>;
}
