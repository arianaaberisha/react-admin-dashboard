import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import PageSearch from "./PageSearch";
import Profile from "../assets/icons/Avatar12.png";

interface NavbarProps {
  onMenuToggle: () => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const iconButton =
  "p-2 rounded-lg bg-transparent border-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7367F0] text-gray-600 hover:bg-gray-100 dark:text-[#E1DEF5E5] dark:bg-transparent dark:hover:bg-white/10";

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle, toggleDarkMode, darkMode }) => {
  return (
    <div className="w-full px-4 sm:px-6 flex items-center justify-between min-w-[100px]">
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
          className={iconButton}
        >
          <div className="flex flex-col gap-1.5">
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </div>
        </button>
        <PageSearch />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className={iconButton}
        >
          {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
        <img src={Profile} alt="Profile" className="w-9 h-9 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};

export default Navbar;
