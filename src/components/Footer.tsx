import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full px-6 flex items-center justify-between">
    <div className=" bg-transparent text-gray-400 p-4 text-start ">
      <p className="text-sm">© 2025 , made with ❤️ by Pixinvent</p>
    </div>
    <div className="flex gap-4 text-[#7367F0] text-sm">
    <p className=" cursor-pointer">License</p>
    <p className="cursor-pointer">More Themes</p>
    <p className=" cursor-pointer">Documentation</p>
    <p className="cursor-pointer">Support</p>
    
    
  </div>
  </div>
  );
};

export default Footer;
