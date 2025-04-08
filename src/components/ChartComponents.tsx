import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type ChartComponentsProps={
  type: ApexChart["type"];
  options:ApexOptions;
  series:ApexAxisChartSeries;
  height?: number;
  width?: number;
  title: string;
  subtitle: string;
  value: string;
}
const ChartComponents: React.FC<ChartComponentsProps> = ({
  type,
  options,
  series,
  height = 150,
  width = "100%",
  title,
  subtitle,
  value,
}) => {
  
  const updatedOptions: ApexOptions = {
    ...options,
    chart: {
      ...options.chart,
      type,
    },
  };

  return (
    <div className="w-full">
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-medium text-gray-800">{title}</span>
        <span className="text-xl text-gray-500">{subtitle}</span>
        <br />
        <span className="text-2xl font-medium text-gray-800">{value}</span>
      </div>
      <ReactApexChart
        options={updatedOptions}
        series={series}
        height={height}
        width={width}
        type={type}
      />
    </div>
  );
};

export default ChartComponents;