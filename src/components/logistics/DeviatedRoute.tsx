import React from "react";
import GitFork from "../Icons/GitFork";

const DeviatedRoute:React.FC=()=>{
    return(
        <div className="h-full rounded-lg p-4 border-b-2 border-[#FF4C513D] hover:border-[#FF4C51] transition-colors duration-200">
        <div className="flex items-center gap-4">
            <GitFork className="stroke-[#FF4C51] bg-[#FF4C513D] w-[40px] h-[40px] p-2 rounded-lg"/>
            <span className="text-[#2F2B3DE5] dark:text-gray-200 text-2xl font-medium">27</span>
        </div>
        <div className="mt-2">
            <div className="text-[#2F2B3DB2] dark:text-gray-400 text-[15px] font-[400]">Deviated from route</div>
            <div className="flex items-center gap-2">
                <span className="text-[#2F2B3DE5] text-[15px] font-[500]">+4.3%</span>
                <span className="text-[#2F2B3D66] text-[13px] font-[400] dark:text-gray-400">than last week</span>
            </div>
        </div>
    </div>
)
};
export default DeviatedRoute;