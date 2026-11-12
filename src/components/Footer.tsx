import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm gap-2 sm:gap-0">
      <p className="text-gray-400 text-center sm:text-start">
        © 2025 Ariana Berisha.
      </p>
      <p className="text-gray-400 text-center sm:text-end">
        UI design inspired by the Vuexy admin template (Pixinvent).
      </p>
    </div>
  );
};

export default Footer;
