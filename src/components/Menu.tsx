import React, { useState } from 'react';

  const Menu: React.FC = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isLayoutOpen, setIsLayoutOpen] = useState(false);
    const [isFrontPageOpen, setIsFrontPageOpen] = useState(false);
  
    const toggleDashboard = () => setIsDashboardOpen(prev => !prev);
    const toggleLayout = () => setIsLayoutOpen(prev => !prev);
    const toggleFrontPage = () => setIsFrontPageOpen(prev => !prev);
  
    return (
      <nav className="h-full p-5 flex flex-col items-center overflow-y-auto">
        <h1 className="text-[25px] font-sans font-bold text-violet-800 mb-10 pl-4">
          Vuexy
        </h1>
        <ul className="space-y-4 w-full pl-4">
          <li>
            <button
              onClick={toggleDashboard}
              className="flex items-center justify-between text-lg font-medium cursor-pointer w-full"
            >
              Dashboards
              <span>{isDashboardOpen ? "∨" : ">"}</span>
            </button>
  
            {isDashboardOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-lg font-medium cursor-pointer">Analytics</li>
                <li className="text-lg font-medium cursor-pointer">CRM</li>
                <li className="text-lg font-medium cursor-pointer">eCommerce</li>
                <li className="text-lg font-medium cursor-pointer">Logistics</li>
                <li className="text-lg font-medium cursor-pointer">Academy</li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleLayout}
              className="flex items-center justify-between text-lg font-medium cursor-pointer w-full"
            >
              Layouts
              <span>{isLayoutOpen ? "∨" : ">"}</span>
            </button>
            {isLayoutOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-lg font-medium cursor-pointer">Collapsed menu</li>
                <li className="text-lg font-medium cursor-pointer">Content navbar</li>
                <li className="text-lg font-medium cursor-pointer">Content nav+Sidebar</li>
                <li className="text-lg font-medium cursor-pointer">Horizontal</li>
                <li className="text-lg font-medium cursor-pointer">Without menu</li>
                <li className="text-lg font-medium cursor-pointer">Without navbar</li>
                <li className="text-lg font-medium cursor-pointer">Fluid</li>
                <li className="text-lg font-medium cursor-pointer">Container</li>
                <li className="text-lg font-medium cursor-pointer">Blank</li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleFrontPage}
              className="flex items-center justify-between text-lg font-medium cursor-pointer w-full"
            >
              Front Pages
              <span>{isFrontPageOpen ? "∨" : ">"}</span>
            </button>
            {isFrontPageOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-lg font-medium cursor-pointer">Landing</li>
                <li className="text-lg font-medium cursor-pointer">Pricing</li>
                <li className="text-lg font-medium cursor-pointer">Payment</li>
                <li className="text-lg font-medium cursor-pointer">Checkout</li>
                <li className="text-lg font-medium cursor-pointer">Help Center</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Menu;
  