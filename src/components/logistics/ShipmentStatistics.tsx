import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

const options: ApexOptions = {
  chart: {
    type: "line",
    toolbar: { show: false },
    zoom: { enabled: false },
    background: "transparent",
  },
  colors: ["#7367F0", "#00BAD1"],
  stroke: { width: [0, 3], curve: "smooth" },
  plotOptions: { bar: { columnWidth: "35%", borderRadius: 4 } },
  dataLabels: { enabled: false },
  legend: { position: "top", horizontalAlign: "right", markers: { size: 6 } },
  grid: { borderColor: "#80839029", strokeDashArray: 4 },
  xaxis: {
    categories: months,
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { formatter: (v: number) => `${v}` } },
  tooltip: { shared: true },
};

const series = [
  { name: "Shipments", type: "column", data: [38, 45, 33, 38, 32, 50, 48, 40, 42] },
  { name: "Delayed", type: "line", data: [23, 28, 23, 32, 28, 44, 32, 38, 26] },
];

const ShipmentStatistics: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        Shipment Statistics
      </h2>
      <p className="text-sm sm:text-base text-[#2F2B3D8C] dark:text-gray-400">
        Total number of deliveries 23.8k
      </p>
      <div className="mt-4">
        <ReactApexChart options={options} series={series} type="line" height={300} />
      </div>
    </div>
  );
};

export default ShipmentStatistics;
