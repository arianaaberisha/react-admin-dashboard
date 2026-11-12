import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";
import Check from "../assets/icons/Check.svg";
import Ticket from "../assets/icons/ticket.svg";
import Clock2 from "../assets/icons/Clock2.svg";

const SupportTracker: React.FC = () => {
  const [isMd, setIsMd] = useState(() => window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const area3options: ApexOptions = {
    chart: {
      type: "radialBar",
      id: "my-chart3",
      toolbar: { show: false },
      zoom: { enabled: false },
      offsetY: -50,
      background: "transparent",
    },
    colors: ["#7367F0"],
    plotOptions: {
      radialBar: {
        startAngle: -165,
        endAngle: 135,
        hollow: { size: "50%" },
        dataLabels: {
          name: {
            show: true,
            color: "#808390",
            fontSize: "14px",
            offsetY: -20,
          },
          value: {
            offsetY: 10,
            fontSize: "36px",
            color: "#808390",
            formatter: function (val: number) {
              return val.toFixed(0) + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: { dashArray: 10 },
    labels: ["Completed Task"],
  };

  const area3Series = [85];

  return (
    <div className="p-4 flex flex-col md:flex-row md:justify-between gap-6 h-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div>
          <h2 className="text-lg text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
            Support Tracker
          </h2>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Last 7 Days
          </p>
        </div>

        <div className="mb-10 mt-3">
          <p className="text-4xl font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
            164
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Total Tickets
          </p>
        </div>

        {!isMd && (
        <div className="flex justify-center">
          <div className="w-[290px] h-[250px]">
            <ChartComponents
              type="radialBar"
              options={area3options}
              series={area3Series}
              title=""
              subtitle=""
              value=""
              height={200}
              width={300}
            />
          </div>
        </div>
        )}

        <div className="grid grid-cols-1 sm:flex sm:flex-col sm:justify-start md:flex md:flex-col md:space-y-4 gap-2 ">
          <div className="flex items-center">
            <img
              src={Ticket}
              alt="New Tickets"
              className="w-8 h-8 bg-[#F1F0FF] rounded-md shadow-md mr-2"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-700 font-[600] dark:text-gray-400">
                New Tickets
              </p>
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                142
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={Check}
              alt="Open Tickets"
              className="w-8 h-8 bg-[#E8F8FF] rounded-md shadow-md mr-2"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                Open Tickets
              </p>
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                28
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={Clock2}
              alt="Response Time"
              className="w-8 h-8 bg-[#FFF3EA] rounded-md shadow-md mr-2"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-700 font-semibold dark:text-gray-400">
                Response Time
              </p>
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                1 Day
              </p>
            </div>
          </div>
        </div>
      </div>

      {isMd && (
      <div className="flex justify-center items-center w-1/2 h-3/2">
        <div>
          <ChartComponents
            type="radialBar"
            options={area3options}
            series={area3Series}
            title=""
            subtitle=""
            value=""
            height={300}
            width={300}
          />
        </div>
      </div>
      )}
    </div>
  );
};

export default SupportTracker;
