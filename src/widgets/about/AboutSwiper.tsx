"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const historyInfos = [
  {
    id: 1,
    year: "2007",
    event:
      "старт научного семинара «Финансовая эконометрика» на ЭФ МГУ. Начало образовательных инициатив.",
  },
  {
    id: 2,
    year: "2012",
    event:
      "основание Центра количественных финансов (ЦМФ), первый набор на программу «Количественная аналитика».",
  },
  {
    id: 3,
    year: "2013–2016",
    event:
      "первая магистратура ЦМФ: модуль «Математические финансы» в МГУ, подготовлено более 30 магистров.",
  },
  {
    id: 4,
    year: "2016",
    event:
      "создание Института количественных финансов в НИУ ВШЭ; запуск новых программ",
  },
  {
    id: 5,
    year: "2018",
    event:
      "перезапуск в формате ЦМФ 2.0: акцент на проектное обучение и современные технологии.",
  },
  {
    id: 6,
    year: "2019",
    event: "переход программ в онлайн, запуск Школы управления рисками.",
  },
  {
    id: 7,
    year: "2021",
    event:
      "межвузовский онлайн-семинар «Финансовая экономика и количественные финансы», основание HSE Venture Capital Club.",
  },
  {
    id: 8,
    year: "2022",
    event:
      "открытие карьерного центра ЦМФ, запуск CMF Graduate Program, первый набор на программу «Web3: DeFi & NFT-разработка».",
  },
  {
    id: 9,
    year: "2023",
    event: "выход ЦМФ на международный уровень: программы на английском языке.",
  },
  {
    id: 10,
    year: "2024",
    event: "запуск стартапа Projecteliga.",
  },
  {
    id: 11,
    year: "2025",
    event:
      "открытие Центра AI и представительства YaizY.io в Центральной Азии.",
  },
];

function AboutSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="about-swiper flex flex-col gap-2">
      <div className="nav-wrapper w-full flex justify-end">
        <div className="nav-arrow flex items-center justify-end 2xl:justify-start gap-2">
          <CircleChevronLeft
            size={32}
            className="the-prev-btn size-8 stroke-thesecondary cursor-pointer"
          />

          <CircleChevronRight
            size={32}
            className="the-next-btn size-8 stroke-thesecondary cursor-pointer"
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: ".the-prev-btn", nextEl: ".the-next-btn" }}
        spaceBetween={96}
        slidesPerGroup={1}
        className="w-full flex"
        speed={800}
        slidesPerView="auto"
        centeredSlides={false}
        slidesPerGroupAuto={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1536: { slidesPerView: "auto" },
        }}>
        {historyInfos.map((historyInfo, index) => {
          return (
            <SwiperSlide key={historyInfo.id} className="!w-fit">
              <div
                className={cn(
                  "history-info text-9xl whitespace-nowrap",
                  index === activeIndex ? "text-black" : "text-gray-400"
                )}>
                {historyInfo.year}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default AboutSwiper;
