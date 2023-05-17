import { FaSearch } from "react-icons/fa";

import image from "../assets/profile.webp";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="w-full">
          <input
            className="flex h-10 w-1/2 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
        </div>
        <div className="ml-2 mt-2 hidden lg:block">
          <span className="relative inline-block">
            <img
              className="h-10 w-10 rounded-full"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
          </span>
        </div>
        {/* <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
