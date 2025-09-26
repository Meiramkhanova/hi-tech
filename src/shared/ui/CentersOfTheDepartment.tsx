"use client";

import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Container from "./Container";
import { Headline } from "./Headline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import InfoItem from "./InfoItem";
import { CentersOfDepartment } from "@/entities/tabContent/TabContent.t";

function CentersOfTheDepartment({
  center_departments,
  departmentSlug,
}: CentersOfDepartment & { departmentSlug: string }) {
  if (!center_departments || center_departments.length === 0) {
    return null;
  }

  return (
    <section className="centers-of-deparment">
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
                {center_departments?.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="2xl:!w-[24.5rem] !h-auto">
                    <InfoItem
                      // or={item.id}
                      title={item.title}
                      desc={item.desc}
                      slug={item.slug}
                      departmentSlug={departmentSlug}
                      orderName={item.order}
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

export default CentersOfTheDepartment;
