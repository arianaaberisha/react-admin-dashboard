import React from "react"

import Emails from "../assets/icons/Emails.svg"
import Link from "../assets/icons/Link.svg"
import Mouse from "../assets/icons/Mouse.svg"
import Subscribe from "../assets/icons/Subscribe.svg"
import Alert from "../assets/icons/Alert.svg"
import Ban from "../assets/icons/Ban.svg"


const MonthlyState: React.FC =()=>{
    return (

      <div className="">
      <div className=" p-2 font-publicSans ">
        <h2 className="text-lg font-[500] text-[#2F2B3DE5]">Monthly Campaign State</h2>
        <p className="text-md text-gray-500">8.52k Social Visiters</p>
      </div>
      <div className="flex items-center justify-between py-4">
  <div className="flex items-center">
    <img
      src={Emails}
      alt="Emails"
      className="w-10 h-7 bg-green-200 rounded-md shadow-md mr-2 "
    />
    <p className="text-md text-[#2F2B3DE5] font-publicSans font-[600]">Emails</p>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-gray-600 ">12,346</span>
    <span className="text-green-500 font-semibold">0.3%</span>
  </div>      
    </div>
    <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
            <img
                src={Link}
                alt="Response Time"
                className="w-10 h-7 bg-violet-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold font-publicSans ">Opened</p>
                
              </div>
            </div>
            <div className="flex items-center gap-2">
    <span className="text-gray-500  font-publicSans">8,734</span>
    <span className="text-green-500 font-semibold">2.1%</span>
  </div>   
            </div>
            <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
            <img
                src={Mouse}
                alt="Response Time"
                className="w-10 h-7 bg-orange-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold font-publicSans ">Clicked</p>
                
              </div>
              </div>
              <div className="flex items-center gap-2">
    <span className="text-gray-500  font-publicSans">967</span>
    <span className="text-green-500 font-semibold">1.4%</span>
  </div>   
            </div>
            <div className="flex items-center justify-between py-4">
            <div className="flex items-center"> 
            <img
                src={Subscribe}
                alt="Response Time"
                className="w-10 h-7 bg-violet-200 rounded-md shadow-md mr-2"
              /> 
          <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold font-publicSans ">Subscribe</p>
                
              </div>
              
            </div>
            <div className="flex items-center gap-2">
    <span className="text-gray-500  font-publicSans">345</span>
    <span className="text-green-500 font-semibold">8.5%</span>
  </div>   
            </div>
            <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
            <img
                src={Alert}
                alt="Response Time"
                className="w-10 h-7 bg-gray-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold font-publicSans ">Complaints</p>
                
              </div>
              </div>
              <div className="flex items-center gap-2">
    <span className="text-gray-500  font-publicSans">10</span>
    <span className="text-green-500 font-semibold">1.5%</span>
  </div>   
            </div>
            <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
            <img
                src={Ban}
                alt="Response Time"
                className="w-10 h-7 bg-red-200 rounded-md shadow-md mr-2"
              />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold font-publicSans ">Unsubscribe</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
    <span className="text-gray-500  font-publicSans">86</span>
    <span className="text-green-500 font-semibold">0.8%</span>
  </div>   
            </div>
            
            </div>
            
    );
}
export default MonthlyState;
