"use client";

import Analytic from "@/shared/icons/Analytic";
import Chat from "@/shared/icons/Chat";
import PersonalLearn from "@/shared/icons/PersonalLearn";
import Progress from "@/shared/icons/Progress";
import SearchMark from "@/shared/icons/SearchMark";
import Speech from "@/shared/icons/Speech";
import Task from "@/shared/icons/Task";
import InfoItem from "@/shared/ui/InfoItem";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const aiItems = [
  {
    id: 1,
    title: "Прогнозная аналитика",
    desc: "Системы на основе больших данных заранее определяют возможные трудности и риски. Это позволяет преподавателям поддерживать студентов на ранних этапах и повышать общую успешность обучения.",
    icon: <Analytic className="size-9 stroke-theprimary" />,
  },
  {
    id: 2,
    title: "Адаптивная проверка знаний",
    desc: "Алгоритмы ИИ оценивают текущий уровень подготовки студента и подстраивают программу под его результат. Такой подход помогает выявлять пробелы и выстраивать индивидуальную траекторию обучения.",
    icon: <Progress className="size-9 stroke-theprimary" />,
  },
  {
    id: 3,
    title: "Автоматическая проверка заданий",
    desc: "ИИ оценивает тесты, эссе и другие работы, сокращая время обратной связи.Такой инструмент снимает нагрузку с преподавателей и позволяет студентам быстрее понимать, где именно нужно улучшить результат.",
    icon: <Task className="size-9 stroke-theprimary" />,
  },
  {
    id: 4,
    title: "AI-оценка и анти-плагиат",
    desc: "Алгоритмы объективно проверяют тексты, код и проекты, выявляя ошибки и недочёты. Технология помогает сохранить честность процесса и снижает долю субъективности в выставлении оценок.",
    icon: <SearchMark className="size-9 stroke-theprimary" />,
  },
  {
    id: 5,
    title: "Персонализированное обучение",
    desc: "Платформы с применением NLP и машинного обучения выстраивают индивидуальные учебные маршруты. Студент получает именно тот материал и задания, которые соответствуют его уровню и целям.",
    icon: <PersonalLearn className="size-9 stroke-theprimary" />,
  },
  {
    id: 6,
    title: "Распознавание речи",
    desc: "ИИ используется для обучения языкам, презентациям и публичным выступлениям. Система анализирует произношение, даёт обратную связь и помогает студентам быстрее развивать навыки коммуникации.",
    icon: <Speech className="size-9 stroke-theprimary" />,
  },
  {
    id: 7,
    title: "Виртуальные помощники и чат-боты",
    desc: "ИИ-чат-боты работают как персональные наставники: отвечают на вопросы, дают подсказки и помогают усваивать сложные темы. ",
    icon: <Chat className="size-9 stroke-theprimary" />,
  },
];

function AICarousel() {
  return (
    <div className="carousel-ai-wrapper flex flex-col gap-6 md:gap-8">
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
          {aiItems.map((item) => (
            <SwiperSlide key={item.id} className="2xl:!w-[24.5rem] !h-auto">
              <InfoItem
                title={item.title}
                desc={item.desc}
                tempIcon={item.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AICarousel;
