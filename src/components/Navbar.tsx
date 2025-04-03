import React from "react";
import { FaSearch } from "react-icons/fa";

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
    </div>
  );
};

export default Navbar;

