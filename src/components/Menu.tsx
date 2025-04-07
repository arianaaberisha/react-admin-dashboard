import React, { useState } from "react";
import { Motion, spring } from "react-motion";
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
import Charts from "../assets/icons/Charts.svg";
import Map from "../assets/icons/Map.svg";
import Level from "../assets/icons/Level.svg";
import Lifebuoy from "../assets/icons/Lifebuoy.svg";
import Document from "../assets/icons/Document.svg";

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
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none px-4 py-2"
    >
      <div className="flex items-center space-x-2">
        <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
        <span className="font-medium text-sm">{label}</span>
        {badge && (
          <span className="text-xs text-white bg-violet-500 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <img
        src={isOpen ? ChevronDown : ChevronRight}
        alt="Chevron"
        className="w-5 h-5"
      />
    </button>
    <Motion
      style={{
        height: spring(isOpen ? items.length * 32 : 0),
        opacity: spring(isOpen ? 1 : 0),
      }}
    >
      {({ height, opacity }: { height: number; opacity: number }) => (
        <ul
          style={{ height, opacity, overflow: "hidden" }}
          className="list-disc ml-8 mt-2 space-y-1"
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

const Menu: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (dropdownName: string) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-3 border-b">
        <div className="flex items-center space-x-">
          <h1 className="text-xl font-bold text-violet-800">
            <svg
              width="32"
              height="22"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                fill="currentColor"
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
                fill="currentColor"
              />
            </svg>
            Vuexy
          </h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleToggle("dashboard")}
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
                <img
                  src={openDropdown === "dashboard" ? ChevronDown : ChevronRight}
                  alt="Chevron"
                  className="w-5 h-5"
                />
              </div>
            </button>
            <Motion
              style={{
                height: spring(openDropdown === "dashboard" ? 5 * 32 : 0),
                opacity: spring(openDropdown === "dashboard" ? 1 : 0),
              }}
            >
              {({ height, opacity }: { height: number; opacity: number }) => (
                <ul
                  style={{ height, opacity, overflow: "hidden" }}
                  className="list-disc ml-8 mt-2 space-y-1"
                >
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
            </Motion>
          </li>

          <li>
            <button
              onClick={() => handleToggle("layout")}
              className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <img src={Layout} alt="Layout Icon" className="w-5 h-5" />
                <span className="font-medium text-sm">Layouts</span>
              </div>
              <img
                src={openDropdown === "layout" ? ChevronDown : ChevronRight}
                alt="Chevron"
                className="w-5 h-5"
              />
            </button>
            <Motion
              style={{
                height: spring(openDropdown === "layout" ? 9 * 32 : 0),
                opacity: spring(openDropdown === "layout" ? 1 : 0),
              }}
            >
              {({ height, opacity }: { height: number; opacity: number }) => (
                <ul
                  style={{ height, opacity, overflow: "hidden" }}
                  className="list-disc ml-8 mt-2 space-y-1"
                >
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
            </Motion>
          </li>

          <li>
            <button
              onClick={() => handleToggle("frontpage")}
              className="flex items-center justify-between w-full text-gray-700 hover:text-violet-800 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <img src={Layers} alt="Layers Icon" className="w-5 h-5" />
                <span className="font-medium text-sm">Front Pages</span>
              </div>
              <img
                src={openDropdown === "frontpage" ? ChevronDown : ChevronRight}
                alt="Chevron"
                className="w-5 h-5"
              />
            </button>
            <Motion
              style={{
                height: spring(openDropdown === "frontpage" ? 5 * 32 : 0),
                opacity: spring(openDropdown === "frontpage" ? 1 : 0),
              }}
            >
              {({ height, opacity }: { height: number; opacity: number }) => (
                <ul
                  style={{ height, opacity, overflow: "hidden" }}
                  className="list-disc ml-8 mt-2 space-y-1"
                >
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
            </Motion>
          </li>

          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Apps & Pages
          </li>

          {[
            { icon: Email, label: "Email" },
            { icon: Chat, label: "Chat" },
            { icon: Calendar, label: "Calendar" },
            { icon: Kanban, label: "Kanban" },
          ].map(({ icon, label }, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all"
            >
              <img src={icon} alt={`${label} Icon`} className="w-5 h-5" />
              <span>{label}</span>
            </li>
          ))}

          <DropdownList
            icon={ShoppingCart}
            label="eCommerce"
            isOpen={openDropdown === "ecommerce"}
            toggle={() => handleToggle("ecommerce")}
            items={[
              "Dashboard",
              "Products",
              "Order",
              "Customer",
              "Manage Reviews",
              "Referrals",
              "Settings",
            ]}
          />
          <DropdownList
            icon={Book}
            label="Academy"
            isOpen={openDropdown === "academy"}
            toggle={() => handleToggle("academy")}
            items={["Dashboard", "My Course", "Course Details"]}
          />
          <DropdownList
            icon={Truck}
            label="Logistics"
            isOpen={openDropdown === "logistics"}
            toggle={() => handleToggle("logistics")}
            items={["Dashboard", "Fleet"]}
          />
          <DropdownList
            icon={Dollar}
            label="Invoice"
            isOpen={openDropdown === "invoice"}
            toggle={() => handleToggle("invoice")}
            items={["List", "Preview", "Edit", "Add"]}
          />
          <DropdownList
            icon={Users}
            label="Users"
            isOpen={openDropdown === "users"}
            toggle={() => handleToggle("users")}
            items={["List", "View"]}
          />
          <DropdownList
            icon={Settings}
            label="Roles & Permissions"
            isOpen={openDropdown === "roles"}
            toggle={() => handleToggle("roles")}
            items={["Roles", "Permissions"]}
          />
          <DropdownList
            icon={File}
            label="Pages"
            isOpen={openDropdown === "pages"}
            toggle={() => handleToggle("pages")}
            items={[
              "User Profile",
              "Account Settings",
              "FAQ",
              "Pricing",
              "Misc",
            ]}
          />
          <DropdownList
            icon={Lock}
            label="Authentications"
            isOpen={openDropdown === "auth"}
            toggle={() => handleToggle("auth")}
            items={[
              "Login",
              "Register",
              "Verify Email",
              "Reset Password",
              "Forgot Password",
              "Two Steps",
            ]}
          />
          <DropdownList
            icon={Dots}
            label="Wizard Examples"
            isOpen={openDropdown === "wizard"}
            toggle={() => handleToggle("wizard")}
            items={["Checkout", "Property Listing", "Create Deal"]}
          />

          <li className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all">
            <img src={Square} alt="Modal Examples Icon" className="w-5 h-5" />
            <span>Modal Examples</span>
          </li>
          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Components
          </li>
          <DropdownList
            icon={Cards}
            label="Cards"
            isOpen={openDropdown === "cards"}
            toggle={() => handleToggle("cards")}
            items={["Basic", "Advanced", "Statistics", "Analytics", "Actions"]}
            badge={5}
          />
          <DropdownList
            icon={Interface}
            label="User Interface"
            isOpen={openDropdown === "ui"}
            toggle={() => handleToggle("ui")}
            items={[
              "Accordion",
              "Alerts",
              "Badges",
              "Buttons",
              "Carousel",
              "Collapse",
              "Dropdowns",
              "Footer",
              "List Groups",
              "Modals",
              "Navbar",
              "Offcanvas",
              "Pagination & Breadcum...",
              "Progress",
              "Spinners",
              "Tabs & Pills",
              "Toasts",
              "Tooltips & Popovers",
              "Typography",
            ]}
          />
          <DropdownList
            icon={UI}
            label="Extended UI"
            isOpen={openDropdown === "extendedUI"}
            toggle={() => handleToggle("extendedUI")}
            items={[
              "Avatar",
              "BlockUI",
              "Drag & Drop",
              "Media Player",
              "Perfect Scrollbar",
              "Star Ratings",
              "SweetAlert2",
              "Text Divider",
              "Timeline",
              "Tour",
              "Treeview",
              "Miscellaneous",
            ]}
          />
          <DropdownList
            icon={Tabler}
            label="Icons"
            isOpen={openDropdown === "icons"}
            toggle={() => handleToggle("icons")}
            items={["Tabler", "Font Awesome"]}
          />
          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            FORMS & TABLES
          </li>
          <DropdownList
            icon={Toggle}
            label="Form Elements"
            isOpen={openDropdown === "formElements"}
            toggle={() => handleToggle("formElements")}
            items={[
              "Basic Inputs",
              "Input Groups",
              "Custom Options",
              "Editors",
              "File Upload",
              "Pickers",
              "Select & Tags",
              "Sliders",
              "Switches",
              "Extras",
            ]}
          />
          <DropdownList
            icon={FormLayout}
            label="Form Layouts"
            isOpen={openDropdown === "formLayouts"}
            toggle={() => handleToggle("formLayouts")}
            items={["Vertical Form", "Horizontal Form", "Sticky Actions"]}
          />
          <DropdownList
            icon={Arrows}
            label="Form Wizard"
            isOpen={openDropdown === "formWizard"}
            toggle={() => handleToggle("formWizard")}
            items={["Numbered", "Icons"]}
          />
          <li className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all">
            <img src={Form} alt="Form Validation Icon" className="w-5 h-5" />
            <span>Form Validation</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all">
            <img src={Table} alt="Tables Icon" className="w-5 h-5" />
            <span>Tables</span>
          </li>
          <DropdownList
            icon={DataTables}
            label="Datatables"
            isOpen={openDropdown === "datatables"}
            toggle={() => handleToggle("datatables")}
            items={["Basic", "Advanced", "Extensions"]}
          />
          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Charts & Maps
          </li>
          <DropdownList
            icon={Charts}
            label="Charts"
            isOpen={openDropdown === "charts"}
            toggle={() => handleToggle("charts")}
            items={["Appex Charts", "ChartJS"]}
          />
          <li className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-800 cursor-pointer rounded-md transition-all">
            <img src={Map} alt="Map Icon" className="w-5 h-5" />
            <span>Leaflets Maps</span>
          </li>
          <li className="mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            MISC
          </li>
          <DropdownList
            icon={Level}
            label="Multi Level"
            isOpen={openDropdown === "multiLevel"}
            toggle={() => handleToggle("multiLevel")}
            items={["Level 2"]}
          />
          {[
            { icon: Lifebuoy, label: "Support" },
            { icon: Document, label: "Documentation" },
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
