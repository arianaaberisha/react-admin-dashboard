import React from "react";
import ChevronUp from "../../assets/icons/ChevronUp.svg";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const GeneratedLeads: React.FC = () => {
    const series = [30, 40, 40, 65];
  
    const options: ApexOptions = {
      chart: {
        type: "donut",
      },
      colors: ["#24B364", "#53D28C", "#7EDDA9", "#A9E9C5"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
                formatter: () => '184', 
                fontSize: '24px',
                fontWeight: 500,
                color: '#2F2B3DE5',
              },
              value: {
                show: false,
                offsetY: -5,
                formatter: () => 'Total',
                fontSize: '13px',
                fontWeight: 600,
                color: '#28C76F',
              },
              total: {
                show: true,
              },
            },
          },
        },
      },
      stroke:{
        show: false,
      },
    };
  return (
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-[#2F2B3DE5] text-[18px] font-[500] dark:text-[#E1DEF5E5]">
            Generated Leads
          </div>
          <p className="text-[#2F2B3DB2] text-[15px] font-[400] dark:text-gray-400">Monthly Report</p>
          <p className="text-[28px] text-[#2F2B3DE5] font-[500] mt-8 dark:text-[#E1DEF5E5]">4,350</p>
          <div className="flex items-center gap-1">
            <img src={ChevronUp} className="w-5 h-5" />
            <div className="text-[#28C76F] text-[15px] font-[400]">15.8%</div>
          </div>
        </div>
        <div className="w-[150px] h-[150px]">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneratedLeads;
