import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

function LanguageSelector({
  className,
  selectClassName,
  iconClassName,
}: {
  className?: string;
  selectClassName?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("lg-switcher", className)}>
      <Select>
        <SelectTrigger
          className={cn(
            "w-[4.5rem] !h-14 rounded-2xl items-center font-light",
            selectClassName,
            iconClassName
          )}>
          <SelectValue placeholder="Рус" />
        </SelectTrigger>
        <SelectContent align="end" className="font-light">
          <SelectItem value="light">Кз</SelectItem>
          <SelectItem value="dark">Рус</SelectItem>
          <SelectItem value="system">Англ</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
