import React from "react";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const RadarChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "",
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.7,
    },
    markers: {
      size: 0,
    },
    colors: ["#7367F0", "#00BAD1"], 
    yaxis: {
      tickAmount: 0,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    },
  };

  const series = [
    {
      name: "Sales",
      data: [80, 70, 70, 80, 70, 70],
    },
    {
      name: "Visits",
      data: [50, 80, 50, 50, 50, 50],
    },
  ];

  return (
    <div className="">
        <div className="p-4">
          <h2 className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">Sales</h2>
          <p className="text-md text-gray-500 dark:text-gray-400">Last 6 Months</p>
        </div>
    <div className="max-w-md mx-auto mt-[-30px] ">
      <Chart options={options} series={series} type="radar" height={400} />
    </div>
    </div>
  );
};

export default RadarChart;
