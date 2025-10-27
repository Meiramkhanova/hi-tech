import { SchoolMainSection } from "@/entities/department-school/DepartmentSchool.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";
import Image from "next/image";

function SchoolMainAboutSection({
  title,
  image,
  desc,
}: Pick<SchoolMainSection, "title" | "image" | "desc">) {
  return (
    <section>
      <Container>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:h-[calc(100vh-80px)]">
          <div className="left-main-section h-full flex flex-col gap-4 justify-between pt-12 md:pb-12">
            <Headline>{title}</Headline>

            <Headline>{desc}</Headline>

            <div />
          </div>

          <div className="right-main-section h-full md:pb-12">
            <Image
              src={getStrapiMedia(image.url)}
              alt="narxoz-lab"
              width={672}
              height={672}
              className="h-[21rem] md:h-[35rem]  xl:size-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SchoolMainAboutSection;
