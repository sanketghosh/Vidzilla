import { FaPlayCircle } from "react-icons/fa";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <aside className="flex-[1.5] h-[93vh] sticky z-[1000] top-7">
      {/* container */}
      <div className="px-4 py-6 flex items-center flex-col justify-center">
        {/* logo  */}
        <div className="flex items-center gap-2 text-indigo-600 font-yeseva_one cursor-pointer w-full justify-center">
          <FaPlayCircle className="text-3xl" />
          <h1 className="text-3xl">Vidzilla</h1>
        </div>
        {/* list of menu */}
        <div className="mt-5 w-full justify-center flex items-center">
          <SidebarList />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
