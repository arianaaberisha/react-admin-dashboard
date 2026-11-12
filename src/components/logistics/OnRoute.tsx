import React from "react";

type Warning = "None" | "Temperature" | "ECU" | "Oil" | "Fuel";

const warningStyles: Record<Warning, string> = {
  None: "bg-[#28C76F29] text-[#28C76F]",
  Temperature: "bg-[#FF9F4329] text-[#FF9F43]",
  ECU: "bg-[#EA545529] text-[#EA5455]",
  Oil: "bg-[#EA545529] text-[#EA5455]",
  Fuel: "bg-[#00BAD129] text-[#00BAD1]",
};

const warningLabels: Record<Warning, string> = {
  None: "No warnings",
  Temperature: "Temperature not optimal",
  ECU: "ECU not responding",
  Oil: "Oil leakage",
  Fuel: "Fuel problem",
};

const vehicles = [
  { id: "VOL-4521", start: "Sacramento, CA", end: "Seattle, WA", warning: "None" as Warning, progress: 72 },
  { id: "VOL-1087", start: "Austin, TX", end: "Denver, CO", warning: "Temperature" as Warning, progress: 38 },
  { id: "VOL-3392", start: "Chicago, IL", end: "Detroit, MI", warning: "ECU" as Warning, progress: 91 },
  { id: "VOL-7714", start: "Miami, FL", end: "Atlanta, GA", warning: "Oil" as Warning, progress: 54 },
  { id: "VOL-2260", start: "Boston, MA", end: "New York, NY", warning: "Fuel" as Warning, progress: 16 },
  { id: "VOL-9038", start: "Phoenix, AZ", end: "Las Vegas, NV", warning: "None" as Warning, progress: 83 },
];

const OnRoute: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        On Route Vehicles
      </h2>
      <p className="text-sm sm:text-base text-[#2F2B3D8C] dark:text-gray-400">
        Live status of vehicles currently on the road
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
              <th className="py-3 pr-4 font-medium">VEHICLE</th>
              <th className="py-3 pr-4 font-medium">STARTING ROUTE</th>
              <th className="py-3 pr-4 font-medium">ENDING ROUTE</th>
              <th className="py-3 pr-4 font-medium">WARNINGS</th>
              <th className="py-3 font-medium">PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(v => (
              <tr key={v.id} className="border-b border-gray-100 dark:border-gray-700 text-[#2F2B3DB2] dark:text-gray-300">
                <td className="py-4 pr-4 font-medium text-[#7367F0]">{v.id}</td>
                <td className="py-4 pr-4">{v.start}</td>
                <td className="py-4 pr-4">{v.end}</td>
                <td className="py-4 pr-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${warningStyles[v.warning]}`}>
                    {warningLabels[v.warning]}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 rounded bg-gray-200 dark:bg-gray-700">
                      <div className="h-2 rounded bg-[#7367F0]" style={{ width: `${v.progress}%` }} />
                    </div>
                    <span className="text-xs">{v.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnRoute;
