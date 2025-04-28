import React, { useState } from "react";
import Location from "../Icons/Location";
import CheckCircle from "../Icons/CheckCircle"

const tabs = ["New", "Preparing", "Shipping"];

const ordersData = {
  New: [
      {
        sender: { name: "Myrtle Ullrich", address: "101 Boulder, California(CA), 95959" },
        receiver: { name: "Barry Schowalter", address: "939 Orange, California(CA), 92118" }
      },
      {
        sender: { name: "Veronica Herman", address: "162 Windsor, California(CA), 95959" },
        receiver: { name: "Helen Jacobs", address: "487 Sunset, California(CA), 94043" },
      },
  ],
  Preparing: [
    {
      sender: { name: "Barry Schowalter", address: "939 Orange, California(CA), 92118" },
      receiver: { name: "Myrtle Ullrich", address: "101 Boulder, California(CA), 95959" },
    },
    {
        sender: { name: "Veronica Herman", address: "162 Windsor, California(CA), 95959" },
        receiver: { name: "Helen Jacobs", address: "487 Sunset, California(CA), 94043" },
      },
  ],
  Shipping: [
    {
      sender: { name: "Veronica Herman", address: "101 Boulder, California(CA), 95959" },
      receiver: { name: "Helen Jacobs", address: "487 Sunset, California(CA), 94043" },
    },
    {
      sender: { name: "Myrtle Ullrich", address: "162 Windsor, CA, 95492" },
      receiver: { name: "Barry Schowalter", address: "939 Orange, California(CA), 92118" }
    },
  ],
};

const OrdersByCountries = () => {
  const [activeTab, setActiveTab] = useState("New");
  const orders = ordersData[activeTab as keyof typeof ordersData];

  return (
    <div className="p-3 sm:p-4 flex flex-col gap-2">
      <div className="mb-2 sm:mb-3">
        <h2 className="text-base sm:text-lg font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">Orders by Countries</h2>
        <p className="text-sm sm:text-base font-[400] text-[#2F2B3D8C] dark:text-gray-400">2 deliveries in progress</p>
      </div>

      <div className="flex space-x-4 sm:space-x-8 md:space-x-20 border-b border-gray-200 dark:border-gray-500 text-sm font-medium text-gray-400 mb-3 sm:mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 sm:pb-3 text-sm sm:text-base whitespace-nowrap focus:outline-none dark:bg-transparent ${
              activeTab === tab
                ? "text-[#7367F0] border-b-2 sm:border-b-3 border-b-[#7367F0] rounded-none "
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="overflow-y-auto max-h-[300px] sm:max-h-[400px]">
        {orders.map((order, idx) => (
          <div key={idx} className="mb-3 sm:mb-4 relative pl-5 sm:pl-6 border-1 border-dashed border-gray-300">
            <div className="mb-4 sm:mb-6">
              <div className="absolute -left-1 text-[#28C76F]">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm font-[400] text-[#28C76F]">SENDER</p>
              <p className="text-sm sm:text-base font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">{order.sender.name}</p>
              <p className="text-xs sm:text-sm font-[400] text-[#2F2B3DB2] dark:text-gray-400 break-words">{order.sender.address}</p>
            </div>
            <div>
              <div className="absolute -left-1 text-[#7367F0]">
                <Location className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm font-[400] text-[#7367F0]">RECEIVER</p>
              <p className="text-sm sm:text-base font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">{order.receiver.name}</p>
              <p className="text-xs sm:text-sm font-[400] text-[#2F2B3DB2] dark:text-gray-400 break-words">{order.receiver.address}</p>
            </div>
            {idx < orders.length - 1 && <div className="mt-3 sm:mt-4 border-t border-dashed border-gray-300 dark:border-gray-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersByCountries;
