"use client";

import Container from "@/shared/ui/Container";
import { Headline } from "../../shared/ui/Headline";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import InfoItem from "@/shared/ui/InfoItem";
import "swiper/css";
import "swiper/css/navigation";

const items = [
  {
    id: 1,
    title: "Центр количественных финансов",
    desc: "Исследования в области моделирования и прогнозирования финансовых рынков.",
  },
  {
    id: 2,
    title: "FinTech Center",
    desc: "Разработка и внедрение цифровых решений в банковском и инвестиционном секторах.",
  },
];

function CenterDepartment() {
  return (
    <section className="center-department">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Центры департамента
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

export default CenterDepartment;
