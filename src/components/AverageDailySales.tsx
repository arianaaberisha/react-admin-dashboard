import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";


const AverageDailySales: React.FC = () => {
  const areaOptions: ApexOptions = {
    chart: {
      type: "area",
      id: "my-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#28C76F"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#D9D9D900"],
        opacityFrom: 0.9,
        opacityTo: 0.25,
      },
    },
    grid: { show: false },
    xaxis: {
      categories: [],
      labels: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false }, axisBorder: { show: false } },
    tooltip: { enabled: false },
  };

  const areaSeries = [{ name: "Sales", data: [13, 10, 15, 13] }];

  return (
    <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
        <ChartComponents
          type="area"
          options={areaOptions}
          series={areaSeries}
          title="Average Daily Sales"
          subtitle="Total Sales This Month"
          value="$28,450"
        />
    </div>
  );
};

export default AverageDailySales;
