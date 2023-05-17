import { useState } from "react";
import { FaHome, FaCompass, FaSun, FaMoon } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { RiVideoUploadFill } from "react-icons/ri";

const SidebarList = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setToggleDarkMode(!toggleDarkMode);
  }

  const LIST_ITEMS = [
    {
      id: 1,
      text: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      text: "Subscriptions",
      icon: <GoBookmark />,
    },
    {
      id: 3,
      text: "Explore",
      icon: <FaCompass />,
    },
    {
      id: 4,
      text: "Upload Video",
      icon: <RiVideoUploadFill />,
    },
  ];

  return (
    <div className="flex justify-center w-full flex-col gap-2.5">
      {LIST_ITEMS.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 cursor-pointer hover:bg-gray-200 px-4 py-2.5 rounded-lg"
        >
          <span className="text-xl font-medium">{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarList;
