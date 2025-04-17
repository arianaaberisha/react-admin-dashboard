
import React from "react"
import India from "../assets/icons/India.png"
import Australia from "../assets/icons/Australia.png"
import France from "../assets/icons/France.png"
import China from "../assets/icons/China1.png"
import America from "../assets/icons/America.png"
import Brazil from "../assets/icons/Brazil.png"
import ChevronDown from "../assets/icons/ChevronDown2.svg"
import ChevronUp from "../assets/icons/ChevronUp.svg"

const SalesByCountries: React.FC = () => {
    return (
      <div className="">
        <div className="p-2 font-medium">
          <h2 className="text-lg font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">Sales by Countries</h2>
          <p className="text-md text-gray-500 dark:text-gray-400">Monthly Sales Overview</p>
        </div>
        
        <div className="flex flex-col p-1  ">
          {/* United States */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={America} alt="United States" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5] ">$8,567k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">United States</p>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-end ">
            <img src={ChevronUp}  />
            <div className="text-green-500 text-md font-semibold">25.8%</div>
          </div>
          </div>
  
          {/* Brazili */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={Brazil} alt="Brazil" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">$2,415k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">Brazil</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
            <img src={ChevronDown}  />
            <div className="text-red-500 text-md font-semibold">6.2%</div>
          </div>
          </div>
  
          {/* India */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={India} alt="India" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">$865k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">India</p>
              </div>
            </div>
            <div className="flex items-center gap-1 ">
            <img src={ChevronUp}  />
            <div className="text-green-500 text-md font-semibold">12.4%</div>
          </div>
          </div>
  
          {/* Australia */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={Australia} alt="Australia" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">$745k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">Australia</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
            <img src={ChevronDown}  />
            <div className="text-red-500 text-md font-semibold"> 
                11.9%</div>
          </div>
          </div>
  
          {/* Franca */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={France} alt="France" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">$45k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">France</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img src={ChevronUp}  />
            <div className="text-green-500 text-md font-semibold">16.2%</div>
          </div>
  </div>
          {/* Kina */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img src={China} alt="China" className="w-10 h-10 mr-3" />
              <div className="flex flex-col">
                <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">$12k</p>
                <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">China</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <img src={ChevronUp} />
            <div className="text-green-500 text-md font-semibold">14.8%</div>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SalesByCountries;