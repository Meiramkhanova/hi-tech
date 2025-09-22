import { cn } from "@/lib/utils";
import Button from "@/shared/ui/Button";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import InfoItem from "@/shared/ui/InfoItem";
import { StrapiTab } from "@/entities/homepage/getHomepage.t";

function Carousel({ tabsData }: { tabsData: StrapiTab[] }) {
  const [activeTab, setActiveTab] = useState<string>(
    tabsData?.[0]?.title || ""
  );

  const activeTabData = tabsData.find((tab) => tab.title === activeTab);

  return (
    <div className="carousel-wrapper flex flex-col gap-6 md:gap-8">
      <div
        className={cn(
          "carousel-header w-full flex flex-col gap-6 2xl:gap-0",
          "2xl:flex-row 2xl:items-center justify-between"
        )}>
        <div className="tab-btns flex flex-col sm:flex-row sm:items-center gap-2">
          {tabsData.map((tabData) => (
            <Button
              key={tabData.id}
              onClick={() => setActiveTab(tabData.title)}
              size="sm"
              className={cn(
                "rounded-full w-full sm:w-fit",
                activeTab !== tabData.title &&
                  "bg-thesecondary/50 border-thesecondary/0"
              )}>
              {tabData.title}
            </Button>
          ))}
        </div>

        <div className="nav-arrows flex items-center justify-end 2xl:justify-start gap-2">
          <CircleChevronLeft
            size={32}
            className="prev-btn size-8 stroke-thesecondary cursor-pointer"
          />

          <CircleChevronRight
            size={32}
            className="next-btn size-8 stroke-thesecondary cursor-pointer"
          />
        </div>
      </div>

      <div className="carousel w-full">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={32}
          slidesPerView="auto"
          slidesPerGroup={1}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {activeTabData?.tab_contents?.map((item) => (
            <SwiperSlide key={item.id} className="2xl:!w-[24.5rem] !h-auto">
              <InfoItem
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                slug={item.slug}
                hasButton
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
