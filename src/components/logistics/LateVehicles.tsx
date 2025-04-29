import React from "react";
import Clock from "../Icons/Clock";

const LateVehicles:React.FC=()=>{
    return(
        <div className="h-full rounded-lg p-4 border-b-2 border-[#00BAD129] hover:border-[#00BAD1] transition-colors duration-200">
        <div className="flex items-center gap-4">
            <Clock className="stroke-[#00BAD1] bg-[#00BAD129] w-[40px] h-[40px] p-2 rounded-lg"/>
            <span className="text-[#2F2B3DE5] dark:text-gray-200 text-2xl font-medium">13</span>
        </div>
        <div className="mt-2">
            <div className="text-[#2F2B3DB2] dark:text-gray-400 text-[15px] font-[400]">Late vehicles</div>
            <div className="flex items-center gap-2">
                <span className="text-[#2F2B3DE5] text-[15px] font-[500]">-2.5%</span>
                <span className="text-[#2F2B3D66] text-[13px] font-[400] dark:text-gray-400">than last week</span>
            </div>
        </div>
    </div>
)
};
export default LateVehicles;