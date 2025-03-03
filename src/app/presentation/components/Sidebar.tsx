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
import Flag from "react-world-flags";

const menuItems = [
  { icon: <FaThLarge size={24} className="text-sky-600" />, text: "Overview" },
  { icon: <FaUser size={24} className="text-sky-600" />, text: "Customer Management" },
  { icon: <FaExchangeAlt size={24} className="text-sky-600" />, text: "Transactions" },
  { icon: <FaSyncAlt size={24} className="text-sky-600" />, text: "Customer Management" },
  { icon: <FaUniversity size={24} className="text-sky-600" />, text: "Accounting" },
  { icon: <FaFileAlt size={24} className="text-sky-600" />, text: "Reports" },
];

const Sidebar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  const [selected, setSelected] = useState('Overview')

  return (
    <aside className={`bg-gray-900 text-white min-h-screen w-16 px-3 ${collapsedMenu ? 'min-w-16 py-5' : 'min-w-16 py-5 xl:min-w-64 xl:w-64'}`}>
      <div className="flex flex-row items-center">
        <h2 className={`text-l pl-2 font-bold ${collapsedMenu ? 'hidden' : 'hidden xl:block'}`}>MacroBank</h2>
        <FlexSpace className={`${collapsedMenu ? 'hidden' : 'hidden xl:block'}`} />
        <div className={`hidden xl:block cursor-pointer`}>
          {
            collapsedMenu ? (<AiOutlineMenuUnfold
              className={`w-6 h-6 ${collapsedMenu ? 'ml-2' : ''}`}
              onClick={() => setCollapsedMenu((prev) => !prev)}
            />) : (<AiOutlineMenuFold
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
              isSelected = {item.text == selected}
            />
          ))}
        </ul>
        <ul className="fixed bottom-2 w-60 hidden xl:block pr-2">
          <div className="flex flex-row pl-2 pr-2 items-center">
            <h4 className="flex-grow text-xs font-bold text-gray-400">Currency ECB rates</h4>
            <h4 className="text-xs font-bold text-sky-600">01.05.2022</h4>
          </div>
          <div className="flex flex-row pl-2 pr-2 mt-4 items-center">
            <Flag code='US' className=" rounded-full w-6 h-6 object-cover" />
            <h4 className="text-xs font-bold text-gray-400 ml-2">USD</h4>
            <FlexSpace />
            <h4 className="text-sm font-bold text-gray-400">1,0557</h4>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;