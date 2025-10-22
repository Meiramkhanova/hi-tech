"use client";

import { SchoolsOfDepartment } from "@/entities/tabContent/TabContent.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import InfoItem from "@/shared/ui/InfoItem";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function MoreSchoolItems({ schools }: Pick<SchoolsOfDepartment, "schools">) {
  const t = useTranslations("slugPage");

  return (
    <section className="schools-of-deparment">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {t("schoolsOfDepartments")}
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
                {schools?.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    className="2xl:!w-[24.5rem] !h-auto">
                    <InfoItem
                      title={item.schoolName}
                      desc={item.desc}
                      slug={item.slug}
                      // departmentSlug={departmentSlug}
                      orderName={index + 1}
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

export default MoreSchoolItems;
