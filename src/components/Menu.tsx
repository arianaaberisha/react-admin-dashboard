import React, { useState } from "react";
import Chat from "../assets/icons/Chat.svg";
import Email from "../assets/icons/Email.svg";
import Calendar from "../assets/icons/Calendar.svg";
import Kanban from "../assets/icons/Kanban.svg";
import ShoppingCart from "../assets/icons/ShoppingCart.svg";
import Book from "../assets/icons/Book.svg";
import Truck from "../assets/icons/Truck.svg";
import Dollar from "../assets/icons/Dollar.svg";
import Users from "../assets/icons/Users.svg";
import Settings from "../assets/icons/Settings.svg";
import File from "../assets/icons/File.svg";
import Lock from "../assets/icons/Lock.svg";
import Dots from "../assets/icons/Dots.svg";
import Square from "../assets/icons/Square.svg";
import Home from "../assets/icons/smart-home.svg";
import Layout from "../assets/icons/Layout.svg";
import Layers from "../assets/icons/Layers.svg";
import ChevronDown from "../assets/icons/ChevronDown.svg";
import ChevronRight from "../assets/icons/ChevronRight.svg";
import Cards from "../assets/icons/Cards.svg";
import Interface from "../assets/icons/Interface.svg";
import UI from "../assets/icons/UI.svg";
import Tabler from "../assets/icons/Tabler.svg";
import FormLayout from "../assets/icons/FormLayout.svg";
import Arrows from "../assets/icons/Arrows.svg";
import Form from "../assets/icons/Form.svg";
import Table from "../assets/icons/Table.svg";
import DataTables from "../assets/icons/DataTables.svg";
import Toggle from "../assets/icons/Toggle.svg";

const Menu: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [isFrontPageOpen, setIsFrontPageOpen] = useState(false);

  const toggleDashboard = () => setIsDashboardOpen((prev) => !prev);
  const toggleLayout = () => setIsLayoutOpen((prev) => !prev);
  const toggleFrontPage = () => setIsFrontPageOpen((prev) => !prev);

  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-3 border-b">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-violet-800">Vuexy</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={toggleDashboard}
              className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <img src={Home} alt="Home Icon" className="w-5 h-5" />
                <span className="font-medium text-sm">Dashboards</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">
                  5
                </span>
                {isDashboardOpen ? (
                  <img src={ChevronDown} alt="Chevron Down" className="w-5 h-5" />
                ) : (
                  <img src={ChevronRight} alt="Chevron Right" className="w-5 h-5" />
                )}
              </div>
            </button>
            {isDashboardOpen && (
              <ul className="list-disc ml-8 mt-2 space-y-1">
                {["Analytics", "CRM", "eCommerce", "Logistics", "Academy"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 hover:text-violet-800 cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleLayout}
              className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <img src={Layout} alt="Layout Icon" className="w-5 h-5" />
                <span className="font-medium text-sm">Layouts</span>
              </div>
              {isLayoutOpen ? (
                <img src={ChevronDown} alt="Chevron Down" className="w-5 h-5" />
              ) : (
                <img src={ChevronRight} alt="Chevron Right" className="w-5 h-5" />
              )}
            </button>
            {isLayoutOpen && (
              <ul className="list-disc ml-8 mt-2 space-y-1">
                {[
                  "Collapsed menu",
                  "Content navbar",
                  "Content nav+Sidebar",
                  "Horizontal",
                  "Without menu",
                  "Without navbar",
                  "Fluid",
                  "Container",
                  "Blank",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 hover:text-violet-800 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleFrontPage}
              className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <img src={Layers} alt="Layers Icon" className="w-5 h-5" />
                <span className="font-medium text-sm">Front Pages</span>
              </div>
              {isFrontPageOpen ? (
                <img src={ChevronDown} alt="Chevron Down" className="w-5 h-5" />
              ) : (
                <img src={ChevronRight} alt="Chevron Right" className="w-5 h-5" />
              )}
            </button>
            {isFrontPageOpen && (
              <ul className="list-disc ml-8 mt-2 space-y-1">
                {["Landing", "Pricing", "Payment", "Checkout", "Help Center"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 hover:text-violet-800 cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>

          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Apps & Pages
          </li>
          {[
            { icon: Email, label: "Email" },
            { icon: Chat, label: "Chat" },
            { icon: Calendar, label: "Calendar" },
            { icon: Kanban, label: "Kanban" },
            { icon: ShoppingCart, label: "eCommerce" },
            { icon: Book, label: "Academy" },
            { icon: Truck, label: "Logistics" },
            { icon: Dollar, label: "Invoice" },
            { icon: Users, label: "Users" },
            { icon: Settings, label: "Roles & Permissions" },
            { icon: File, label: "Pages" },
            { icon: Lock, label: "Authentications" },
            { icon: Dots, label: "Wizard Examples" },
            { icon: Square, label: "Modal Examples" },
          ].map(({ icon, label }, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all"
            >
              <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
              <span>{label}</span>
            </li>
          ))}

          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Components
          </li>
          {[
            { icon: Cards, label: "Cards", badge: 5 },
            { icon: Interface, label: "User Interface" },
            { icon: UI, label: "Extended UI" },
            { icon: Tabler, label: "Icons" },
          ].map(({ icon, label, badge }, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all"
            >
              <div className="flex items-center space-x-2">
                <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
                <span>{label}</span>
              </div>
              {badge && (
                <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              )}
            </li>
          ))}

          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            FORMS & TABLES
          </li>
          {[
            { icon: Toggle, label: "Form Elements" },
            { icon: FormLayout, label: "Form Layouts" },
            { icon: Arrows, label: "Form Wizard" },
            { icon: Form, label: "Form Validation" },
            { icon: Table, label: "Tables" },
            { icon: DataTables, label: "Datatables" },
          ].map(({ icon, label }, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all"
            >
              <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
