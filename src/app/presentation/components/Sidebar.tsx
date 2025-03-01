"use client";

import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
  FaExchangeAlt,
  FaFileAlt,
  FaSyncAlt,
  FaThLarge,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import FlexSpace from "./FlexSpace";
import NavigationMenuItem from "./NavigationMenuItem";

const menuItems = [
  { icon: <FaThLarge size={24} />, text: "Overview" },
  { icon: <FaUser size={24} />, text: "Customer Management" },
  { icon: <FaExchangeAlt size={24} />, text: "Transactions" },
  { icon: <FaSyncAlt size={24} />, text: "Customer Management" },
  { icon: <FaUniversity size={24} />, text: "Accounting" },
  { icon: <FaFileAlt size={24} />, text: "Reports" },
];

const Sidebar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);

  return (
    <aside className={`bg-gray-900 text-white min-h-screen w-16 px-3 ${collapsedMenu ? 'min-w-16 py-5' : 'min-w-16 py-5 xl:min-w-64 xl:w-64'}`}>
      <div className="flex flex-row items-center">
        <h2 className={`text-xl pl-2 font-bold ${collapsedMenu ? 'hidden' : 'hidden xl:block'}`}>Dashboard</h2>
        <FlexSpace className={`${collapsedMenu ? 'hidden' : 'hidden xl:block'}`} />
        <div className={`hidden xl:block cursor-pointer`}>
          {
            collapsedMenu ? (<AiOutlineMenuUnfold
              className={`w-6 h-6 ${collapsedMenu ? 'ml-2' : ''}`}
              onClick={() => setCollapsedMenu((prev) => !prev)}
            />) : (<AiOutlineMenuUnfold
              className={`w-6 h-6 ${collapsedMenu ? 'ml-2' : ''}`}
              onClick={() => setCollapsedMenu((prev) => !prev)}
            />)
          }
        </div>
      </div>
      <img src="/globe.svg" className="w-10 h-10 xl:hidden" alt="Globe" />
      <nav className="mt-5">
        <ul>
          {menuItems.map((item, index) => (
            <NavigationMenuItem
              key={index}
              component={item.icon}
              text={item.text}
              showText={!collapsedMenu}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;