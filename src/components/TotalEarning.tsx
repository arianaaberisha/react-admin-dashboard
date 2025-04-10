import React from "react";
import ChevronUp from "../assets/icons/ChevronUp.svg"

const TotalEarning: React.FC=()=>{
    return (
       
        <div className="p-2 font-publicSans">
          <h2 className="text-lg font-[500] text-[#2F2B3DE5]">Total Earning</h2>
          <div className="flex items-center gap-2 py-3">
    <span className="text-[#2F2B3DE5] text-5xl  font-publicSans">87%</span>
    <img src={ChevronUp} />
            <div className="text-green-500 text-lg font-semibold">25.8%</div>
  </div>   
        </div>
    );
};
export default TotalEarning;