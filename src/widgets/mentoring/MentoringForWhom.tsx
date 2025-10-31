import GraduationCap from "@/shared/icons/GraduationCap";
import Luggage from "@/shared/icons/Luggage";
import Profile from "@/shared/icons/Profile";
import Speed from "@/shared/icons/Speed";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ItemIconTitle from "@/shared/ui/ItemIconTitle";
import { getTranslations } from "next-intl/server";

async function MentoringForWhom() {
  const t = await getTranslations("MentoringPage");

  const items = [
    {
      id: 1,
      icon: <GraduationCap className="text-theprimary size-10" />,
      name: t("student"),
    },
    {
      id: 2,
      icon: <Speed className="text-theprimary stroke-theprimary size-10" />,
      name: t("startups"),
    },
    {
      id: 3,
      icon: <Luggage className="text-theprimary stroke-theprimary size-10" />,
      name: t("companies"),
    },
    {
      id: 4,
      icon: <Profile className="text-theprimary stroke-theprimary size-10" />,
      name: t("youngSpecialists"),
    },
  ];

  return (
    <section className="mentoring-for-whome">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("forWhom")}
          </Headline>

          <div className="info-items grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8">
            {items.map((item) => (
              <ItemIconTitle key={item.id} icon={item.icon} title={item.name} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MentoringForWhom;
