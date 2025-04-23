import React from "react";
import Clock from "../Icons/Clock";
import Profile from "../Icons/Profile";
import Cart from "../Icons/ShoppingCart";
import Dollar from "../Icons/DollarSymbol";

const Statistics: React.FC = () => {
  const items = [
    {  icon: <Clock className="w-12 h-12 bg-violet-100 stroke-[#7367F0] rounded-md shadow-md p-2" />,count: "230k", label: "Sales" },
    { icon:<Profile className="w-12 h-12 bg-[#00BAD129] stroke-[#60afa7] rounded-md shadow-md p-2"/>,count: "8.549k", label: "Customers" },
    { icon:<Cart className="w-12 h-12 bg-[#fcdadb] stroke-[#FF4C51] rounded-md shadow-md p-2"/>,count: "1.423k", label: "Products" },
    { icon:<Dollar className="w-12 h-12  bg-[#8beebc29] stroke-[#26613929] rounded-md shadow-md p-2"/>,count: "$9745", label: "Revenue" },
  ];
  
    return (
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="text-[#2F2B3DE5] text-[18px] font-[500] dark:text-[#E1DEF5E5]">Statistics</div>
          <p className="text-[#2F2B3D66] text-[13px] font-[400] dark:text-gray-400">Updated 1 month ago</p>
        </div>
  
        <div className="flex flex-wrap justify-between gap-4 mt-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-center w-full sm:w-[48%] lg:w-[23%]">
              <div className="mr-2">{item.icon}</div>
              <div>
                <div className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">{item.count}</div>
                <div className="text-[13px] font-[400] text-[#2F2B3DB2] dark:text-gray-400">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Statistics;
