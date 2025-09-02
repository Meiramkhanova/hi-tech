import { cn } from "@/shared/utils/cn";
import { Search } from "lucide-react";

function Searching() {
  return (
    <div className="input-wrapper w-[21rem] relative">
      <Search className="absolute left-6 w-4 h-4 top-1/2 -translate-y-1/2 stroke-gray-400" />

      <input
        type="text"
        placeholder="Поиск"
        className={cn(
          "search rounded-2xl py-1.5 bg-gray-100 px-11 w-full",
          "outline-none focus:outline-none focus:ring-0 text-gray-500"
        )}
      />
    </div>
  );
}

export default Searching;
