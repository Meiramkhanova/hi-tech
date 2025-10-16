"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AboutHistoryItem } from "@/entities/aboutpage/getAboutpage.t";

function AboutSwiper({ aboutItems }: { aboutItems: Array<AboutHistoryItem> }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1280: { slidesPerView: 2 },
          1536: { slidesPerView: "auto" },
        }}>
        {aboutItems.map((aboutItem) => {
          return (
            <SwiperSlide key={aboutItem.id} className="2xl:!w-fit">
              <div
                onClick={() =>
                  setOpenIndex(openIndex === aboutItem.id ? null : aboutItem.id)
                }
                className={cn(
                  "history-info text-6xl md:text-9xl xl:text-8xl 2xl:text-9xl whitespace-nowrap",
                  aboutItem.id === activeIndex ? "text-black" : "text-gray-400"
                )}>
                {aboutItem.year}
              </div>

              <div
                className={cn(
                  "transition-all first-letter:uppercase max-w-64 break-words duration-700 ease-in-out overflow-hidden text-lg text-gray-400",
                  openIndex === aboutItem.id
                    ? "max-h-96 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                )}>
                {aboutItem.yearDesc}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default AboutSwiper;
