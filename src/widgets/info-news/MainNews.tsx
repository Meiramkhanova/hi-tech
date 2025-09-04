"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Headline } from "@/shared/ui/Headline";

const slides = [
  {
    id: 1,
    title: "новости",
    subtitle:
      "В октябре стартует студенческий хакатон HTI: программирование, аналитика и решения для реального бизнеса",
    image: "/assets/slide1.png",
  },
  {
    id: 2,
    title: "новости",
    subtitle:
      "В октябре стартует студенческий хакатон HTI: программирование, аналитика и решения для реального бизнеса",
    image: "/assets/slide1.png",
  },
  {
    id: 3,
    title: "новости",
    subtitle:
      "В октябре стартует студенческий хакатон HTI: программирование, аналитика и решения для реального бизнеса",
    image: "/assets/slide1.png",
  },
  {
    id: 4,
    title: "новости",
    subtitle:
      "В октябре стартует студенческий хакатон HTI: программирование, аналитика и решения для реального бизнеса",
    image: "/assets/slide1.png",
  },
  {
    id: 5,
    title: "новости",
    subtitle:
      "В октябре стартует студенческий хакатон HTI: программирование, аналитика и решения для реального бизнеса",
    image: "/assets/slide1.png",
  },
];

function MainNews() {
  return (
    <div className="main-news h-[21rem] md:h-[34rem] rounded-2xl relative overflow-hidden">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="overflow-hidden rounded-2xl">
            <div className="slide-image relative overflow-hidden">
              <Image
                src={slide.image}
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
              <Headline className="font-light text-white">
                {slide.title}
              </Headline>
            </div>

            <div
              className={cn(
                "news-info-text absolute left-6 bottom-6 text-white z-20",
                "max-w-[60%]"
              )}>
              {slide.subtitle}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={cn(
          "custom-pagination !absolute !w-fit flex gap-2 z-20 bg-white/60 backdrop-blur-xs",
          "!bottom-8 !left-[calc(100%-160px)] px-2 py-4 rounded-2xl"
        )}
      />
    </div>
  );
}

export default MainNews;
