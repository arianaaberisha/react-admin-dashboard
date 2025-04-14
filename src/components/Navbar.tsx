import React from "react"; import { FaSearch } from "react-icons/fa"; 
import Language from "../assets/icons/Language.svg";
import Bell from "../assets/icons/Bell.svg"; 
import Computer from "../assets/icons/Computer.svg";
import Grid from "../assets/icons/Grid.svg"; 
import Profile from "../assets/icons/Avatar12.png";

interface NavbarProps {
  isMenuCollapsed: boolean;
  onMenuToggle: (collapsed: boolean) => void;
  isMobileOrTablet: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuCollapsed, onMenuToggle, isMobileOrTablet }) => {
  return (
    <div className="w-full px-6 flex items-center justify-between">
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

        {/* Search Box */}
        <div className="flex items-center rounded-md border border-gray-100 px-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input type="text" placeholder="Search [CTRL + K]" className="h-[56px] outline-none" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Icons */}
        <img src={Language} alt="Language" className="w-6 h-6 cursor-pointer" />
        <img src={Computer }alt="Computer" className="w-6 h-6 cursor-pointer" />
        <img src={Grid} alt="Grid" className="w-6 h-6 cursor-pointer" />
        <img src={Bell} alt="Bell" className="w-6 h-6 cursor-pointer" />
        <img src={Profile} alt="Profile" className="w-9 h-9 rounded-full bg-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
