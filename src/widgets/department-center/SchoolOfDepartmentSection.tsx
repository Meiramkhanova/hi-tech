import { SchoolsOfDepartment } from "@/entities/tabContent/TabContent.t";
import OneSchoolItem from "./OneSchoolItem";
import MoreSchoolItems from "./MoreSchoolItems";

function SchoolOfDepartmentSection({
  schools,
}: Pick<SchoolsOfDepartment, "schools">) {
  if (!schools || schools.length === 0) return null;

  if (schools.length === 1) {
    const school = schools[0];

    return (
      <OneSchoolItem
        slug={school.slug}
        schoolName={school.schoolName}
        desc={school.desc}
      />
    );
  }

  return <MoreSchoolItems schools={schools} />;
}

export default SchoolOfDepartmentSection;
