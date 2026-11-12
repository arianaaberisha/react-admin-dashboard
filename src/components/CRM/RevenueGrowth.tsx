import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "../ChartComponents";


const RevenueGrowth: React.FC = () => {
  const area2Options: ApexOptions = {
    chart: {
      type: "bar",
      id: "my-chart2",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [
      "#D4FFEA",
      "#D4FFEA",
      "#D4FFEA",
      "#D4FFEA",
      "#28C76F",
      "#D4FFEA",
      "#D4FFEA",
    ],
    dataLabels: { enabled: false },
    grid: { show: false },
    tooltip: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["M", "T", "W", "Th", "F", "S", "S"],
      labels: {
        show: true,
        style: {
          colors: "#2F2B3D66",
          fontSize: "12px",
          fontWeight: 500,
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        distributed: true,
        dataLabels: { position: "top" },
        borderRadius: 3,
      },
    },
  };

  const area2Series = [
    { name: "Earnings", data: [50, 60, 70, 80, 90, 80, 70] },
  ];

  return (
    <div className="w-full p-6 ">
      <div className="">
        <h2 className="text-[18px] md:text-xl font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Revenue Growth
        </h2>
        <p className="text-[15px] text-gray-500 dark:text-gray-400 font-[400] mt-2">Weekly Earnings Overview</p>
      </div>
      <div className="relative w-full  flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-4">
      
        
          <div className="">
            <div className="text-[28px] font-[500] text-gray-800 dark:text-[#E1DEF5E5] mt-6">$4,673</div>
            <div className="text-green-500 text-sm md:text-md font-semibold bg-green-200  p-1 px-4 rounded-md shadow-md mt-2">
              +15.2%
            </div>
        </div>
         </div>
         <div className=" relative w-[200px] ml-[100px] sm:ml-[140px] mt-[-110px] flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-4">
        <div className=" md:mt-0 w-full md:w-[350px] p-5 h-[70px] flex justify-center items-center self-center md:self-auto">
          <ChartComponents
            type="bar"
            options={area2Options}
            series={area2Series}
            title=""
            subtitle=""
            value=""
          />
        </div>
      </div>
      </div>
      

      
        
      
  );
};

export default RevenueGrowth;

