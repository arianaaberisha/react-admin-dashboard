
import React from 'react';

interface LogisticsCardProps {
  children?: React.ReactNode;
  className?: string;
}

const LogisticsCard: React.FC<LogisticsCardProps> = ({ children, className }) => {
  return (
    <div className={`w-full shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default LogisticsCard;
//h-[300px] md:h-[300px] lg:h-[350px] overflow-hidden