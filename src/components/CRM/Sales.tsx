
import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "../ChartComponents";

const Sales: React.FC = () => {
  const areaOptions: ApexOptions = {
    chart: {
      type: "area",
      id: "my-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#28C76F"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#D9D9D900"],
        opacityFrom: 0.55,
        opacityTo: 0.15,
      },
    },
    grid: { show: false },
    xaxis: {
      categories: [],
      labels: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false }, axisBorder: { show: false } },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 768,
        options: { chart: { width: "" } },
      },
      {
        breakpoint: 576,
        options: { chart: { width: "" } },
      },
    ],
  };

  const areaSeries = [{ name: "Sales", data: [13, 10, 15, 13] }];

  return (
    <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
  <div className=" rounded-lg h-[220px] flex flex-col justify-between p-4">
    <div>
      <h3 className="text-lg font-[500] text-gray-900 dark:text-[#E1DEF5E5] ml-4">
        Sales
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
        Last Year
      </p>
    </div>

    <div className="w-full min-h-0  ">
      <ChartComponents
        type="area"
        options={areaOptions}
        series={areaSeries}
        height={100}
        title={""}
        subtitle={""}
        value={""}
      />
    </div>

    <div className="flex justify-center items-center gap-2 px-2">
      <div className="text-lg font-[500] text-gray-800 dark:text-[#E1DEF5E5]">
        175k
      </div>
      <div className="text-red-500 text-sm font-semibold">
        -16.2%
      </div>
    </div>
  </div>
</div>
  );
};

export default Sales;
