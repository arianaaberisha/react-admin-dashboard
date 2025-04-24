import React from "react";
import Bank from "../Icons/Bank";
import PayPal from "../Icons/PayPal";
import Browser from "../Icons/Browser";
import Wallet from "../Icons/Wallet";
import CreditCard from "../Icons/CreditCard";
import Dollar from "../Icons/DollarSymbol";

interface Transactions {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  subLabel: string;
  value: string;
  iconColor: string;
  iconBg: string;
}
const transactions: Transactions[] = [
  {
    Icon: Wallet,
    label: "Wallet",
    subLabel: "Starbucks",
    value: "-$75",
    iconColor:"stroke-[#7367F0]",
    iconBg:"bg-[#7367F029]"
    
  },
  {
    Icon: Browser,
    label: "Bank Transfer",
    subLabel: "Add Money",
    value: "+$480",
    iconColor:"stroke-green-500",
    iconBg:"bg-green-100 dark:bg-[#28C76F29]"
    
  },
  {
    Icon: PayPal,
    label: "PayPal",
    subLabel: "Client Payment",
    value: "+$268",
    iconColor:"stroke-red-500",
    iconBg:"bg-red-100 dark:bg-[#D34C4D29]"
  },
  {
    Icon: CreditCard,
    label: "Master Card",
    subLabel: "Ordered iPhone 13",
    value: "-$699",
    iconColor:"stroke-gray-500 dark:stroke-gray-400",
    iconBg:"bg-[#2F2B3D0F] dark:bg-gray-600"
  },
  {
    Icon: Dollar,
    label: "Bank Transaction",
    subLabel: "Refund",
    value: "+$98",
    iconColor:"stroke-[#60afa7]",
    iconBg:"bg-[#00BAD129]"
  },
  {
    Icon: PayPal,
    label: "PayPal",
    subLabel: "Client Payment",
    value: "+$126",
    iconColor:"stroke-red-500",
    iconBg:"bg-red-100 dark:bg-[#D34C4D29]"
    
  },
  {
    Icon: Bank,
    label: "Bank Transfer",
    subLabel: "Pay Office Rent",
    value: "-$1290",
    iconColor:"stroke-green-500",
    iconBg:"bg-green-100 dark:bg-[#28C76F29]"
  },
  
];

const Transactions: React.FC = () => {
  return (
    <div className=" p-6">
      <div className=" mb-4">
        <h2 className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Transactions
        </h2>
        <p className="text-[15px] font-[400] text-[#2F2B3D8C] dark:text-gray-400">Total 58 transactions done in month</p>
      </div>
      {transactions.map(
        ({ Icon, label, subLabel,value, iconBg, iconColor }) => (
          <div key={label} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
            <Icon className={`w-10 h-10 p-1 rounded-md ${iconBg} ${iconColor}`} />
              <div>
                <div className="text-[15px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
                  {label}
                </div>
                <div className="text-[13px] font-[400] text-[#2F2B3DB2] dark:text-gray-400">
                  {subLabel}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <span
               className={`font-[500] text-[15px] ${
               value.startsWith("-") ? "text-red-500" : "text-green-500"
               }`}
               >
             {value}
             </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Transactions;