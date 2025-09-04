import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";

const news = [
  {
    id: 1,
    date: "5 сентября 2025",
    title: "Стартап -инкубатор HTI",
    desc: "Hi-Tech Institute — это современный центр образования и инноваций в Казахстане и Центральной Азии. Мы объединяем обучение, практику и исследования, помогая студентам развивать ключевые компетенции и реализовывать проекты в сфере технологий и бизнеса",
    image: "/assets/news1.png",
  },
  {
    id: 2,
    date: "28 октября 2025",
    title: "48 часов кода, идей и решений",
    desc: "В Hi-Tech Institute состоялся ежегодный хакатон, собравший более 200 студентов и молодых специалистов. Участники в течение 48 часов работали над задачами в области финтеха, кибербезопасности и биотеха. ",
    image: "/assets/news2.png",
  },
];

function NewsWrapper() {
  return (
    <div className="news-info-wrapper w-full grid grid-cols-1 2xl:grid-cols-2 gap-6 2xl:gap-8">
      {news.map((newsItem) => (
        <div
          key={newsItem.id}
          className="news-info-image grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="news-info border rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8">
            <div className="date">{newsItem.date}</div>

            <Headline>{newsItem.title}</Headline>

            <div className="news-description text-gray-400">
              {newsItem.desc}
            </div>
          </div>

          <div className="news-image size-full rounded-2xl">
            <Image
              src={newsItem.image}
              alt="news-image"
              width={328}
              height={392}
              className="size-full rounded-2xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsWrapper;
