import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import ChevronDown from './Icons/ChevronDown';
import ChevronRight from './Icons/ChevronRight';
import Home from './Icons/Home';
import { Link, useLocation } from "react-router-dom";
import Logo from "./Icons/Logo";


type DropdownListProps = {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  toggle: () => void;
  items: string[];
};

const DropdownList: React.FC<DropdownListProps> = ({
  icon,
  label,
  isOpen,
  toggle,
  items,
}) => {
  const location = useLocation();

  return (
    <div>
      {label && (
        <button
          onClick={toggle}
          className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 focus:outline-none px-4 py-2"
        >
          <div className="flex items-center space-x-2">
            <img src={icon as string} alt={`${label} Icon`} className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 dark:text-white" />
          ) : (
            <ChevronRight className="w-5 h-5 dark:text-white" />
          )}
        </button>
      )}
      <Motion
        style={{
          height: spring(isOpen ? items.length * 48 : 0, { stiffness: 150, damping: 10 }),
          opacity: spring(isOpen ? 1 : 0, { stiffness: 150, damping: 10 }),
        }}
      >
        {({ height, opacity }: { height: number; opacity: number }) => (
          <ul
          style={{ height, opacity, overflow: "hidden" }}
          className="ml-2 mt-2 space-y-2 transition-all duration-150"
        >
          {items.map((itemName, index) => {
            const path = `/${itemName.toLowerCase().replace(/\s+/g, '')}`;
            
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={`px-4 py-1 h-[38px] rounded-md text-[15px] font-[400] text-left flex justify-start items-center ${
                    location.pathname === path
                      ? "bg-[#7367F0] text-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {itemName}
                </Link>
              </li>
            );
          })}
        </ul>
        )}
      </Motion>
    </div>
  );
};

interface MenuProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Menu: React.FC<MenuProps> = ({ isCollapsed, onToggleCollapse }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>("Dashboards");

  const effectiveCollapsed = isCollapsed;

  const handleToggle = (dropdownName: string) => {
    if (effectiveCollapsed) {
      // In the collapsed rail, clicking an icon expands the sidebar
      onToggleCollapse();
      setOpenDropdown(dropdownName);
    } else {
      setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
    }
  };

  const menuItems = [
    { icon: <Home />, label: "Dashboards", items: ["Analytics", "CRM", "eCommerce", "Logistics"] },
  ];

  return (
    <div className="h-screen bg-white flex flex-col transition-all duration-150 dark:bg-[#2F3349]">
      <div className={`flex items-center h-16 px-4 border-b ${effectiveCollapsed ? "justify-center" : "justify-start"} transition-all duration-150`}>
        <div className="flex items-center gap-2">
        <Logo effectiveCollapsed={true} />
          {!effectiveCollapsed && <span className="text-xl font-bold text-gray-800 dark:text-gray-300">Dashboard</span>}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto transition-all duration-150">
        <ul className="py-4 px-2 space-y-1">
          {menuItems.map((item, index) => {
            return (
              <div key={index}>
                <li>
                  <button onClick={() => handleToggle(item.label)} className={`w-full h-[38px] flex bg-transparent items-center px-3 py-2 rounded-md hover:bg-[#80839014] border-none duration-150 dark:bg-[#2F3349] ${effectiveCollapsed ? "justify-center" : "justify-between"}`}>
                    <div className={`flex items-center ${effectiveCollapsed ? "justify-center" : ""}`}>
                      <div className="w-9 h-9 flex items-center justify-center">{item.icon}</div>
                      {!effectiveCollapsed && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>}
                    </div>
                    {!effectiveCollapsed && item.items && (
                      <div className="flex items-center space-x-2">
                        {item.items && (openDropdown === item.label ? <ChevronDown className="w-4 h-4 dark:text-white" /> : <ChevronRight className="w-4 h-4 dark:text-white" />)}
                      </div>
                    )}
                  </button>
                  {item.items && openDropdown === item.label && !effectiveCollapsed && (
                    <DropdownList icon={item.icon} label="" isOpen={true} toggle={() => handleToggle(item.label)} items={item.items} />
                  )}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
