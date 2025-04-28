import React from "react";

import Emails from "./Icons/Emails"
import Link from "./Icons/Link";
import Mouse from "./Icons/Mouse";
import Profile from "./Icons/Profile";
import Alert from "./Icons/Alert";
import Ban from "./Icons/Ban";
import CardComponent from "./CardComponent";

interface MonthlyStateItem {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  percentage: string;
  iconBg: string;
  iconColor: string;
  isPositive:boolean;
  

}

const monthlyStates: MonthlyStateItem[] = [
  {
    Icon: Emails,
    label: "Emails",
    value: "12,346",
    percentage: "0.3%",
    iconBg: "bg-green-100",
    iconColor:"stroke-[#28C76F]",
    isPositive:true,
  },
  {
    Icon: Link,
    label: "Opened",
    value: "8,734",
    percentage: "2.1%",
    iconBg: "bg-violet-200",
    iconColor:"stroke-[#75358D]",
    isPositive:true,
  },
  {
    Icon: Mouse,
    label: "Clicked",
    value: "967",
    percentage: "1.4%",
    iconBg: "bg-orange-200",
    iconColor:"stroke-[#FF9F43]",
    isPositive:false,
  },
  {
    Icon: Profile,
    label: "Subscribe",
    value: "345",
    percentage: "8.5%",
    iconBg: "bg-violet-200",
    iconColor:"stroke-[#7367F0]",
    isPositive:true,
  },
  {
    Icon: Alert,
    label: "Complaints",
    value: "10",
    percentage: "1.5%",
    iconBg: "bg-gray-200",
    iconColor:"stroke-[#808390]",
    isPositive:false,
  },
  {
   Icon: Ban,
    label: "Unsubscribe",
    value: "86",
    percentage: "0.8%",
    iconBg: "bg-red-200",
    iconColor:"stroke-[#FF4C51]",
    isPositive:true,
  },
];


const MonthlyState: React.FC = () => {
  return (
    <div>
      <div className="font-medium">
        <h2 className="text-lg font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Monthly Campaign State
        </h2>
        <p className="text-md text-gray-500 dark:text-gray-400">
          8.52k Social Visitors
        </p>
      </div>
      {monthlyStates.map(({ Icon, label, value, percentage, iconBg, iconColor, isPositive }) => (
        <CardComponent
          key={label}
          Icon={Icon}
          label={label}
          value={value}
          percentage={percentage}
          iconBg={iconBg}
          iconColor={iconColor}
          isPositive={isPositive}
         
          
        />
      ))}
    </div>
    
  );
};
export default MonthlyState;
