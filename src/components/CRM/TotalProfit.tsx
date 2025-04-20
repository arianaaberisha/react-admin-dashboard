import React from "react";
import CreditCard from '../Icons/CreditCard'

const TotalProfit:React.FC=()=>{

        return (
          <div className="">
      <div className=" p-6 ">
        <CreditCard className=" text-red-500 h-[44px] w-[44px] bg-red-100 rounded-md shadow-md mr-2 "/>
        <div className="">
        <h3 className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5] mt-4">Total Profit</h3>
        <p className="text-[15px] font-[400] text-gray-600 pt-1">Last Week</p>
        <div className="pt-1">
          <span className="text-[#2F2B3DE5] text-[15px] font-[400] dark:text-[#E1DEF5E5] ">1.28k</span>
          <span className="mt-2 w-[60px] h-[24px] flex items-col justify-center bg-red-100 rounded-md text-red-500 font-semibold">
            -12.2%
          </span>
          </div>
      </div>
      </div>
      </div>
                
                
        );
    }
   
    
export default TotalProfit;