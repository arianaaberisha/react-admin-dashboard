import React from "react";
import { ApexOptions } from "apexcharts";
import ChartComponents from "./ChartComponents";
import Check from "../assets/icons/Check.svg"
import Ticket from "../assets/icons/ticket.svg"
import Clock2 from "../assets/icons/Clock2.svg"

const SupportTracker: React.FC = () => {
    // Chart 3 
    const area3options: ApexOptions = {
      chart: {
        type: "radialBar",
        id: "my-chart3",
        toolbar: { show: false },
        zoom: { enabled: false },
        offsetY: -120, 
      },
      colors: [
        "#7367F0"
      ],
      plotOptions: {
        radialBar: {
          startAngle: -155,
          endAngle: 135,
          hollow: { size: "50%" },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 0,
              fontSize: "36px",
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
      labels: [],
    };
    
    const area3Series = [85];

    return(
        <div className="p-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="mb-2 font-medium">
            <h2 className="text-lg  text-[#2F2B3DE5] ">Support Tracker</h2>
            <p className="text-md text-gray-500">Last 7 Days</p>
          </div>
          <div className="mb-3">
            <p className="text-4xl font-[500] text-[#2F2B3DE5]">164</p>
            <p className="text-xs text-gray-400">Total Tickets</p>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex items-center">
              <img
                src={Ticket}
                alt="New Tickets"
                className="w-7 h-10 bg-violet-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col ">
                <p className="text-sm text-gray-700 font-[600]">New Tickets</p>
                <p className="text-sm font-semibold text-gray-400">142</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={Check}
                alt="Open Tickets"
                className="w-7 h-10 bg-blue-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold">Open Tickets</p>
                <p className="text-sm font-semibold text-gray-400">28</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={Clock2}
                alt="Response Time"
                className="w-7 h-10 bg-orange-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold">Response Time</p>
                <p className="text-sm font-semibold text-gray-400">1 Day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[350px] h-[120px]">
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
      </div>
    );
};
export default SupportTracker