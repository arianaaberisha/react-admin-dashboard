import React, { useState, useRef, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

const RevenueReports: React.FC = () => {
  const series1 = [
    { name: 'Yellow', data: [-40, -60, -80, -50, -35, -25, -35, -50, -80] },
    { name: 'Spacer', data: [8, 8, 8, 8, 8, 8, 8, 8, 8] },
    { name: 'Violet', data: [80, 60, 50, 55, 70, 90, 70, 78, 40] },
  ];

  const options1: ApexCharts.ApexOptions = {
    chart: { type: 'bar', stacked: true, height: 400, toolbar: { show: false } },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '20%', borderRadius: 5, borderRadiusApplication: 'around' },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
      labels: { show: true },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: true },
    legend: { show: false },
    grid: { show: false },
    colors: ['#FF9F43','transparent','#7367F0'],
    tooltip: {
      enabled: false,
      y: { formatter: (val: number) => `$${val}` },
    },

  };
  const series = [
          {
            name: 'Profit',
            data: [600, 100, 800, 320, 660, 50, 1000,660,800,50,950,700],
          },
        ];
      
        const options: ApexCharts.ApexOptions = {
          chart: {
            type: 'line',
            toolbar: { show: false },
            sparkline: { enabled: true },
          },
          stroke: {
            curve: 'smooth',
            width: 3,
          },
          markers: {
            size: 0,
            colors: ['#7367F0'],
            strokeColors: '#fff',
            strokeWidth: 2,
            hover: {
              size: 7,
            },
          },
          colors: ['#7367F0'],
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

  const years = ['2025', '2024', '2023', '2022'];
  const [open, setOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="p-6 h-full flex">
      <div className="w-1/2 p-4 border-r border-gray-200 dark:border-gray-700">
        <div className="text-[18px] text-[#2F2B3DE5] dark:text-[#E1DEF5E5] font-[500]">
          Revenue Report
        </div>
        <div className="h-60 mt-3 mb-2">
          <ApexCharts options={options1} series={series1} type="bar" height={400} />
        </div>
      </div>
      <div className="relative w-1/2 p-4" ref={ref}>
  <div className="relative flex justify-center">
    <button
      onClick={() => setOpen(o => !o)}
      className="w-30 flex justify-between items-center px-4 py-2 bg-[#7367F029] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#7367F0] rounded-lg hover:shadow"
    >
      <span className="text-lg font-semibold">{selectedYear}</span>
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {open && (
      <ul className="absolute mt-12 z-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg w-30">
        {years.slice(1).map(year => (
          <li key={year}>
            <button
              onClick={() => { setSelectedYear(year); setOpen(false); }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
  <div className="flex justify-center mt-6">
    <div className="p-4 flex flex-col">
      <div className="text-[#2F2B3DE5] text-[28px] font-[500] dark:text-[#E1DEF5E5]">$25,825</div>
      <p className="text-[15px] text-[#4B465C] dark:text-gray-300">
        Budget: 56,800
      </p>
      <ApexCharts options={options} series={series} type="line" height={100} />
    </div>
  </div>
</div>

      
      </div>
    
  );
};

export default RevenueReports;
