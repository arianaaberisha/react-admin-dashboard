import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const reasons = [
  { label: "Incorrect address", value: 13, color: "#7367F0" },
  { label: "Weather conditions", value: 25, color: "#28C76F" },
  { label: "Federal holidays", value: 26, color: "#FF9F43" },
  { label: "Damage during delivery", value: 36, color: "#EA5455" },
];

const options: ApexOptions = {
  chart: { type: "donut", background: "transparent" },
  labels: reasons.map(r => r.label),
  colors: reasons.map(r => r.color),
  legend: { show: false },
  dataLabels: { enabled: false },
  stroke: { width: 4, colors: ["transparent"] },
  plotOptions: {
    pie: {
      donut: {
        size: "75%",
        labels: {
          show: true,
          value: { fontSize: "28px", fontWeight: 500, offsetY: 8 },
          total: {
            show: true,
            label: "Exceptions",
            formatter: () => "38%",
          },
        },
      },
    },
  },
};

const DeliveryExpectations: React.FC = () => {
  return (
    <div>
      <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        Delivery Exceptions
      </h2>
      <p className="text-sm sm:text-base text-[#2F2B3D8C] dark:text-gray-400">
        Reasons for late or failed deliveries
      </p>
      <div className="mt-4 flex justify-center">
        <ReactApexChart
          options={options}
          series={reasons.map(r => r.value)}
          type="donut"
          height={260}
          width={260}
        />
      </div>
      <ul className="mt-4 space-y-3">
        {reasons.map(r => (
          <li key={r.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-[#2F2B3DB2] dark:text-gray-300">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: r.color }} />
              {r.label}
            </span>
            <span className="font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">{r.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryExpectations;
