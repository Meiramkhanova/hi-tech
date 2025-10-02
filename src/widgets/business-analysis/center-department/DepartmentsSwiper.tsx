"use client";

import AI from "@/shared/icons/Ai";
import Analysis from "@/shared/icons/Analysis";
import Earth from "@/shared/icons/Earth";
import Focus from "@/shared/icons/Focus";
import Planner from "@/shared/icons/Planner";
import Profile from "@/shared/icons/Profile";
import Science from "@/shared/icons/Science";
import Transport from "@/shared/icons/Transport";
import InfoItem from "@/shared/ui/InfoItem";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const departments = [
  {
    id: 1,
    icon: <Analysis />,
    title: "Центр анализа отраслевых рынков и торговли",
    desc: "Фокус: динамика отраслей и международная торговля.",
  },
  {
    id: 2,
    icon: <Planner />,
    title: "Центр стратегического планирования",
    desc: "Фокус: сценарии развития экономики и компаний.",
  },
  {
    id: 3,
    icon: <Earth />,
    title: "Центр исследований АПК и HoReCa",
    desc: "Фокус: агропром, индустрия гостеприимства, устойчивое развитие.",
  },
  {
    id: 4,
    icon: <Earth />,
    title: "Центр экономики городской среды и транспорта",
    desc: "Фокус: транспортные системы и городская среда.",
  },
  {
    id: 5,
    icon: <Transport />,
    title: "Центр экономики городской среды и транспорта",
    desc: "Фокус: транспортные системы и городская среда.",
  },
  {
    id: 6,
    icon: <AI />,
    title: "Центр искусственного интеллекта",
    desc: "Фокус: AI-решения для анализа и прогнозов.",
  },
  {
    id: 7,
    icon: <Focus />,
    title: "Форсайт-центр",
    desc: "Фокус: долгосрочные прогнозы и сценарное моделирование.",
  },
  {
    id: 8,
    icon: <Science />,
    title: "Центр анализа и менеджмента науки и инноваций",
    desc: "Фокус: оценка научных проектов и управление инновациями.",
  },
  {
    id: 9,
    icon: <Profile />,
    title: "Центр мониторинга образования и HR",
    desc: "Фокус: рынок труда, компетенции, кадровые стратегии.",
  },
];

function DepartmentsSwiper() {
  return (
    <div className="departments-swiper flex flex-col gap-6 md:gap-8 w-full">
      <div className="nav-arrow-wrapper flex w-full justify-end">
        <div className="nav-arrows flex items-center justify-end 2xl:justify-start gap-2">
          <CircleChevronLeft
            size={32}
            className="depart-prev-btn size-8 stroke-thesecondary cursor-pointer"
          />

          <CircleChevronRight
            size={32}
            className="depart-next-btn size-8 stroke-thesecondary cursor-pointer"
          />
        </div>
      </div>

      <div className="departments-carousel w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".depart-prev-btn",
            nextEl: ".depart-next-btn",
          }}
          spaceBetween={32}
          speed={800}
          slidesPerView="auto"
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1536: { slidesPerView: "auto" },
          }}>
          {departments.map((item) => (
            <SwiperSlide key={item.id} className="2xl:!w-[24.5rem] !h-auto">
              <InfoItem
                title={item.title}
                desc={item.desc}
                localIcon={item.icon}
                hasButton
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DepartmentsSwiper;
