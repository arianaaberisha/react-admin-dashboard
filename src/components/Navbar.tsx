import React from "react";
import { FaSearch } from "react-icons/fa";
import Language from "../assets/icons/Language.svg"
import Bell from "../assets/icons/Bell.svg"
import Computer from "../assets/icons/Computer.svg"
import Grid from "../assets/icons/Grid.svg"

const Navbar: React.FC = () => {
  return (
    
    <div className="flex items-center text-black p-4 space-x-2 ">
      <div className="flex items-center  rounded-md p-2 ">
        <FaSearch className="text-gray-500 mr-6" /> 
        <input
          type="text"
          placeholder="Search [CTRL + K]"
          className="flex-grow h-[56px] outline-none"
        />
      </div>
      <div className="flex items-center pl-[1000px] gap-3">
        <img src={Language} className="w-6 h-6 cursor-pointer" />
        <img src={Computer} className="w-6 h-6 cursor-pointer" />
        <img src={Grid} className="w-6 h-6 cursor-pointer" />
        <img src={Bell} className="w-6 h-6 cursor-pointer" />
        <div className="w-9 h-9 rounded-full bg-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

