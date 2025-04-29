import React from "react";
import Logistics from "../Icons/Logistics";

const RouteVehicles:React.FC=()=>{
    return(
        <div className="h-full rounded-lg p-4 border-b-2 border-[#7367F061] hover:border-[#7367F0] transition-colors duration-200">
            <div className="flex items-center gap-4">
                <Logistics className="stroke-[#7367F0] bg-[#7367F029] w-[40px] h-[40px] p-2 rounded-lg"/>
                <span className="text-[#2F2B3DE5] dark:text-gray-200 text-2xl font-medium">42</span>
            </div>
            <div className="mt-2">
                <div className="text-[#2F2B3DB2] dark:text-gray-400 text-[15px] font-[400]">On route vehicles</div>
                <div className="flex items-center gap-2">
                    <span className="text-[#2F2B3DE5] text-[15px] font-[500]">+18.2%</span>
                    <span className="text-[#2F2B3D66] text-[13px] font-[400] dark:text-gray-400">than last week</span>
                </div>
            </div>
        </div>
    )
};
export default RouteVehicles;