import { MainNewsComponent } from "@/entities/homepage/getHomepage.t";
import { Headline } from "@/shared/ui/Headline";
import { useStrapiMedia } from "@/shared/utils/useStrapiMedia";
import Image from "next/image";

function NewsWrapper({ mainNews }: { mainNews: MainNewsComponent[] }) {
  const getUrl = useStrapiMedia;

  return (
    <div className="news-info-wrapper w-full grid grid-cols-1 2xl:grid-cols-2 gap-6 2xl:gap-8">
      {mainNews?.map((newsItem) => {
        const src = getUrl(newsItem.newsImage?.url);

        return (
          <div
            key={newsItem.id}
            className="news-info-image grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="news-info border rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8">
              <div className="date">{newsItem.createdTime}</div>

              <Headline>{newsItem.newsTitle}</Headline>

              <div className="news-description text-gray-400">
                {newsItem.newsDesc}
              </div>
            </div>

            <div className="news-image size-full rounded-2xl">
              <Image
                src={src}
                alt="news-image"
                width={328}
                height={392}
                className="size-full rounded-2xl object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsWrapper;
