import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: true,
      },
    },
    colors:['#FF9F43'],

    plotOptions: {
      radialBar: {
        
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '57%',
          margin: 12,
          dropShadow: {
            enabled: false,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '24px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: 0,
      },
    },
    fill: {
      type: 'solid',
      gradient: {
        shade: 'light',
        inverseColors: false,
      },
    
    },
  };
  
  const series: number[] = [76];
  
const Expenses:React.FC=()=>{
    return(
        <div className="flex flex-col p-6">
            <div className="text-[#2F2B3DE5] text-[18px] font-[500] dark:text-[#E1DEF5E5]">82.5k</div>
            <p className="text-[#2F2B3D8C] text-[15px] font-[400] dark:text-gray-400">Expenses</p>
            <ReactApexChart options={options} series={series} type="radialBar" height={170} />
            <div className=" text-[#2F2B3D66] font-[400] text-[13px] dark:text-gray-400 ">$21k Expenses more than last month</div>
        </div>
    )
};
export default Expenses;