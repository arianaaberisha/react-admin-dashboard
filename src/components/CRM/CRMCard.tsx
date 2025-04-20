
import React from 'react';

interface CrmCardProps {
  children?: React.ReactNode;
  className?: string;
}

const CrmCard: React.FC<CrmCardProps> = ({ children, className }) => {
  return (
    <div className={`w-full shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default CrmCard;
//h-[300px] md:h-[300px] lg:h-[350px] overflow-hidden