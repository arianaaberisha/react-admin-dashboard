import React from 'react';
import ApexCharts from 'react-apexcharts';
import ChevronUp from '../assets/icons/ChevronUp.svg'
import Payment from '../assets/icons/Payment.svg'
import Refund from '../assets/icons/Refund.svg'

const EarningsChart: React.FC = () => {
    const series = [
        {
          name: 'Gray',
          data: [-25, -32, -25, -45, -15, -20, -15, -20], 
        },
        {
          name: 'Spacer',
          data: [8, 8, 8, 8, 8, 8, 8, 8],
        },
        {
          name: 'Violet',
          data: [50, 30, 60, 15, 45, 55, 45, 48], 
        },
      ];
      
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 100,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        borderRadius: 5,
        borderRadiusApplication: 'around',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7'],
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    
    grid: { show: false },
    colors: ['#808390','transparent', '#7367F0'],
    tooltip: {
      enabled: false,
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
  };

  return (
    <div className="">
      <div className="text-lg text-gray-500 dark:text-[#E1DEF5E5]">Total Earning</div>
      <div className="flex justify-start items-center gap-3  mt-2">
        <div className="text-5xl dark:text-[#E1DEF5E5] ">87%</div>
        <div className="flex items-center gap-2">
          <img src={ChevronUp} className="w-5 h-5 " ></img>
        <div className="text-green-500 text-md font-medium"> 25.8%</div>
      </div>
      </div>
      <div className="h-60 mt-3 mb-2">
        <ApexCharts options={options} series={series} type="bar" height={260} />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded-lg dark:bg-[#2F3349] ">
              <img src={Payment} className="w-10 h-10 bg-violet-200 rounded-md shadow-md mr-2 p-2" />
            </div>
            <div>
              <div className="text-sm font-medium dark:text-[#E1DEF5E5]">Total Revenue</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Client Payment</div>
            </div>
          </div>
          <div className="text-green-500 font-medium">+$126</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 rounded- dark:bg-[#2F3349] ">
              <img src={Refund} className="w-10 h-10 bg-gray-200 rounded-md shadow-md mr-2 p-2" />
            </div>
            <div>
              <div className="text-sm font-medium dark:text-[#E1DEF5E5]">Total Sales</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Refund</div>
            </div>
          </div>
          <div className="text-green-500 font-medium">+$98</div>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
