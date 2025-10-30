"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import InfoItem from "@/shared/ui/InfoItem";
import { KnowledgeLabItem } from "@/entities/knowledgepage/getKnowledgePage.t";

function KnowledgeLabsSwiper({ labs }: { labs: KnowledgeLabItem[] }) {
  return (
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
          {labs?.map((item, index) => (
            <SwiperSlide key={item.id} className="2xl:!w-[24.5rem] !h-auto">
              <InfoItem
                title={item.title}
                desc={item.desc}
                slug={item.slug}
                departmentSlug="laboratories"
                orderName={index + 1}
                hasButton
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default KnowledgeLabsSwiper;
