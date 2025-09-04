"use client";

import { cn } from "@/lib/utils";
import Icon from "@/shared/icons/Icon";
import Button from "@/shared/ui/Button";
import { Headline } from "@/shared/ui/Headline";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const departments = [
  {
    id: 1,
    title: "Business Analytics & Strategy",
    desc: "Готовим специалистов по анализу бизнес-процессов, стратегиям и цифровым решениям для компаний",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 2,
    title: "AI & Data Science",
    desc: "Обучаем работе с данными и искусственным интеллектом",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 3,
    title: "FinTech",
    desc: "Финансовые технологии: цифровые платежи, блокчейн-сервисы и инновации в банковской сфере.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 4,
    title: "Cybersecurity",
    desc: "Защита данных и систем: криптография, аудит и практические проекты по кибербезопасности.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 5,
    title: "Biotech",
    desc: "Современные биотехнологии: генная инженерия, биоинформатика и исследования для медицины и экологии.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 6,
    title: "Blockchain / Web3",
    desc: "Децентрализованные технологии: смарт-контракты, токенизация и создание приложений Web3.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 7,
    title: "Digital Product & Design",
    desc: "Создание цифровых продуктов: веб-разработка, UX/UI-дизайн и креативные медиа-проекты.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 8,
    title: "VC Department",
    desc: "Готовит новое поколение инвесторов, аналитиков и основателей стартапов, работающих в венчурной экосистеме.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
];

const activities = [
  {
    id: 1,
    title: "Курсы и программы",
    desc: "Современные образовательные модули в областях AI, FinTech, Data Science, биотеха и других перспективных направлений.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 2,
    title: "Хакатоны",
    desc: "Практические соревнования для студентов: программирование, аналитика и разработка решений для бизнеса.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 3,
    title: "Лаборатории",
    desc: "Пространства для исследований и практики, где студенты работают над кейсами и реальными проектами.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 4,
    title: "Проектная работа",
    desc: "Участие в совместных проектах с компаниями и запуск собственных инициатив, меняющих индустрию.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
  {
    id: 5,
    title: "Воркшопы и мастер-классы",
    desc: "Интенсивные занятия с экспертами индустрии и международными специалистами.",
    icon: <Icon className="size-9 stroke-theprimary" />,
  },
];

function Carousel() {
  const [activeTab, setActiveTab] = useState<"department" | "activity">(
    "department"
  );

  const data = activeTab === "department" ? departments : activities;

  return (
    <div className="carousel-wrapper flex flex-col gap-6 md:gap-8">
      <div
        className={cn(
          "carousel-header w-full flex flex-col gap-6 2xl:gap-0",
          "2xl:flex-row 2xl:items-center justify-between"
        )}>
        <div className="tab-btns flex flex-col sm:flex-row sm:items-center gap-2">
          <Button
            onClick={() => setActiveTab("department")}
            size="sm"
            className={cn(
              "rounded-full w-full sm:w-fit",
              activeTab !== "department" &&
                "bg-thesecondary/50 border-thesecondary/0"
            )}>
            Департаменты
          </Button>

          <Button
            onClick={() => setActiveTab("activity")}
            size="sm"
            className={cn(
              "rounded-full w-full sm:w-fit",
              activeTab !== "activity" &&
                "bg-thesecondary/50 border-thesecondary/0"
            )}>
            Форматы и активность
          </Button>
        </div>

        <div className="nav-arrows flex items-center justify-end 2xl:justify-start gap-2">
          <CircleChevronLeft
            size={32}
            className="prev-btn size-8 stroke-thesecondary cursor-pointer"
          />

          <CircleChevronRight
            size={32}
            className="next-btn size-8 stroke-thesecondary cursor-pointer"
          />
        </div>
      </div>

      <div className="carousel w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          spaceBetween={32}
          slidesPerView="auto"
          slidesPerGroup={1}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {data.map((item) => (
            <SwiperSlide key={item.id} className="2xl:!w-[24.5rem] !h-auto">
              <div className="carousel-item border rounded-2xl p-6 flex flex-col gap-9 h-full">
                <div className="item-icon rounded-2xl size-20 flex items-center justify-center bg-theprimary/10">
                  {item.icon}
                </div>

                <div className="item-info flex flex-col gap-6 mt-auto">
                  <Headline className="normal-case">{item.title}</Headline>

                  <div className="item-description text-gray-400 text-sm">
                    {item.desc}
                  </div>

                  <Button variant="outlined">Подробнее</Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
