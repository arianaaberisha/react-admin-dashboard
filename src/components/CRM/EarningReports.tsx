import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "../ChartComponents";

import ShoppingCart from "../Icons/ShoppingCart";
import BarChart from "../Icons/BarChart";
import DollarSymbol from "../Icons/DollarSymbol";
import Clock from "../Icons/Clock";

type Metric = "orders" | "sales" | "profit" | "income";

const dataMap: Record<Metric, number[]> = {
  orders: [28, 10, 45, 38, 15, 30, 35, 30, 8],
  sales:  [35, 25, 15, 40, 42, 25, 48, 8, 30],
  profit: [10,  22, 27, 33, 42, 32, 27, 22, 8],
  income: [5, 9, 12, 18, 20, 25, 30, 36, 48],
};

const EarningReportsCard: React.FC = () => {
  const [active, setActive] = useState<Metric>("orders");
  const [series, setSeries] = useState<{ name: Metric; data: number[] }[]>([
    { name: active, data: dataMap[active] }
  ]);

  const highlightIndex = dataMap[active].indexOf(
    Math.max(...dataMap[active])
  );
  const barColors = dataMap[active].map((_value, idx) =>
    idx === highlightIndex ? "#7367F0" : "#7367F029"
  );

  const barOptions: ApexOptions = {
    chart: { type: "bar", toolbar: { show: false }, zoom: { enabled: false } },
    plotOptions: {
      bar: { columnWidth: "30%", borderRadius: 4, distributed: true }
    },
    legend: {
      show: false
    },
    colors: barColors,
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
      axisBorder: { show: false },
      labels: { style: { colors: "#A3AED0", fontSize: "12px" } },
      crosshairs: { show: false },
      
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}k`,
        style: { colors: "#A3AED0", fontSize: "12px" }
      },
      axisBorder: { show: false }
    },
    grid: { strokeDashArray: 4, borderColor: "transparent" },
    tooltip: { y: { formatter: (val) => `${val}k` } }
  };

  const IconMap: Record<Metric, React.FC<React.SVGProps<SVGSVGElement>>> = {
    orders: ShoppingCart,
    sales:  BarChart,
    profit: DollarSymbol,
    income: Clock,
  };

  const handleClick = (key: Metric) => {
    setActive(key);
    setSeries([{ name: key, data: dataMap[key] }]);
  };

  return (
    <div className=" p-6 space-y-4">
      <div>
        <h3 className="text-xl font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Earning Reports
        </h3>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Yearly Earnings Overview
        </p>
      </div>

      <div className="flex space-x-5">
        {(Object.keys(dataMap) as Metric[]).map((key) => {
          const Icon = IconMap[key];
          return (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`flex flex-col items-center justify-center h-[100px] w-[110px] dark:bg-transparent rounded-md border transition \
                ${active === key
                  ? "border-indigo-600 bg-transparent text-indigo-600"
                  : "border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"}`
              }
            >
              <Icon />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="w-full h-[230px]">
        <ChartComponents
          type="bar"
          options={barOptions}
          series={series}
          height={220}
          title=""
          subtitle=""
          value=""
        />
      </div>
    </div>
  );
};

export default EarningReportsCard;
