import KnowledgeMainSection from "@/widgets/knowledge/KnowledgeMainSection";
import KnowledgeSchools from "@/widgets/knowledge/KnowledgeSchools";
import KnowledgeStudentLabs from "@/widgets/knowledge/KnowledgeStudentLabs";
import SchoolYaizy from "@/widgets/knowledge/SchoolYaizy";

function KnowledgePage() {
  return (
    <>
      <KnowledgeMainSection />

      <SchoolYaizy />

      <KnowledgeSchools />

      <KnowledgeStudentLabs />
    </>
  );
}

export default KnowledgePage;
