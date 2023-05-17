import { FaSearch } from "react-icons/fa";

import image from "../assets/profile.webp";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="sticky z-10 top-7 rounded-sm">
      {/* container  */}
      <div className="px-4 py-6 flex items-center justify-between">
        <div className="w-1/2 flex border-[2px] border-gray-300 rounded-md items-center gap-2 px-2">
          <input
            type="text"
            className="py-2 px-3 outline-none w-full bg-transparent"
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
