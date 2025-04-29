import React from "react";
import Alert from "../Icons/Alert";

const ErrorVehicles:React.FC=()=>{
    return(
            <div className="h-full rounded-lg p-4 border-b-2 border-[#FF9F4352] hover:border-[#FF9F43] transition-colors duration-200">
                <div className="flex items-center gap-4">
                    <Alert className="stroke-[#FF9F43] bg-[#FF9F4329] w-[40px] h-[40px] p-2 rounded-lg"/>
                    <span className="text-[#2F2B3DE5] dark:text-gray-200 text-2xl font-medium">8</span>
                </div>
                <div className="mt-2">
                    <div className="text-[#2F2B3DB2] dark:text-gray-400 text-[15px] font-[400]">Vehicles with errors</div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#2F2B3DE5] text-[15px] font-[500]">-8.7%</span>
                        <span className="text-[#2F2B3D66] text-[13px] font-[400] dark:text-gray-400">than last week</span>
                    </div>
                </div>
            </div>
        )
    };
export default ErrorVehicles;