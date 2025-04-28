import React from "react";
import India from "../assets/icons/India.png";
import Australia from "../assets/icons/Australia.png";
import France from "../assets/icons/France.png";
import China from "../assets/icons/China1.png";
import America from "../assets/icons/America.png";
import Brazil from "../assets/icons/Brazil.png";
import ChevronDown from "../assets/icons/ChevronDown2.svg";
import ChevronUp from "../assets/icons/ChevronUp.svg";
import CardComponent from "./CardComponent";

interface SalesItem {
  iconSrc: string;
  label: string;
  subLabel: string;
  trendIcon: string;
  percentage: string;
  isPositive:boolean;
}

const salesData: SalesItem[] = [
  {
    iconSrc: America,
    label: "$8,567k", 
    subLabel: "United States",
    trendIcon: ChevronUp,
    percentage: "25.8%",
    isPositive:true,
  },
  {
    iconSrc: Brazil,
    label: "$2,415k", 
    subLabel: "Brazil", 
    trendIcon: ChevronDown,
    percentage: "6.2%", 
    isPositive:false,
  },
  {
    iconSrc: India,
    label: "$865k",
    subLabel: "India", 
    trendIcon: ChevronUp,
    percentage: "12.4%",
    isPositive:true,
  },
  {
    iconSrc: Australia,
    label: "$745k", 
    subLabel: "Australia", 
    trendIcon: ChevronDown,
    percentage: "11.9%",
    isPositive:false,

  },
  {
    iconSrc: France,
    label: "$45k",
    subLabel: "France",
    trendIcon: ChevronUp,
    percentage: "16.2%",
    isPositive:true,
  },
  {
    iconSrc: China,
    label: "$12k", 
    subLabel: "China", 
    trendIcon: ChevronUp,
    percentage: "14.8%",
    isPositive:true,
  },
];


const SalesByCountries: React.FC = () => {
  return (
    <div className="">
      <div className="font-medium">
        <h2 className="text-lg font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Sales by Countries
        </h2>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Monthly Sales Overview
        </p>
      </div>

      <div className="flex flex-col ">
        {salesData.map(({ iconSrc, label, subLabel, trendIcon, percentage,isPositive }) => (
          <CardComponent
            key={subLabel}
            iconSrc={iconSrc}
            label={label}
            subLabel={subLabel}
            isPositive={isPositive}
            percentage={percentage} 
            trendIcon={trendIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesByCountries;
