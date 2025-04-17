import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";
import Clock from "../assets/icons/Clock.svg";
import BrandPaypal from "../assets/icons/Brand-paypal.svg";
import DollarSymbol from "../assets/icons/DollarSymbol.svg";

const EarningReports: React.FC = () => {
  const area2Options: ApexOptions = {
    chart: {
      type: "bar",
      id: "my-chart2",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [
      "#7367F029",
      "#7367F029",
      "#7367F029",
      "#7367F029",
      "#7367F0",
      "#7367F029",
      "#7367F029",
    ],
    dataLabels: { enabled: false },
    grid: { show: false },
    tooltip: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
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
        columnWidth: "40%",
        distributed: true,
        dataLabels: { position: "top" },
        borderRadius: 5,
      },
    },
  };

  const area2Series = [
    { name: "Earnings", data: [40, 75, 58, 42, 100, 50, 70] },
  ];

  return (
    <div className="w-full ">
      <div className=" font-medium">
        <h2 className="text-lg md:text-xl font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Earning Reports
        </h2>
        <p className="text-md text-gray-500 dark:text-gray-400 ">Weekly Earnings Overview</p>
      </div>
      <div className="relative w-full  flex flex-col md:flex-row items-start md:items-center justify-between md:space-x-4">
      
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-gray-800 dark:text-[#E1DEF5E5]">$468</div>
            <div className="text-green-500 text-sm md:text-md font-semibold bg-green-200 px-2 py-1 rounded-md shadow-md">
              +4.2%
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-5 dark:text-gray-400">
            You informed of this week compared <br className="hidden md:block" />
            to last week
          </p>
        </div>

        <div className="mt-4 md:mt-0 w-full md:w-[350px] p-5 h-[150px] flex justify-center items-center self-center md:self-auto">
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

      <div className="flex flex-col md:flex-row md:justify-between items-stretch p-4 mt-4 shadow-md border border-gray-200 rounded-xl space-y-4 md:space-y-0 md:space-x-4  dark:border-gray-600">
        
       
        <div className="flex-1 md:text-start lg:text-center">
          <div className="flex md:items-start md:justi lg:items-center lg:justify-center space-x-2 ">
            <img
              src={DollarSymbol}
              className="w-5 h-5 bg-violet-300 rounded-md shadow-md"
              alt="Earnings Icon"
            />
            <p className="text-md dark:text-[#E1DEF5E5]">Earnings</p>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-1 dark:text-[#E1DEF5E5]">
            $545.69
          </p>
          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#7367F0]"
              style={{ width: "65.9%" }}
            ></div>
            <div
              className="h-full bg-gray-300"
              style={{ width: "34.1%" }}
            ></div>
          </div>
        </div>

        <div className="flex-1 md:text-start lg:text-center">
          <div className="flex md:items-start md:justi lg:items-center lg:justify-center space-x-2">
            <img
              src={Clock}
              className="w-5 h-5 bg-blue-200 rounded-md shadow-md"
              alt="Profit Icon"
            />
            <p className="text-md dark:text-[#E1DEF5E5]">Profit</p>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-1 dark:text-[#E1DEF5E5]">
            $256.34
          </p>
          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#00BAD1]"
              style={{ width: "70.2%" }}
            ></div>
            <div
              className="h-full bg-gray-300"
              style={{ width: "29.8%" }}
            ></div>
          </div>
        </div>

   
        <div className="flex-1 md:text-center lg:text-center ">
          <div className="flex md:items-start md:justi lg:items-center lg:justify-center space-x-2">
            <img
              src={BrandPaypal}
              className="w-5 h-5 bg-red-200 rounded-md shadow-md"
              alt="Expense Icon"
            />
            <p className="text-md dark:text-[#E1DEF5E5]">Expense</p>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-1 dark:text-[#E1DEF5E5]">
            $74.19
          </p>
          <div className="mt-3 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#FF4C51]"
              style={{ width: "20.2%" }}
            ></div>
            <div
              className="h-full bg-gray-300"
              style={{ width: "79.8%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningReports;

