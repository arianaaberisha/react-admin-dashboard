import GeneralCard from "./GeneralCard";
import WebAnalyticsCard from "./WebAnalyticsCard";
import ChartComponents from "./ChartComponents";
import { ApexOptions } from "apexcharts"; 
import ShoppingCart2 from "../assets/icons/ShoppingCart2.svg"
import Clock from "../assets/icons/Clock.svg"
import BrandPaypal from "../assets/icons/Brand-paypal.svg"
import DollarSymbol from "../assets/icons/DollarSymbol.svg"
import Link from "../assets/icons/Link.svg"

const Body: React.FC = () => {
  const areaOptions: ApexOptions = {
    chart: {
      type: "area", 
      id: "my-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#28C76F"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        
        gradientToColors: ["#28C76F"],
        inverseColors: false,
        opacityFrom: 0.85,
        opacityTo: 0.25,
      },
     
    },
    grid: {
      show: false,
      padding: { left: 0, right: 0, top: 0, bottom: 0 },
    },
    xaxis: {
      categories: [],
      labels: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
    },
    tooltip: { enabled: false },
  };

  const areaSeries = [
    {
      name: "Sales",
      data: [13, 10, 15, 13],
    },
  ];


  //Chart 2
  const area2Options: ApexOptions = {
    chart: {
      type: "bar",
      id: "my-chart2",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: [
      "#D8C5E1", "#D8C5E1", "#D8C5E1", "#D8C5E1", "#7F3FBF", "#D8C5E1", "#D8C5E1"
    ],
    dataLabels: {
      enabled: false, 
    },
    grid: {
      show: false,
      
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false, 
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sa", "Sun"],
      labels: { show: true },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisBorder: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        dataLabels: {
          position: "top",
        },
      },
    },
  };
  
  const area2Series = [
    {
      name: "Earnings",
      data: [40, 75, 58, 42, 100, 50, 70],
    },
  ];
  

  return (
    <div className="mx-auto p-4 space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="rounded-lg bg-violet-500 xl:col-span-6 lg:col-span-6 md:col-span-12 relative">
          <GeneralCard>
            <WebAnalyticsCard />
          </GeneralCard>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
        <GeneralCard>
            <ChartComponents
              type="area"
              options={areaOptions}
              series={areaSeries}
              title="Average Daily Sales"
              subtitle="Total Sales This Month"
              value="$28,450"
            />
          </GeneralCard>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
  <GeneralCard>
    <div className="p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-500 text-md">Sales Overview</div>
        
        <div className="text-green-500 text-md font-semibold ">+18.2%</div>
      </div>

      <div className="text-3xl font-semibold text-gray-800 mb-16">$42.5k</div>
      <div className="flex justify-center items-center space-x-4">
   
        <div className="flex flex-col items-center w-20">
          <img src={ShoppingCart2} className="w-6 h-18 mb-2" />
          <div className="text-sm text-gray-600">Order</div>
          <div className="text-lg font-semibold text-gray-800">62.2%</div>
          <div className="text-xs text-gray-400">6,440</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-px h-20 bg-gray-300 relative">
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-300 text-[10px] rounded-full px-2 py-[1px] shadow">
              VS
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-24">
          <img src={Link} className="w-5 h-5 mb-1" />
          <div className="text-sm text-gray-600">Visits</div>
          <div className="text-lg font-semibold text-gray-800">25.5%</div>
          <div className="text-xs text-gray-400">12,749</div>
        </div>
      </div>
      <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
        <div className="h-full bg-cyan-500" style={{ width: "62.2%" }}></div>
        <div className="h-full bg-indigo-600" style={{ width: "37.8%" }}></div>
      </div>
    </div>
  </GeneralCard>
</div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          
        <GeneralCard>
      <div className="p-4 ">
      <h2 className="text-xl font-semibold">Earning Reports</h2>
      <p className="text-md text-gray-500">Weekly Earnings Overview</p>
      </div>
      <div className="flex justify-between items-center p-4 ">
      <div className="flex flex-col space-y-1">
       <div className="flex justify-between items-center mb-2">
        <div className=" text-3xl text-gray-800 text-md">$468</div>
        <div className="text-green-500 text-md font-semibold bg-green-200 p-2 rounded-md shadow-md">+18.2%</div>
      </div>
      <p className="text-sm text-gray-500">You informed of this week compared to last week</p>
       </div>
      <div className="w-[350px] h-[50px] flex justify-center items-center">
      <ChartComponents
        type="bar"
        options={area2Options}
        series={area2Series}
        title=""      
        subtitle=""   
        value=""    
      />
    </div>
    </div>
    <div className="flex justify-between items-center p-4 mt-4">
    <div className="text-center">
    <div className="flex items-center justify-center space-x-2">
      <img src={DollarSymbol} className="w-5 h-5  bg-violet-300 rounded-md shadow-md" />
      <p className="text-md font-semibold">Earnings</p>
    </div>
    <p className="text-xl font-semibold text-gray-800">$545.69</p>
    <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
        <div className="h-full bg-violet-500" style={{ width: "65.9%" }}></div>
        <div className="h-full bg-gray-300" style={{ width: "34.1%" }}></div>
      </div>
    </div>
    <div className="text-center">
    <div className="flex items-center justify-center space-x-2">
      <img src={Clock} className="w-5 h-5  bg-blue-200 rounded-md shadow-md" />
      <p className="text-md font-semibold">Profit</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">$256.34</p>
    <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
        <div className="h-full bg-cyan-500" style={{ width: "70.2%" }}></div>
        <div className="h-full bg-gray-300" style={{ width: "29.8%" }}></div>
      </div>
  </div>
  <div className="text-center">
    <div className="flex items-center justify-center space-x-2">
      <img src={BrandPaypal} className="w-5 h-5  bg-red-200 rounded-md shadow-md" />
      <p className="text-md font-semibold">Expense</p>
    </div>
    <p className="text-lg font-semibold text-gray-800">$74.19</p>
    <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
        <div className="h-full bg-red-500" style={{ width: "20.2%" }}></div>
        <div className="h-full bg-gray-300" style={{ width: "79.8%" }}></div>
      </div>
  </div>
  </div>
</GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard>
          <div className="p-4 ">
      <h2 className="text-md font-semibold">Support Tracker</h2>
      <p className="text-md text-gray-500">Last 7 Days</p>
      </div>
      <div className="flex justify-between items-center p-4 ">
      <div className="flex flex-col space-y-1">
       <div className="flex justify-between items-center mb-2">
        <div className=" text-3xl text-gray-800 text-md">164</div>
      </div>
      <p className="text-sm text-gray-500">Total Tickets</p>
       </div>
      <div className="w-[350px] h-[50px] flex justify-center items-center">
        
      
    </div>
    </div>
          </GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>
    </div>
  );
};

export default Body;
