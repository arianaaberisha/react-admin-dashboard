import React from 'react';

interface GeneralCardProps {
  children?: React.ReactNode;
  className?: string;
}

const GeneralCard: React.FC<GeneralCardProps> = ({ children, className }) => {
  return (
    <div className={`w-full shadow-lg rounded-lg p-6  overflow-hidden  ${className}`}>
      {children}
    </div>
  );
};

export default GeneralCard;
//h-[300px] md:h-[300px] lg:h-[350px] overflow-hidden