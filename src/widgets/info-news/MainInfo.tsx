import { cn } from "@/lib/utils";
import Button from "@/shared/ui/Button";
import { Headline } from "@/shared/ui/Headline";
import Image from "next/image";

function MainInfo() {
  return (
    <div
      className={cn(
        "main-info h-[21rem] md:h-[34rem] border rounded-2xl",
        "bg-theprimary text-white p-6 md:p-8",
        "flex flex-col justify-between"
      )}>
      <div className="top-info flex gap-16">
        <Image
          src="/assets/narxozLogo.png"
          alt="narxoz-logo"
          width={214}
          height={62}
          className="h-16 object-cover"
        />

        <div className="logo-hi-tech flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={57}
            height={57}
            className="size-14"
          />

          <div className="hi-tech-text uppercase text-3xl">
            Hi tech <br /> institute
          </div>
        </div>
      </div>

      <div className="middle-info-text">
        <Headline className="text-white">
          Образование, технологии и проекты будущего
        </Headline>
      </div>

      <div className="bottom-info-btns flex items-center gap-2">
        <Button>Поступить</Button>

        <Button variant="secondary">Программы и направления</Button>
      </div>
    </div>
  );
}

export default MainInfo;
