import React from 'react';

interface ECommerceCardProps {
  children?: React.ReactNode;
  className?: string;
}

const ECommerceCard: React.FC<ECommerceCardProps> = ({ children, className }) => {
  return (
    <div className={`w-full shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ECommerceCard;