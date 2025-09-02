import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LanguageSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[4.5rem] !h-14 rounded-2xl items-center font-light">
        <SelectValue placeholder="Рус" />
      </SelectTrigger>
      <SelectContent className="font-light">
        <SelectItem value="light">Кз</SelectItem>
        <SelectItem value="dark">Рус</SelectItem>
        <SelectItem value="system">Англ</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
