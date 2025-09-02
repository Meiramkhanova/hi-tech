"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import Image from "next/image";

function MainNews() {
  return (
    <div className="main-news h-[21rem] md:h-[34rem] rounded-2xl relative w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={50}
        slidesPerView={1}
        className="h-full rounded-2xl">
        <SwiperSlide>
          <Image
            src="/assets/slide1.png"
            alt="slide1"
            className="size-full object-cover"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide1.png"
            alt="slide1"
            className="size-full object-cover"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/slide1.png"
            alt="slide1"
            className="size-full object-cover"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>

      <div
        className={cn(
          "custom-pagination absolute flex gap-2 z-20 bg-white/60 backdrop-blur-xs",
          "bottom-8 right-4 px-2 py-4 rounded-2xl !w-fit justify-end"
        )}
      />

      <div className="overlay absolute bg-black/20 inset-0 z-10 pointer-events-none rounded-2xl" />
    </div>
  );
}

export default MainNews;
