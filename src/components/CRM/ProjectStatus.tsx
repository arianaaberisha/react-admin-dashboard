import React from "react";
import ReactApexChart from "react-apexcharts";
import DollarSymbol from "../Icons/DollarSymbol";
import { ApexOptions } from "apexcharts";

const ProjectStatus: React.FC = () => {
    const chartOptions: ApexOptions = {
        chart: {
            type: "line",
            height: 200,
            zoom: { enabled: true },
            toolbar: { show: false },
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 9,
              opacity: 0.99,
              color: "#F97316",
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
          colors: ["#F97316"],
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            gradientToColors: ["#D9D9D900"],
            opacityFrom: 0.55,
        opacityTo: 0.15,
            stops: [0, 100],
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#F97316",
                  opacity: 1,
                },
                {
                  offset: 100,
                  color: "#F97316",
                  opacity: 1,
                },
              ],
            ],
          },
        },
        markers: {
          size: 0,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false },
        },
        yaxis: {
          show: false,
        },
      };
  const series = [
    {
      name: "Earnings",
      data: [10, 10, 30, 30, 18, 18, 11,11,18,18,40,40,18,18,50], 
    },
  ];

  return (
    <div className="p-6 mt-2">
      <p className="text-[#2F2B3DE5] dark:text-[#E1DEF5E5] text-[18px] font-[500]">Project Status</p>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <DollarSymbol className="w-[40px] h-[40px] bg-orange-100 text-orange-500 rounded-md shadow-md mr-2 p-2" />
          <div>
            <div className="text-[15px] font-medium dark:text-[#E1DEF5E5]">$4,3742</div>
            <div className="text-[13px] text-gray-500 dark:text-gray-400">Your Earnings</div>
          </div>
        </div>
        <div className="text-green-500 font-medium">+10.2%</div>
      </div>

      <div className="mt-2">
        <ReactApexChart options={chartOptions} series={series} type="line" height={250} />
      </div>
      <div className="mt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-[#2F2B3DE5] dark:text-[#E1DEF5E5] font-[500] text-[15px]">Donates</span>
          <span className="text-gray-500 dark:text-gray-100 font-[400]">$756.26 <span className="text-red-500 ml-2">-139.34</span></span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[#2F2B3DE5] dark:text-[#E1DEF5E5] font-[500] text-[15px]">Podcasts</span>
          <span className="text-gray-500 dark:text-gray-100 font-[400]">$2,207.03 <span className="text-green-500 ml-2">+576.24</span></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
