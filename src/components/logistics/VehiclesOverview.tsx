import React from "react";
import SegmentedProgressBar from "../SegmentedProgressBar";
import Clock from "../Icons/Clock";

const segments = [
  { label: 'On the way', percentage: 39.7, duration: '4h 12m', color: 'bg-gray-200 text-gray-800' },
  { label: 'Unloading', percentage: 28.3, duration: '2h 59m', color: 'bg-blue-500 text-white' },
  { label: 'Loading', percentage: 17.4, duration: '1h 23m', color: 'bg-cyan-500 text-white' },
  { label: 'Waiting', percentage: 14.6, duration: '0h 45m', color: 'bg-gray-800 text-white',Icon:<Clock/> },
];

const VehiclesOverview: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        Vehicles Overview
      </h2>
      <div className="mt-5">
        <SegmentedProgressBar segments={segments} />
      </div>
      <div className="mt-6 space-y-3">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm text-gray-700"
          >
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${segment.color}`} />
              <span>{segment.label}</span>
            </div>
            <div className="text-gray-500">{segment.duration}</div>
            <div className="text-gray-900 font-medium">{segment.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesOverview;
