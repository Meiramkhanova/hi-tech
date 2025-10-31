import Compass from "@/shared/icons/Compass";
import Profile from "@/shared/icons/Profile";
import Settings from "@/shared/icons/Settings";
import Speed from "@/shared/icons/Speed";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import ItemIconTitle from "@/shared/ui/ItemIconTitle";
import { getTranslations } from "next-intl/server";
import ScrollButton from "./components/ScrollButton";

async function MainSection() {
  const t = await getTranslations("ItDevelopmentPage");

  const items = [
    {
      id: 1,
      icon: <Compass className="text-theprimary stroke-theprimary size-10" />,
      name: t("experienceAndCase"),
    },
    {
      id: 2,
      icon: <Speed className="text-theprimary stroke-theprimary size-10" />,
      name: t("agileAndSpeed"),
    },
    {
      id: 3,
      icon: <Profile className="text-theprimary stroke-theprimary size-10" />,
      name: t("teamOfExperts"),
    },
    {
      id: 4,
      icon: <Settings className="text-theprimary stroke-theprimary size-10" />,
      name: t("innovationAndTech"),
    },
  ];

  return (
    <section className="it-development-info">
      <Container>
        <div className="wrapper py-24 flex flex-col gap-16">
          <div className="main-section-title-desc grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Headline>{t("sectionTitle")}</Headline>

            <div className="desc-btn flex flex-col gap-6 md:gap-8">
              <div className="desc text-gray-400">{t("sectionDesc")}</div>

              <ScrollButton elId="development" />
            </div>
          </div>

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

export default MainSection;
