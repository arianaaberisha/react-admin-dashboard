import React from "react";
import Clock from "../Icons/Clock";
import Profile from "../Icons/Profile";
import Cart from "../Icons/ShoppingCart";
import Dollar from "../Icons/DollarSymbol";

const Statistics: React.FC = () => {
  const items = [
    { icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7367F029] stroke-[#7367F0] rounded-md shadow-md p-1.5 sm:p-2" />, count: "230k", label: "Sales" },
    { icon: <Profile className="w-8 h-8 sm:w-10 sm:h-10 bg-[#00BAD129] stroke-[#60afa7] rounded-md shadow-md p-1.5 sm:p-2"/>, count: "8.549k", label: "Customers" },
    { icon: <Cart className="w-8 h-8 sm:w-10 sm:h-10 bg-[#fcdadb] stroke-[#FF4C51] rounded-md shadow-md p-1.5 sm:p-2"/>, count: "1.423k", label: "Products" },
    { icon: <Dollar className="w-8 h-8 sm:w-10 sm:h-10 bg-[#8beebc29] stroke-green-500 rounded-md shadow-md p-1.5 sm:p-2"/>, count: "$9745", label: "Revenue" },
  ];
  
  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className="text-[#2F2B3DE5] text-base sm:text-lg font-[500] dark:text-[#E1DEF5E5]">
          Statistics
        </h2>
        <p className="text-[#2F2B3D66] text-xs sm:text-sm font-[400] dark:text-gray-400">
          Updated 1 month ago
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:mb-2 lg:mt-14">
        {items.map((item, i) => (
          <div key={i} className="flex items-center space-x-2 p-2 sm:p-1">
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5] truncate">
                {item.count}
              </div>
              <div className="text-xs sm:text-sm font-[400] text-[#2F2B3DB2] dark:text-gray-400 truncate">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Statistics;
