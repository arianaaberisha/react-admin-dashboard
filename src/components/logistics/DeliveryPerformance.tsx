import React from "react";
import CardComponent from "../CardComponent";
import Package from "../Icons/Package";
import Logistics from "../Icons/Logistics";
import CheckCircle from "../Icons/CheckCircle"

interface Delivery {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    percentage: string;
    isPositive: boolean;
    iconBg: string;
    iconColor: string;
    value: string;
}

const deliveryData: Delivery[] = [{
    Icon: Package,
    label: "Package in transit",
    percentage: "+25.8%",
    isPositive: true,
    iconBg: "bg-[#7367F029]",
    iconColor: "stroke-[#7367F0]",
    value: "10k"
},
{
   Icon: Logistics,
    label: "Packages out for delivery",
    percentage: "4.3%",
    isPositive: true,
    iconBg: "bg-[#00BAD129]",
    iconColor: "stroke-[#00BAD1]",
    value: "5k"
},
{
        Icon: CheckCircle,
        label: "Packages delivered",
        percentage: "12.5%",
        isPositive: false,
        iconBg: "bg-green-100",
        iconColor: "stroke-[#28C76F]",
        value: "15k"
    }
];

const DeliveryPerformance: React.FC = () => {
    return (
        <div className="p-3 sm:p-4 md:p-6">
            <div className="mb-3 sm:mb-4 md:mb-1">
                <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
                    Delivery Performance
                </h2>
                <p className="text-sm sm:text-base font-normal text-[#2F2B3D8C] dark:text-gray-400">
                    12% increase in this month
                </p>
            </div>
            <div className="space-y-2 sm:space-y-1">
                {deliveryData.map(
                    ({ Icon, label, value, iconBg, iconColor, percentage, isPositive }) => {
                        const percentageColorClass = isPositive ? 'text-[#28C76F]' : 'text-red-500';

                        return (
                            <CardComponent
                                key={label}
                                Icon={Icon}
                                label={label}
                                subLabel={<span className={`text-sm ${percentageColorClass}`}>{percentage}</span>}
                                value={<span className="font-medium text-sm sm:text-base text-[#2F2B3DE5]">{value}</span>}
                                iconColor={iconColor}
                                iconBg={iconBg}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default DeliveryPerformance;