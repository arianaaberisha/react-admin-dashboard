import React, { useState, useRef, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const RevenueReports: React.FC = () => {
  const [chartHeight, setChartHeight] = useState(350);
  const [chartWidth, setChartWidth] = useState('100%');
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateChartDimensions = () => {
      if (chartContainerRef.current) {
        const containerWidth = chartContainerRef.current.offsetWidth;
      
        if (containerWidth < 640) {
          setChartHeight(200);
        } else if (containerWidth < 768) {
          setChartHeight(250);
        } else if (containerWidth < 1024) {
          setChartHeight(300);
        } else {
          setChartHeight(350);
        }
        
        setChartWidth('100%');
      }
    };
    updateChartDimensions();
    window.addEventListener('resize', updateChartDimensions);
    return () => {
      window.removeEventListener('resize', updateChartDimensions);
    };
  }, []);

  const series1 = [
    { name: 'Yellow', data: [-40, -60, -80, -50, -35, -25, -35, -50, -80] },
    { name: 'Spacer', data: [8, 8, 8, 8, 8, 8, 8, 8, 8] },
    { name: 'Violet', data: [80, 60, 50, 55, 70, 90, 70, 78, 40] },
  ];

  const options1: ApexCharts.ApexOptions = {
    chart: { 
      type: 'bar', 
      stacked: true, 
      height: chartHeight,
      width: chartWidth,
      toolbar: { show: false } 
    },
    plotOptions: {
      bar: { 
        horizontal: false, 
        columnWidth: '20%', 
        borderRadius: 2, 
        borderRadiusApplication: 'around' 
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
      labels: { show: true, rotate: 0, style: { fontSize: '10px' } },
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
    }
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
    <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-2 sm:p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
        <div className="text-base sm:text-lg text-[#2F2B3DE5] dark:text-[#E1DEF5E5] font-medium">
          Revenue Report
        </div>
        <div ref={chartContainerRef} className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] mt-2 sm:mt-3 mb-2">
          <ApexCharts options={options1} series={series1} type="bar" height="100%" width="100%" />
        </div>
      </div>
      <div className="relative w-full  md:w-1/2 p-2 sm:p-4 flex flex-col" ref={ref}>
        <div className="relative flex justify-center">
          <button
            onClick={() => setOpen(o => !o)}
            className="w-30 flex justify-between items-center px-3 sm:px-4 py-2 bg-[#7367F029] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#7367F0] rounded-lg hover:shadow"
          >
            <span className="text-base sm:text-lg font-semibold">{selectedYear}</span>
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
        <div className="flex justify-center mt-2 sm:mt-4">
          <div className="p-2 sm:p-4 flex flex-col">
            <div className="text-[#2F2B3DE5] text-xl sm:text-2xl font-medium dark:text-[#E1DEF5E5]">$25,825</div>
            <p className="text-sm sm:text-base text-[#4B465C] dark:text-gray-300">
              Budget: 56,800
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-2 flex-grow'>
          <div className="w-full h-[80px] sm:h-[100px]">
            <ApexCharts options={options} series={series} type="line" height="100%" width="100%" />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default RevenueReports;
