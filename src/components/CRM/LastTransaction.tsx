import React from "react";
import Visa from "../../assets/icons/visa.png";
import MasterCard from "../../assets/icons/master-card.png";
import AmericanExpress from "../../assets/icons/american-express.png";

interface Project {
  id: number;
  number: string;
  name: string;
  date: string;
  status: string;
  trend: string;
  icon: string;
}

const projects: Project[] = [
  { id: 1, number: "*4230", name: "Credit", date: "17 Mar 2022", status: "Verified", trend: "+$1,678", icon: Visa },
  { id: 2, number: "*5578", name: "Credit", date: "12 Feb 2022", status: "Rejected", trend: "-$839", icon: MasterCard },
  { id: 3, number: "*4567", name: "ATM", date: "28 Feb 2022", status: "Verified", trend: "+$435", icon: AmericanExpress },
  { id: 4, number: "*5699", name: "Credit", date: "08 Jan 2022", status: "Pending", trend: "+$2,345", icon: Visa },
  { id: 5, number: "*5699", name: "Credit", date: "08 Jan 2022", status: "Rejected", trend: "-$234", icon: Visa },
];

const LastTransaction: React.FC = () => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="text-left p-3 text-lg font-[500] text-gray-600 dark:text-gray-300" colSpan={4}>
                Last Transactions
              </th>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              
              <th className="text-left p-3 text-gray-500 dark:text-gray-300">Card</th>
              <th className="text-left p-3 text-gray-500 dark:text-gray-300">Date</th>
              <th className="text-left p-3 text-gray-500 dark:text-gray-300">Status</th>
              <th className="text-left p-3 text-gray-500 dark:text-gray-300">Trend</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 flex items-center gap-4">
                  <img src={project.icon} alt={project.name} className=" h-8"/>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{project.number}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{project.name}</p>
                  </div>
                </td>
                
                <td className="p-3 text-gray-700 dark:text-gray-300">{project.date}</td>
                <td className="p-3">
             <span
             className={`px-2 mr-3 py-1 rounded text-sm ${
             project.status === "Verified" ? "bg-green-200 text-green-600 px-4" :
             project.status === "Rejected" ? "bg-red-200 text-red-500 px-3" :
             project.status === "Pending" ? "bg-gray-200 text-gray-500 px-4" :
             "bg-gray-500 "
             }`}
             >
              {project.status}
             </span>
              </td>
                <td className="p-3 text-gray-700 dark:text-gray-300">{project.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastTransaction;
