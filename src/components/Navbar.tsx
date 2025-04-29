
import React from "react";
import { FaSearch } from "react-icons/fa";
import Language from './Icons/Language';
import Bell from "./Icons/Bell";
import Computer from "./Icons/Computer";
import Grid from "./Icons/Grid";
import Profile from "../assets/icons/Avatar12.png";

interface NavbarProps {
  isMenuCollapsed: boolean;
  onMenuToggle: (collapsed: boolean) => void;
  isMobileOrTablet: boolean;
  toggleDarkMode:()=>void;
  darkMode:boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuCollapsed,
  onMenuToggle,
  isMobileOrTablet,
  toggleDarkMode,
  darkMode
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className="w-full px-6 flex items-center justify-between min-w-[100px]">
      <div className="flex items-center">
        {isMobileOrTablet && (
          <button
            onClick={() => onMenuToggle(!isMenuCollapsed)}
            className="mr-4 p-2 rounded-lg hover:bg-gray-100"
          >
            <div className="flex flex-col gap-1.5">
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        )}
        <div className="flex items-center rounded-md px-2 h-[56px] dark:bg-[#2F3349] dark:border-none">
          <FaSearch className="text-gray-500 mr-2 " />
          <input
            type="text"
            placeholder="Search [CTRL + K]"
            className="outline-none hidden md:block dark:bg-[#2F3349] dark:text-[#E1DEF5E5]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Language className="w-6 h-6 cursor-pointer dark:text-[#E1DEF5E5]" />
        <div className="relative">
  <Computer
    className="w-6 h-6 cursor-pointer dark:text-[#E1DEF5E5]"
    onClick={(e) => {
      e.stopPropagation();
      setIsDropdownOpen(!isDropdownOpen);
    }}
  />
  {isDropdownOpen && (
    <div
      className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => {
          toggleDarkMode();
          setIsDropdownOpen(false);
        }}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-400 text-sm text-gray-800 dark:text-gray-700"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )}
</div>
        <Grid className="w-6 h-6 cursor-pointer dark:text-[#E1DEF5E5]" />
        <Bell className="w-6 h-6 cursor-pointer dark:text-[#E1DEF5E5] " />
        <img
          src={Profile}
          alt="Profile"
          className="w-9 h-9 rounded-full bg-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
