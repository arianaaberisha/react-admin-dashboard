import React from "react";
import Picture from "../../assets/icons/BestSeller.png";

const BestSeller:React.FC=()=>{
    return(
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-3 md:p-5">
            <div className="flex flex-col justify-start mb-4 sm:mb-0">
                <div className="text-[#2F2B3DE5] font-[500] text-base sm:text-lg dark:text-[#E1DEF5E5]">Congratulations John</div>
                <p className="text-[#2F2B3DB2] font-[400] text-sm sm:text-base dark:text-gray-400">Best Seller of the month</p>
                <p className="text-[#7367F0] font-[500] text-xl sm:text-2xl mt-2">$48.9k</p>
            </div>
            <div className="flex justify-center items-center">
                <img src={Picture} alt="Best Seller" className=" relative sm:block hidden  h-[100px] sm:h-[120px] md:h-[150px] object-contain" />
            </div>
        </div>
    )
};
export default BestSeller;