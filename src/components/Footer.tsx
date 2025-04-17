import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm gap-2 sm:gap-0">
      <div className="text-gray-400 text-center sm:text-start">
        <p>© 2025, made with ❤️ by Pixinvent</p>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-[#7367F0]">
        <p className="cursor-pointer hover:underline">License</p>
        <p className="cursor-pointer hover:underline">More Themes</p>
        <p className="cursor-pointer hover:underline">Documentation</p>
        <p className="cursor-pointer hover:underline">Support</p>
      </div>
    </div>
  );
};

export default Footer;

