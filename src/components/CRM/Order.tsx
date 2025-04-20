import React from "react";
import ChartComponents from "../ChartComponents";
import { ApexOptions } from "apexcharts";

const OrderCard: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        borderRadius: 3,
      },
    },
    colors: ["#7065F0"],
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: [],
    },
  };

  const chartSeries = [
    {
      data: [50, 40, 20, 35, 55, 45, 65],
    },
  ];

  return (
    <div className=" p-4 rounded-xl">
      <p className="text-gray-600 text-[18px] font-[500] dark:text-[#E1DEF5E5]">Order</p>
      <p className="text-gray-400 text-[15px] dark:text-gray-400">Last week</p>
      <div className="mt-[-70px] ml-5 flex justify-center items-center w-[200px]">
        <ChartComponents
  
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={120}
          title=""
            subtitle=""
            value=""
        />
      </div>
      <div className="flex items-end justify-between mt-2">
        <p className="text-xl font-[500] text-gray-800">124k</p>
        <p className="text-sm text-green-500 font-medium">+12.6%</p>
      </div>
    </div>
  );
};

export default OrderCard;
