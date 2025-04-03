import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight} from 'react-icons/fi';
import {TbSmartHome, TbStackFront} from 'react-icons/tb';
import { BsLayoutSidebar } from "react-icons/bs";

const Menu: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [isFrontPageOpen, setIsFrontPageOpen] = useState(false);

  const toggleDashboard = () => setIsDashboardOpen(prev => !prev);
  const toggleLayout = () => setIsLayoutOpen(prev => !prev);
  const toggleFrontPage = () => setIsFrontPageOpen(prev => !prev);

  return (
    <nav className="h-full p-5 flex flex-col items-center overflow-hidden">
      <div className="fixed w-[200px] h-[64px] top-0 left-[22px] right-[16px] p-4 bg-white z-10">
        <h1 className="text-[25px] font-sans font-bold text-gray-700 mt-2 pl-5">
          Vuexy
        </h1>
      </div>

      <div className="pt-[80px] w-full overflow-y-auto max-h-screen"> 
        <ul className="space-y-4 w-full pl-3">
          <li>
            <button
              onClick={toggleDashboard}
              className="flex items-center justify-between text-md font-medium cursor-pointer w-full"
            >
              <div className="flex items-center space-x-2">
                <TbSmartHome />
                <span>Dashboards</span>
              </div>
              <span>{isDashboardOpen ? <FiChevronDown /> : <FiChevronRight />}</span>
            </button>
            {isDashboardOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-md font-medium cursor-pointer">Analytics</li>
                <li className="text-md font-medium cursor-pointer">CRM</li>
                <li className="text-md font-medium cursor-pointer">eCommerce</li>
                <li className="text-md font-medium cursor-pointer">Logistics</li>
                <li className="text-md font-medium cursor-pointer">Academy</li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleLayout}
              className="flex items-center justify-between text-md font-medium cursor-pointer w-full"
            >
              <div className="flex items-center space-x-2">
                <BsLayoutSidebar/>
                <span>Layouts</span>
              </div>
              <span>{isLayoutOpen ? <FiChevronDown /> : <FiChevronRight />}</span>
            </button>
            {isLayoutOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-md font-medium cursor-pointer">Collapsed menu</li>
                <li className="text-md font-medium cursor-pointer">Content navbar</li>
                <li className="text-md font-medium cursor-pointer">Content nav+Sidebar</li>
                <li className="text-md font-medium cursor-pointer">Horizontal</li>
                <li className="text-md font-medium cursor-pointer">Without menu</li>
                <li className="text-md font-medium cursor-pointer">Without navbar</li>
                <li className="text-md font-medium cursor-pointer">Fluid</li>
                <li className="text-md font-medium cursor-pointer">Container</li>
                <li className="text-md font-medium cursor-pointer">Blank</li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleFrontPage}
              className="flex items-center justify-between text-md font-medium cursor-pointer w-full"
            >
              <div className="flex items-center space-x-2">
                <TbStackFront/>
                <span>Front Pages</span>
              </div>
              <span>{isFrontPageOpen ? <FiChevronDown /> : <FiChevronRight />}</span>
            </button>
            {isFrontPageOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-md font-medium cursor-pointer">Landing</li>
                <li className="text-md font-medium cursor-pointer">Pricing</li>
                <li className="text-md font-medium cursor-pointer">Payment</li>
                <li className="text-md font-medium cursor-pointer">Checkout</li>
                <li className="text-md font-medium cursor-pointer">Help Center</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
