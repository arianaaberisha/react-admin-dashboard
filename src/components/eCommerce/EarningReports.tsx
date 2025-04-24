import React from "react";
import ReactApexChart from "react-apexcharts";
import ChartComponents from "../ChartComponents";
import { ApexOptions } from "apexcharts";
import Clock from "../Icons/Clock";
import DollarSymbol from "../Icons/DollarSymbol";
import CreditCard from '../Icons/CreditCard';
import ChevronUp from "../Icons/ChevronUp";
import ChevronDown from "../Icons/ChevronDown";


interface StatItem {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  subLabel: string;
  value: string;
  change: string;
  isPositive: boolean;
  changeColor: string;
  iconColor: string;
  iconBg: string;
}

const stats: StatItem[] = [
  {
    Icon: Clock,
    label: 'Net Profit',
    subLabel: '12.4k Sales',
    value: '$1,619',
    change: '18.6%',
    isPositive: true,
    changeColor: 'text-[#2F2B3DB2]',
    iconColor:"stroke-[#7367F0]",
    iconBg:"bg-[#7367F029]"
  },
  {
    Icon: DollarSymbol,
    label: 'Revenue',
    subLabel: 'Total sales',
    value: '$3,571',
    change: '39.6%',
    isPositive: true,
    changeColor: 'text-[#2F2B3DB2]',
    iconColor:"stroke-green-500",
    iconBg:"bg-green-100 dark:bg-[#28C76F29]"
  },
  {
    Icon: CreditCard,
    label: 'Transactions',
    subLabel: 'Card payments',
    value: '$430',
    change: '52.8%',
    isPositive: true,
    changeColor: 'text-[#2F2B3DB2]',
    iconColor:"stroke-gray-500",
    iconBg:"bg-[#2F2B3D0F] dark:bg-gray-600"
  }
];

const EarningReports: React.FC = () => {
     const area2Options: ApexOptions = {
        chart: {
          type: "bar",
          id: "my-chart2",
          toolbar: { show: false },
          zoom: { enabled: false },
          offsetY: -20,
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
            columnWidth: "60%",
            distributed: true,
            dataLabels: { position: "top" },
            borderRadius: 5,
          },
        },
      };
    
      const area2Series = [
        { name: "Earnings", data: [40, 110, 58, 42, 100, 50, 70] },
      ];
    
    
  return (
    <div className="flex flex-col justify-start p-">
      <div className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        Earning Reports
      </div>
      <p className="text-[15px] font-[400] text-[#2F2B3D8C] dark:text-gray-400">
        Weekly Earnings Overview
      </p>

      {stats.map(({ Icon, label, subLabel, value, change, isPositive, changeColor, iconColor, iconBg }) => (
        <div key={label} className="flex items-center justify-between py-2 mt-3">
          <div className="flex items-center gap-2">
          <Icon className={`w-10 h-10 p-1 rounded-md ${iconBg} ${iconColor}`} />
            <div>
              <div className="text-[15px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
                {label}
              </div>
              <div className="text-[13px] font-[400] text-[#2F2B3DB2] dark:text-gray-400">
                {subLabel}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-[400] text-[#2F2B3DB2] dark:text-gray-400">{value}</span>
            <span className={`flex items-center justify-center w-16 h-6 rounded-md font-semibold ${changeColor}`}> 
              {isPositive ? <ChevronUp className=" stroke-green-500" /> : <ChevronDown className="w-4 h-4" />} 
              <span className=" text-[13px] font-[400] text-[#2F2B3D66] dark:text-gray-500">{change}</span>
            </span>
          </div>
        </div>
      ))}
      <div className="w-full">
        <ChartComponents
          type="bar"
          options={area2Options}
          series={area2Series}
          height={220}
          title=""
          subtitle=""
          value=""
        />
      </div>
    </div>
  );
};

export default EarningReports;