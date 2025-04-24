import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Profit:React.FC=()=>{
    const series = [
        {
          name: 'Profit',
          data: [400, 550, 470, 620, 560, 710],
        },
      ];
    
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: 'line',
          toolbar: { show: false },
          sparkline: { enabled: true },
        },
        stroke: {
          curve: 'straight',
          width: 3,
        },
        markers: {
          size: 5,
          colors: ['#00bcd4'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        colors: ['#00bcd4'],
        tooltip: { enabled: false },
        grid: {
          show: false,
        },
        xaxis: {
          labels: { show: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          show: false,
        },
      };
    return(
        <div className="flex flex-col justify-start p-6 ">
            <div className="text-[18px] text-[#2F2B3DE5] font-[500] dark:text-[#E1DEF5E5]">Profit</div>
            <p className="text-[15px] text-[#2F2B3D8C] font-[400] dark:text-gray-400">Last Month</p>
            <div className="">
                    <ReactApexChart options={options} series={series} type="line" height={100} />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                  <div className="text-[24px] text-[#2F2B3DE5] font-[500] dark:text-[#E1DEF5E5]">624k</div>
            <div className="text-[#28C76F] text-[13px] md:text-md font-semibold">
              +8.24%
            </div>
          </div>
        </div>
    )
};
export default Profit;