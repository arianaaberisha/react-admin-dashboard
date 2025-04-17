/*import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";

const AverageDailySales: React.FC = () => {
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
        options: {
          chart: {
            width: "100%",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };

  const areaSeries = [{ name: "Sales", data: [13, 10, 15, 13] }];

  return (
    <div className="xl:col-span-3 lg:col-span-6 md:col-span-12  ">
      <ChartComponents
        type="area"
        options={areaOptions}
        series={areaSeries}
        title="Average Daily Sales"
        subtitle="Total Sales This Month"
        value="$28,450"
      />
    </div>
  );
};

export default AverageDailySales;
*/
import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";

const AverageDailySales: React.FC = () => {
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
        options: { chart: { width: "100%" } },
      },
      {
        breakpoint: 576,
        options: { chart: { width: "100%" } },
      },
    ],
  };

  const areaSeries = [{ name: "Sales", data: [13, 10, 15, 13] }];

  return (
    <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
      <div className=" p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-[#E1DEF5E5]">
          Average Daily Sales
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Total Sales This Month
        </p>
        <div className="mt-2 text-2xl font-bold text-gray-800 dark:text-[#E1DEF5E5]">
          $28,450
        </div>

        <div className="mt-4">
          <ChartComponents
            type="area"
            options={areaOptions}
            series={areaSeries}
            title={""}
            subtitle={""}
              value={""}
            
          />
        </div>
      </div>
    </div>
  );
};

export default AverageDailySales;
