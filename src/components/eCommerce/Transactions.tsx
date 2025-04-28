import React from "react";
import Bank from "../Icons/Bank";
import PayPal from "../Icons/PayPal";
import Browser from "../Icons/Browser";
import Wallet from "../Icons/Wallet";
import CreditCard from "../Icons/CreditCard";
import Dollar from "../Icons/DollarSymbol";
import CardComponent from "../CardComponent";
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
    <div className="p-3 sm:p-4 md:p-6">
      <div className="mb-3 sm:mb-4 md:mb-1">
        <h2 className="text-base sm:text-lg font-medium text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Transactions
        </h2>
        <p className="text-sm sm:text-base font-normal text-[#2F2B3D8C] dark:text-gray-400">Total 58 transactions done in month</p>
      </div>
      <div className="space-y-2 sm:space-y-1 ">
        {transactions.map(
          ({ Icon, label, subLabel, value, iconBg, iconColor }) => {
            const valueColorClass = value.startsWith("-")
              ? "text-red-500"
              : value.startsWith("+")
              ? "text-green-500"
              : "text-gray-500"; 

            return (
              <CardComponent
                key={label}
                Icon={Icon}
                label={label}
                subLabel={subLabel}
                value={<span className={`font-medium text-sm sm:text-base ${valueColorClass}`}>{value}</span>}
                iconColor={iconColor}
                iconBg={iconBg}
              />
            );
        })}
      </div>
    </div>
  );
};
export default Transactions;