import React from 'react';

type Segment = {
  label: string;
  percentage: number;
  color: string; 
  duration?: string;
  Icon?: React.ReactNode;
};
interface SegmentedProgressBarProps {
  segments: Segment[];
}

const SegmentedProgressBar: React.FC<SegmentedProgressBarProps> = ({ segments }) => {
  return (
    <div className="w-full">
      <div className="flex w-full text-xs font-medium text-gray-600 mb-1">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="text-center"
            style={{ width: `${segment.percentage}%` }}
          >
            {segment.label}
          </div>
        ))}
      </div>
      <div className="w-full h-10 flex rounded-md overflow-hidden">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`${segment.color} h-full flex items-center justify-center text-xs`}
            style={{ width: `${segment.percentage}%` }}
          >
            {segment.Icon ?? (segment.percentage > 8 && <span>{segment.percentage}%</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SegmentedProgressBar;
