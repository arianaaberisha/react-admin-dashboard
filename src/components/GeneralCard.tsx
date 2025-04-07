import React from 'react';

interface GeneralCardProps {
  children?: React.ReactNode;
}

const GeneralCard: React.FC<GeneralCardProps> = ({ children }) => {
  return (
    <div className="w-full shadow-lg rounded-lg p-6 h-[300px] md:h-[300px] lg:h-[350px] overflow-hidden">
      {children}
    </div>
  );
};

export default GeneralCard;
