/*import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import File from './Icons/File'
import Lock from './Icons/Lock';
import Dots from './Icons/Dots';
import Square from './Icons/Square';
import ChevronDown from "../assets/icons/ChevronDown.svg";
import ChevronRight from "../assets/icons/ChevronRight.svg";
import Cards from './Icons/Cards';
import Interface from './Icons/Interface';
import UI from './Icons/UI';
import Tabler from './Icons/Tabler';
import FormLayout from './Icons/FormLayout';
import Arrows from './Icons/Arrows';
import Form from './Icons/Form';
import Table from './Icons/Table';
import DataTables from './Icons/DataTables';
import Toggle from './Icons/Toggle';
import Charts from './Icons/Charts';
import Map from './Icons/Map';
import Level from './Icons/Level';
import Lifebuoy from './Icons/Lifebuoy';
import Document from './Icons/Document';
import Icon from './Icons/Icon'
import Home from './Icons/Home'
import Layout from './Icons/Layout'
import Layers from './Icons/Layers'
import Chat from './Icons/Chat'
import Academy from './Icons/Academy'
import Logistics from './Icons/Logistics'
import Settings from './Icons/Settings'
import Dollar from './Icons/Dollar'
import Kanban from './Icons/Kanban'
import Users from './Icons/Users'
import ECommerce from './Icons/ECommerce'
import Calendar from './Icons/Calendar'


type DropdownListProps = {
  icon: string;
  label: string;
  isOpen: boolean;
  toggle: () => void;
  items: string[];
  badge?: number;
};

const DropdownList: React.FC<DropdownListProps> = ({
  icon,
  label,
  isOpen,
  toggle,
  items,
  badge,
}) => (
  <li>
    {label && (
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-500 hover:text-violet-800 focus:outline-none px-4 py-2"
      >
        <div className="flex items-center space-x-2">
          <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
          <span className="text-sm font-medium">{label}</span>
          {badge && (
            <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <img
          src={isOpen ? ChevronDown : ChevronRight}
          alt="Chevron"
          className="w-5 h-5 "
        />
      </button>
    )}
    <Motion
      style={{
        height: spring(isOpen ? items.length * 32 : 0, { stiffness: 150, damping: 10 }),
        opacity: spring(isOpen ? 1 : 0, { stiffness: 150, damping: 10 }),
      }}
    >
      {({ height, opacity }: { height: number; opacity: number }) => (
        <ul
          style={{ height, opacity, overflow: "hidden" }}
          className="list-disc ml-8 mt-2 space-y-1 transition-all duration-150"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 hover:text-violet-800 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Motion>
  </li>
);

interface MenuProps {
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
  showExpandButton?: boolean;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  items?: string[];
}

const Menu: React.FC<MenuProps> = ({ isCollapsed, onToggleCollapse, showExpandButton }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuPinned, setMenuPinned] = useState(false);

  const effectiveCollapsed = isCollapsed && !menuPinned;

  const handleToggle = (dropdownName: string) => {
    if (!effectiveCollapsed) {
      setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
    }
  };

  const handleToggleButtonClick = () => {
    if (!menuPinned) {
      setMenuPinned(true);
      onToggleCollapse(false);
    } else {
      setMenuPinned(false);
      onToggleCollapse(true); 
    }
  };

  const menuItems = [
    { icon: <Home />, label: "Dashboards", badge: 5, items: ["Analytics", "CRM", "eCommerce", "Logistics", "Academy"] },
    { icon: <Layout />, label: "Layouts", items: ["Collapsed menu", "Content navbar", "Content nav + Sidebar", "Horizontal", "Without menu", "Without navbar", "Fluid", "Container", "Blank"] },
    { icon: <Layers />, label: "Front Pages", items: ["Landing", "Pricing", "Payment", "Checkout", "Help Center"] },
    { icon: <Icon />, label: "Email" },
    { icon: <Chat />, label: "Chat" },
    { icon: <Calendar/>, label: "Calendar" },
    { icon: <Kanban />, label: "Kanban" },
    { icon: <ECommerce/>, label: "eCommerce", items: ["Dashboard", "Products", "Order", "Customer", "Manage Reviews", "Referrals", "Settings"] },
    { icon: <Academy />, label: "Academy", items: ["Dashboard", "My Course", "Course Details"] },
    { icon: <Logistics />, label: "Logistics", items: ["Dashboard", "Fleet"] },
    { icon: <Dollar />, label: "Invoice", items: ["List", "Preview", "Edit", "Add"] },
    { icon: <Users />, label: "Users", items: ["List", "View"] },
    { icon: <Settings />, label: "Roles & Permissions", items: ["Roles", "Permissions"] },
    { icon: <File />, label: "Pages", items: ["User Profile", "Account Settings", "FAQ", "Pricing", "Misc"] },
    { icon: <Lock />, label: "Authentication", items: ["Login", "Register", "Verify Email", "Reset Password", "Forgot Password"] },
    { icon: <Dots />, label: "Wizard Examples", items: ["Checkout", "Property Listing", "Create Deal"] },
    { icon: <Square />, label: "Modal Examples" },
    { icon: <Cards />, label: "Cards", badge: 5, items: ["Basic", "Advanced", "Statistics", "Analytics", "Actions"] },
    { icon: <Interface />, label: "User Interface", items: ["Accordion", "Alerts", "Badges", "Buttons", "Carousel"] },
    { icon: <UI />, label: "Extended UI", items: ["Avatar", "BlockUI", "Drag & Drop", "Media Player", "Perfect Scrollbar"] },
    { icon: <Tabler />, label: "Icons", items: ["Tabler", "Font Awesome"] },
    { icon: <Toggle />, label: "Form Elements", items: ["Basic Inputs", "Input Groups", "Custom Options", "Editors"] },
    { icon: <FormLayout />, label: "Form Layouts", items: ["Vertical Form", "Horizontal Form", "Sticky Actions"] },
    { icon: <Arrows/>, label: "Form Wizard", items: ["Numbered", "Icons"] },
    { icon: <Form/>, label: "Form Validation" },
    { icon: <Table />, label: "Tables" },
    { icon: <DataTables/>, label: "Datatables", items: ["Basic", "Advanced", "Extensions"] },
    { icon: <Charts/>, label: "Charts", items: ["Apex Charts", "ChartJS"] },
    { icon: <Map/>, label: "Leaflet Maps" },
    { icon: <Level/>, label: "Multi Level", items: ["Level 2.1", "Level 2.2"] },
    { icon: <Lifebuoy />, label: "Support" },
    { icon: <Document/>, label: "Documentation" }
  ];

  const sections = [
    { title: "APPS & PAGE", startIndex: 3, endIndex: 16 },
    { title: "COMPONENTS", startIndex: 17, endIndex: 21 },
    { title: "FORMS & TABLES", startIndex: 22, endIndex: 27 },
    { title: "CHARTS & MAPS", startIndex: 28, endIndex: 29 },
    { title: "MISC", startIndex: 30, endIndex: 32 }
  ];

  return (
    
    <div className="h-screen bg-white flex flex-col transition-all duration-150 dark:bg-[#2F3349]">
      <div className={`flex items-center h-16 px-4 border-b ${effectiveCollapsed ? "justify-center" : "justify-between"} transition-all duration-150`}>
        <div className="flex items-center">
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={effectiveCollapsed ? "mx-auto" : "mr-2"}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              fill="#7367F0"
            />
            <path
              opacity="0.06"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
              fill="#161616"
            />
            <path
              opacity="0.06"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
              fill="#161616"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              fill="#7367F0"
            />
          </svg>
          {!effectiveCollapsed && <span className="text-xl font-bold text-gray-800 dark:text-gray-300">Vuexy</span>}
        </div>
        {(!effectiveCollapsed || showExpandButton) && (
          <button
            onClick={handleToggleButtonClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 dark:bg-gray-800 "
            title={effectiveCollapsed ? "Pin menu open" : "Collapse menu"}
          >
            <div className="w-6 h-6 rounded-full border-2 border-gray-700 flex items-center justify-center dark:border-gray-500">
              <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-gray-500"></div>
            </div>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto transition-all duration-150 ">
        <ul className="py-4 px-2 space-y-1">
          {menuItems.map((item, index) => {
            const section = sections.find((s) => s.startIndex === index);
            return (
              <React.Fragment key={index}>
                {section && (
                  <li className={`mt-4 mb-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ${effectiveCollapsed ? "text-center" : ""}`}>
                    {!effectiveCollapsed && section.title}
                  </li>
                )}
                <li>
                  <button
                    onClick={() => handleToggle(item.label)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg hover:bg-violet-500 transition-colors duration-150 dark:bg-[#2F3349] ${
                      effectiveCollapsed ? "justify-center" : "justify-between"
                    }`}
                  >
                    <div className={`flex items-center ${effectiveCollapsed ? "justify-center" : ""}`}>
                      <div className="w-9 h-9 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {!effectiveCollapsed && (
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      )}
                    </div>
                    {!effectiveCollapsed && (item.badge || item.items) && (
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full dark:text-gray-500">
                            {item.badge}
                          </span>
                        )}
                        {item.items && (
                          <img
                            src={openDropdown === item.label ? ChevronDown : ChevronRight}
                            alt="toggle"
                            className="w-4 h-4"
                          />
                        )}
                      </div>
                    )}
                  </button>
                  
                  {item.items && openDropdown === item.label && (
                    <DropdownList
                      icon={item.icon}
                      label={""}  
                      isOpen={true}
                      toggle={() => handleToggle(item.label)}
                      items={item.items}
                      badge={item.badge}
                    />
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
*/


import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import File from './Icons/File'
import Lock from './Icons/Lock';
import Dots from './Icons/Dots';
import Square from './Icons/Square';
import ChevronDown from './Icons/ChevronDown';
import ChevronRight from './Icons/ChevronRight';
import Cards from './Icons/Cards';
import Interface from './Icons/Interface';
import UI from './Icons/UI';
import Tabler from './Icons/Tabler';
import FormLayout from './Icons/FormLayout';
import Arrows from './Icons/Arrows';
import Form from './Icons/Form';
import Table from './Icons/Table';
import DataTables from './Icons/DataTables';
import Toggle from './Icons/Toggle';
import Charts from './Icons/Charts';
import Map from './Icons/Map';
import Level from './Icons/Level';
import Lifebuoy from './Icons/Lifebuoy';
import Document from './Icons/Document';
import Icon from './Icons/Icon'
import Home from './Icons/Home'
import Layout from './Icons/Layout'
import Layers from './Icons/Layers'
import Chat from './Icons/Chat'
import Academy from './Icons/Academy'
import Logistics from './Icons/Logistics'
import Settings from './Icons/Settings'
import Dollar from './Icons/Dollar'
import Kanban from './Icons/Kanban'
import Users from './Icons/Users'
import ECommerce from './Icons/ECommerce'
import Calendar from './Icons/Calendar'

type DropdownListProps = {
  icon: string;
  label: string;
  isOpen: boolean;
  toggle: () => void;
  items: string[];
  badge?: number;
};

const DropdownList: React.FC<DropdownListProps> = ({
  icon,
  label,
  isOpen,
  toggle,
  items,
  badge,
}) => (
  <li>
    {label && (
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-500 hover:text-violet-800 focus:outline-none px-4 py-2"
      >
        <div className="flex items-center space-x-2">
          <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
          <span className="text-sm font-medium">{label}</span>
          {badge && (
            <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        
        {isOpen
          ? <ChevronDown className="w-5 h-5 dark:text-white" />
          : <ChevronRight className="w-5 h-5 dark:text-white" />
        }
      </button>
    )}
    <Motion
      style={{
        height: spring(isOpen ? items.length * 32 : 0, { stiffness: 150, damping: 10 }),
        opacity: spring(isOpen ? 1 : 0, { stiffness: 150, damping: 10 }),
      }}
    >
      {({ height, opacity }: { height: number; opacity: number }) => (
        <ul
          style={{ height, opacity, overflow: "hidden" }}
          className="list-disc ml-8 mt-2 space-y-1 transition-all duration-150"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 dark:text-[#E1DEF5E5] hover:text-violet-800 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Motion>
  </li>
);

interface MenuProps {
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
  showExpandButton?: boolean;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  items?: string[];
}

const Menu: React.FC<MenuProps> = ({ isCollapsed, onToggleCollapse, showExpandButton }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuPinned, setMenuPinned] = useState(false);

  const effectiveCollapsed = isCollapsed && !menuPinned;

  const handleToggle = (dropdownName: string) => {
    if (!effectiveCollapsed) {
      setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
    }
  };

  const handleToggleButtonClick = () => {
    if (!menuPinned) {
      setMenuPinned(true);
      onToggleCollapse(false);
    } else {
      setMenuPinned(false);
      onToggleCollapse(true);
    }
  };

  const menuItems = [
    { icon: <Home />, label: "Dashboards", badge: 5, items: ["Analytics", "CRM", "eCommerce", "Logistics", "Academy"] },
    { icon: <Layout />, label: "Layouts", items: ["Collapsed menu", "Content navbar", "Content nav + Sidebar", "Horizontal", "Without menu", "Without navbar", "Fluid", "Container", "Blank"] },
    { icon: <Layers />, label: "Front Pages", items: ["Landing", "Pricing", "Payment", "Checkout", "Help Center"] },
    { icon: <Icon />, label: "Email" },
    { icon: <Chat />, label: "Chat" },
    { icon: <Calendar/>, label: "Calendar" },
    { icon: <Kanban />, label: "Kanban" },
    { icon: <ECommerce/>, label: "eCommerce", items: ["Dashboard", "Products", "Order", "Customer", "Manage Reviews", "Referrals", "Settings"] },
    { icon: <Academy />, label: "Academy", items: ["Dashboard", "My Course", "Course Details"] },
    { icon: <Logistics />, label: "Logistics", items: ["Dashboard", "Fleet"] },
    { icon: <Dollar />, label: "Invoice", items: ["List", "Preview", "Edit", "Add"] },
    { icon: <Users />, label: "Users", items: ["List", "View"] },
    { icon: <Settings />, label: "Roles & Permissions", items: ["Roles", "Permissions"] },
    { icon: <File />, label: "Pages", items: ["User Profile", "Account Settings", "FAQ", "Pricing", "Misc"] },
    { icon: <Lock />, label: "Authentication", items: ["Login", "Register", "Verify Email", "Reset Password", "Forgot Password"] },
    { icon: <Dots />, label: "Wizard Examples", items: ["Checkout", "Property Listing", "Create Deal"] },
    { icon: <Square />, label: "Modal Examples" },
    { icon: <Cards />, label: "Cards", badge: 5, items: ["Basic", "Advanced", "Statistics", "Analytics", "Actions"] },
    { icon: <Interface />, label: "User Interface", items: ["Accordion", "Alerts", "Badges", "Buttons", "Carousel"] },
    { icon: <UI />, label: "Extended UI", items: ["Avatar", "BlockUI", "Drag & Drop", "Media Player", "Perfect Scrollbar"] },
    { icon: <Tabler />, label: "Icons", items: ["Tabler", "Font Awesome"] },
    { icon: <Toggle />, label: "Form Elements", items: ["Basic Inputs", "Input Groups", "Custom Options", "Editors"] },
    { icon: <FormLayout />, label: "Form Layouts", items: ["Vertical Form", "Horizontal Form", "Sticky Actions"] },
    { icon: <Arrows/>, label: "Form Wizard", items: ["Numbered", "Icons"] },
    { icon: <Form/>, label: "Form Validation" },
    { icon: <Table />, label: "Tables" },
    { icon: <DataTables/>, label: "Datatables", items: ["Basic", "Advanced", "Extensions"] },
    { icon: <Charts/>, label: "Charts", items: ["Apex Charts", "ChartJS"] },
    { icon: <Map/>, label: "Leaflet Maps" },
    { icon: <Level/>, label: "Multi Level", items: ["Level 2.1", "Level 2.2"] },
    { icon: <Lifebuoy />, label: "Support" },
    { icon: <Document/>, label: "Documentation" }
  ];

  const sections = [
    { title: "APPS & PAGE", startIndex: 3, endIndex: 16 },
    { title: "COMPONENTS", startIndex: 17, endIndex: 21 },
    { title: "FORMS & TABLES", startIndex: 22, endIndex: 27 },
    { title: "CHARTS & MAPS", startIndex: 28, endIndex: 29 },
    { title: "MISC", startIndex: 30, endIndex: 32 }
  ];

  return (
    <div className="h-screen bg-white flex flex-col transition-all duration-150 dark:bg-[#2F3349]">
      <div className={`flex items-center h-16 px-4 border-b ${effectiveCollapsed ? "justify-center" : "justify-between"} transition-all duration-150`}>
        <div className="flex items-center">
          

        <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={effectiveCollapsed ? "mx-auto" : "mr-2"}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              fill="#7367F0"
            />
            <path
              opacity="0.06"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
              fill="#161616"
            />
            <path
              opacity="0.06"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
              fill="#161616"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              fill="#7367F0"
            />
          </svg>
          {!effectiveCollapsed && <span className="text-xl font-bold text-gray-800 dark:text-gray-300">Vuexy</span>}
        </div>
        {(!effectiveCollapsed || showExpandButton) && (
          <button onClick={handleToggleButtonClick} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 dark:bg-gray-800 " title={effectiveCollapsed ? "Pin menu open" : "Collapse menu"}>
            <div className="w-6 h-6 rounded-full border-2 border-gray-700 flex items-center justify-center dark:border-gray-500">
              <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-gray-500"></div>
            </div>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto transition-all duration-150 ">
        <ul className="py-4 px-2 space-y-1">
          {menuItems.map((item, index) => {
            const section = sections.find((s) => s.startIndex === index);
            return (
              <React.Fragment key={index}>
                {section && (
                  <li className={`mt-4 mb-1 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider ${effectiveCollapsed ? "text-center" : ""}`}>
                    {!effectiveCollapsed && section.title}
                  </li>
                )}
                <li>
                  <button
                    onClick={() => handleToggle(item.label)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg hover:bg-violet-500 transition-colors duration-150 dark:bg-[#2F3349] ${effectiveCollapsed ? "justify-center" : "justify-between"}`}
                  >
                    <div className={`flex items-center ${effectiveCollapsed ? "justify-center" : ""}`}>
                      <div className="w-9 h-9 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {!effectiveCollapsed && (
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      )}
                    </div>
                    {!effectiveCollapsed && (item.badge || item.items) && (
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full dark:text-white">
                            {item.badge}
                          </span>
                        )}
                        {item.items && (
                          openDropdown === item.label
                            ? <ChevronDown className="w-4 h-4 dark:text-white" />
                            : <ChevronRight className="w-4 h-4 dark:text-white" />
                        )}
                      </div>
                    )}
                  </button>

                  {item.items && openDropdown === item.label && (
                    <DropdownList
                      icon={item.icon}
                      label={""}
                      isOpen={true}
                      toggle={() => handleToggle(item.label)}
                      items={item.items}
                      badge={item.badge}
                    />
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
