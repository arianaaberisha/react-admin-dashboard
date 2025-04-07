import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const ChartComponents: React.FC = () => {
  const [chartSeries] = useState([
    {
      name: "Sales",
      data: [13, 10, 15, 13],
    },
  ]);
 const [chartOptions] = useState<ApexOptions>({
    chart: {
      id: "my-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 6,
        color: "#000",
        opacity: 0.15,
      },
    },
    colors: ["#28C76F"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: ["#28C76F"],
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0.7,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    xaxis: {
      categories: [],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    tooltip: {
      enabled: false,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-medium text-gray-800">Average Daily Sales</span>
        <span className="text-xl text-gray-500">Total Sales This Month</span>
        <br></br>
        <span className="text-2xl font-medium text-gray-800">$28,450</span>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={150}
        width="100%"
      />
    </div>
  );
};

export default ChartComponents;
