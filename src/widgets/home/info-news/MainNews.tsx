"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Headline } from "@/shared/ui/Headline";
import { useHomePage } from "@/entities/homepage/HomePageClientProvider";
import { getStrapiMedia } from "@/shared/utils/getStrapiMedia";

function MainNews() {
  const data = useHomePage();

  if (!data || !data.swiper) return null;

  const slides = data.swiper;

  return (
    <div className="main-news h-[21rem] md:h-[35rem] rounded-2xl relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          dynamicMainBullets: 5,
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        speed={1200}
        className="size-full rounded-2xl relative z-20">
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className="overflow-hidden rounded-2xl">
              <div className="slide-image relative overflow-hidden h-full">
                <Image
                  src={getStrapiMedia(
                    slide.image?.formats?.large?.url || slide.image?.url
                  )}
                  alt="slide1"
                  className="size-full object-cover"
                  width={672}
                  height={672}
                />

                <div
                  className={cn(
                    "overlay absolute bg-gradient-to-b from-black/40 via-transparent to-black/50",
                    "inset-0 z-10 pointer-events-none rounded-2xl"
                  )}
                />
              </div>

              <div className="news-title absolute left-6 top-6 md:left-8 md:top-8 z-20">
                <Headline className="font-light text-white uppercase">
                  {slide.name}
                </Headline>
              </div>

              <div
                className={cn(
                  "news-info-text absolute left-6 bottom-6 text-white z-20",
                  "max-w-[60%]"
                )}>
                {slide.desc}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div
        className={cn(
          "custom-pagination !absolute !h-fit !w-fit flex gap-1 2xl:gap-2 z-20 bg-white/60 2xl:backdrop-blur-xs",
          "!top-8 2xl:!top-auto 2xl:!bottom-8 !left-[calc(100%-140px)] 2xl:!left-[calc(100%-160px)]",
          "px-2 py-2.5 2xl:py-4 rounded-2xl"
        )}
      />
    </div>
  );
}

export default MainNews;
