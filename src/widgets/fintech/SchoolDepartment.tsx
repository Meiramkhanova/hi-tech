"use client";

import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    id: 1,
    title: "Школа риск-менеджмента",
    desc: "Подготовка специалистов по оценке и управлению финансовыми рисками.",
  },
  {
    id: 2,
    title: "Банковская школа",
    desc: "Программы для будущих специалистов банковского сектора",
  },
  {
    id: 3,
    title: "Школа бизнес-аналитики",
    desc: "Обучение работе с данными и аналитическим инструментарием для финансовых решений.",
  },
  {
    id: 4,
    title: "Школа CFA",
    desc: "Подготовка к международной сертификации Chartered Financial Analyst.",
  },
  {
    id: 5,
    title: "Школа FRM",
    desc: "Подготовка к международной сертификации Financial Risk Manager.",
  },
];

function SchoolDepartment() {
  return (
    <section className="school-department">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 py-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Школы департамента
          </Headline>

          <div className="carousel-wrapper flex flex-col gap-6 md:gap-8">
            <div className="nav-arrow-wrapper flex w-full justify-end">
              <div className="nav-arrows flex items-center justify-end 2xl:justify-start gap-2">
                <CircleChevronLeft
                  size={32}
                  className="ai-prev-btn size-8 stroke-thesecondary cursor-pointer"
                />

                <CircleChevronRight
                  size={32}
                  className="ai-next-btn size-8 stroke-thesecondary cursor-pointer"
                />
              </div>
            </div>

            <div className="ai-carousel w-full">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".ai-prev-btn",
                  nextEl: ".ai-next-btn",
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
                {items.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="2xl:!w-[24.5rem] !h-auto">
                    <InfoItem
                      order={item.id}
                      title={item.title}
                      desc={item.desc}
                      hasButton
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SchoolDepartment;
