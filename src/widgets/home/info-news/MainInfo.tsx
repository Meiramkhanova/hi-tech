import { cn } from "@/lib/utils";
import AiInstitute from "@/shared/icons/AiInstitute";
import NarxozLogo from "@/shared/icons/NarxozLogo";
import Button from "@/shared/ui/Button";
import { Headline } from "@/shared/ui/Headline";

function MainInfo() {
  return (
    <div
      className={cn(
        "main-info h-fit md:h-[35rem] border rounded-2xl",
        "bg-theprimary text-white p-6 md:p-8",
        "flex flex-col justify-between gap-6 md:gap-8"
      )}>
      <div className="top-info flex items-center gap-6 md:gap-8">
        <AiInstitute />

        <NarxozLogo className="h-12 w-36 2xl:w-52 2xl:h-16" />
      </div>

      <div className="middle-info-text">
        <Headline className="text-white">
          Образование, технологии и проекты будущего
        </Headline>
      </div>

      <div className="bottom-info-btns flex flex-col 2xl:flex-row 2xl:items-center gap-2">
        <Button className="w-full 2xl:w-fit">Поступить</Button>

        <Button
          className="w-full 2xl:w-fit text-nowrap 2xl:text-wrap"
          variant="secondary">
          Программы и направления
        </Button>
      </div>
    </div>
  );
}

export default MainInfo;
