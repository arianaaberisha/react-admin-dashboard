import React from "react";

type CardComponentProps = {
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title?: string;
    label: React.ReactNode;
    subLabel?: React.ReactNode;
    description?: string;
    time?: string;
    value?:  React.ReactNode;
    iconSrc?: string;
    trendIcon?:string;
    alt?: string;
    iconColor?: string;
    iconBg?: string;
    valueClassName?: string; 
    percentage?:string;
    percentageColor?:string;
    isPositive?:boolean;
    percentageBg?:string;
    extraContent?:React.ReactNode
};

const CardComponent: React.FC<CardComponentProps> = ({
    Icon,
    iconSrc,
    title,
    label,
    subLabel,
    value,
    alt,
    trendIcon,
    iconColor,
    iconBg,
    valueClassName,
    percentage,
    percentageColor,
    isPositive,
    percentageBg,
}) => {

    const percentageColorToShow =
        percentageColor || (isPositive ? "text-green-500" : "text-red-500");

    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
                {Icon ? (
                    <Icon
                        className={`w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-md ${iconBg} ${iconColor}`}
                    />
                ) : iconSrc ? (
                    <img
                        src={iconSrc}
                        alt={alt || "icon"}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-md" 
                    />
                ) : null}
                <div>
                    <div className="text-sm sm:text-base font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
                        {label || title}
                    </div>
                    {subLabel && (
                        <div className="text-xs sm:text-sm font-normal text-[#2F2B3DB2] dark:text-gray-400">
                            {subLabel}
                        </div>
                    )}
                </div>
            </div>
            {value || percentage ? (
              <div className="flex items-center gap-1 sm:gap-2">
                {value && (
                  <span className={`font-medium text-sm sm:text-base ${valueClassName || "text-gray-500"}`}>
                    {value}
                  </span>
                )}
                {percentage && (
                  <div className="flex items-center gap-1 sm:gap-2">
                    {trendIcon && <img src={trendIcon} alt="trend icon" className="w-4 h-4 sm:w-5 sm:h-5" />}
                    <p className={`text-xs sm:text-sm font-semibold ${percentageColorToShow}`}
                    style={{
                        backgroundColor: percentageBg || 'transparent', 
                        padding: '0.1rem 0.3rem', 
                        borderRadius: '4px'  
                    }}>
                      {percentage}
                      
                    </p>
                  </div>
                )}
              </div>
            ) : null}

        </div>
    );
};

export default CardComponent;
