import { Menu } from "lucide-react";

function TheMenu() {
  return (
    <div className=" w-[56px] h-14 flex items-center justify-center bg-thesecondary rounded-2xl shrink-0 cursor-pointer">
      <Menu className="w-6 h-6 stroke-white" />
    </div>
  );
}

export default TheMenu;
