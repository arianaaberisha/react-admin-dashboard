import React from "react";
import Picture from "../../assets/icons/BestSeller.png";

const BestSeller:React.FC=()=>{
    return(
        
        <div className="flex justify-start gap-16">
        <div className="flex flex-col justify-start p-6 ">
            <div className="text-[#2F2B3DE5] font-[500] text-[18px] dark:text-[#E1DEF5E5]">Congratulations John</div>
            <p className="text-[#2F2B3DB2] font-[400] text-[15px] dark:text-gray-400">Best Seller of the month</p>
            <p className="text-[#7367F0] font-[500] text-[24px] mt-2">$48.9k</p>
            <button className="text-white bg-[#7367F0] w-[117px] h-[38px] cursor-pointer text-[12px] mt-2">View Sales</button>
            </div>
        <div className="flex justify-end items-end ml-10">
            <img src={Picture} className="h-[150px]"></img>
        </div>
        </div>
    )
};
export default BestSeller;