import React from "react"

import Emails from "./Icons/Emails"
import Globe from "./Icons/Globe"
import Link from "./Icons/Link"
import ExternalLink from "./Icons/ExternalLink"
import Ad from "./Icons/Ad"
import Star from "./Icons/Star"
import CardComponent from "./CardComponent"

interface SourceItems{
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  subLabel: string;
  value:string;
  percentage:string;
  iconColor:string;
  iconBg:string;
  percentageBg:string;
  isPositive:boolean;
}

const visits: SourceItems[]=[
  {
    Icon:Link,
    label:"Direct Source",
    subLabel:"Direct link click",
    value:"1.2k",
    percentage:"+4.2%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#8beebc29",
    isPositive:true,

  },
  {
    Icon:Globe,
    label:"Social Network",
    subLabel:"Social Channels",
    value:"31.5k",
    percentage:"+8.2%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#8beebc29",
    isPositive:true,

  },
  {
    Icon:Emails,
    label:"EmailNewsletter",
    subLabel:"Mail Campaigns",
    value:"893",
    percentage:"+2.4%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#8beebc29",
    isPositive:true,

  },
  {
    Icon:ExternalLink,
    label:"Referrals",
    subLabel:"Impact Radius Visits",
    value:"342",
    percentage:"-0.4%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#D34C4D29",
    isPositive:false,

  },
  {
    Icon:Ad,
    label:"ADVT",
    subLabel:"Google ADVT",
    value:"2.15k",
    percentage:"+9.1%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#8beebc29",
    isPositive:true,

  },
  {
   Icon:Star,
    label:"Other",
    subLabel:"Many Souces",
    value:"12.5k",
    percentage:"+6.2%",
    iconBg:"bg-gray-400",
    iconColor:"stroke-[#2F2B3DB2]",
    percentageBg:"#8beebc29",
    isPositive:true,

  },
]
const SourceVisits: React.FC = () => {
  return (
    <div className="">
      <div className="py-2">
        <h2 className="text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">Source Visits</h2>
        <p className="text-md text-gray-500">38.42k Visitors</p>
      </div>
      <div className="flex flex-col ">
        {visits.map(({ Icon, label, subLabel, value ,percentage,percentageBg,iconColor,iconBg, isPositive }) => (
          <CardComponent
            key={label}
            Icon={Icon}
            label={label}
            subLabel={subLabel}
            percentage={percentage} 
            percentageBg={percentageBg}
            iconColor={iconColor}
            value={value}
            iconBg={iconBg}
            isPositive={isPositive}
          />
        ))}
      </div>
    </div>
  );
}

export default SourceVisits;
