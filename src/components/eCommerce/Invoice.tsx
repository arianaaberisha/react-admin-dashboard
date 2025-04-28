import React, { useState, useRef, useEffect } from "react";
import CheckCircle from "../Icons/CheckCircle";
import CircleLink from "../Icons/CircleLink";
import Downloaded from "../Icons/Downloaded";
import Draft from "../Icons/Draft";
import InfoCircle from "../Icons/InfoCircle";
import PaidChart from "../Icons/PaidChart";
import ChevronDown from "../Icons/ChevronDown";


interface Project {
  id: number;
  name: string;
  date: string;
  total: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  
}

const projects: Project[] = [
  {
    id: 1,
    name: "#5089",
    date: "09 May 2020",
    total: "$3077",
    Icon: CheckCircle,
  },
  {
    id: 2,
    name: "#5041",
    date: "19 Nov 2020",
    total: "$2230",
    Icon: CheckCircle,
  },
  {
    id: 3,
    name: "#5027",
    date: "25 Sep 2020",
    total: "$2787",
    Icon: CircleLink,
  },
  {
    id: 4,
    name: "#5024",
    date: "02 Aug 2020",
    total: "$5285",
    Icon: CircleLink,
  },
  {
    id: 5,
    name: "#5020",
    date: "15 Dec 2020",
    total: "$5219",
    Icon: Downloaded,
  },
  {
    id: 6,
    name: "#4995",
    date: "09 May 2020",
    total: "$3077",
    Icon: CircleLink,
  },
  {
    id: 7,
    name: "#4993",
    date: "22 Oct 2020",
    total: "$4936",
    Icon: CircleLink,
  },
  {
    id: 8,
    name: "#4989",
    date: "23 Sept 2020",
    total: "$3623",
    Icon: Downloaded,
  },
  {
    id: 9,
    name: "#4989",
    date: "01 Aug 2020",
    total: "$5293",
    Icon: InfoCircle,
  },
  {
    id: 10,
    name: "#4965",
    date: "18 Mar 2020",
    total: "$3789",
    Icon: CircleLink,
  },
  {
    id: 11,
    name: "#4963",
    date: "28 Mar 2020",
    total: "$2029",
    Icon: InfoCircle,
  },
  {
    id: 12,
    name: "#4943",
    date: "16 Aug 2020",
    total: "$3198",
    Icon: CircleLink,
  },
  {
    id: 13,
    name: "#4917",
    date: "24 Dec 2020",
    total: "$3367",
    Icon: Downloaded,
  },
  {
    id: 14,
    name: "#4881",
    date: "24 Jun 2020",
    total: "$2771",
    Icon: PaidChart,
  },
  {
    id: 15,
    name: "#4877",
    date: "22 Nov 2020",
    total: "$2713",
    Icon: Draft,
  },
  {
    id: 16,
    name: "#4831",
    date: "30 Jun 2020",
    total: "$4056",
    Icon: Draft,
  },
  {
    id: 17,
    name: "#4798",
    date: "14 Oct 2020",
    total: "$2825",
    Icon: CircleLink,
  },
  {
    id: 18,
    name: "#4794",
    date: "04 Feb 2021",
    total: "$2719",
    Icon: CheckCircle,
  },
  {
    id: 19,
    name: "#4790",
    date: "02 Jun 2020",
    total: "$4776",
    Icon: Downloaded,
  },
  {
    id: 20,
    name: "#4765",
    date: "30 Sept 2020",
    total: "$3904",
    Icon: PaidChart,
  },
  {
    id: 21,
    name: "#4748",
    date: "07 Jun 2020",
    total: "$5591",
    Icon: Downloaded,
  },
  {
    id: 22,
    name: "#4743",
    date: "15 Dec 2020",
    total: "$3668",
    Icon: Downloaded,
  },
  {
    id: 23,
    name: "#4716",
    date: "18 Oct 2020",
    total: "$2872",
    Icon: CircleLink,
  },
  {
    id: 24,
    name: "#4687",
    date: "10 Feb 2021",
    total: "$4309",
    Icon: PaidChart,
  },
  {
    id: 25,
    name: "#4683",
    date: "08 Dec 2020",
    total: "$2060",
    Icon: Downloaded,
  },
  {
    id: 26,
    name: "#4677",
    date: "22 May 2020",
    total: "$3503",
    Icon: PaidChart,
  },
  {
    id: 27,
    name: "#4651",
    date: "22 Oct 2020",
    total: "$2783",
    Icon: Draft,
  },
  {
    id: 28,
    name: "#4632",
    date: "06 Mar 2021",
    total: "$5565",
    Icon: Draft,
  },
  {
    id: 29,
    name: "#4593",
    date: "02 Mar 2021",
    total: "$5565",
    Icon: Draft,
  },
  {
    id: 30,
    name: "#4582",
    date: "12 Apr 2020",
    total: "$5612",
    Icon: Downloaded,
  },
  {
    id: 31,
    name: "#4575",
    date: "25 Aug 2020",
    total: "$3102",
    Icon: CircleLink,
  },
  {
    id: 32,
    name: "#4567",
    date: "25 Sept 2020",
    total: "$3171",
    Icon: Draft,
  },
  {
    id: 33,
    name: "#4538",
    date: "10 Jul 2020",
    total: "$2483",
    Icon: Draft,
  },
  {
    id: 34,
    name: "#4535",
    date: "10 Sept 2020",
    total: "$3128",
    Icon: PaidChart,
  },
  {
    id: 35,
    name: "#4528",
    date: "06 Sept 2020",
    total: "$3208",
    Icon: CheckCircle,
  },
  {
    id: 36,
    name: "#4515",
    date: "11 Feb 2021",
    total: "$4749",
    Icon: CheckCircle,
  },
  {
    id: 37,
    name: "#4511",
    date: "01 Oct 2020",
    total: "$4558",
    Icon: PaidChart,
  },
  {
    id: 38,
    name: "#4506",
    date: "03 Nov 2020",
    total: "$3719",
    Icon: PaidChart,
  },
  {
    id: 39,
    name: "#4477",
    date: "23 Apr 2020",
    total: "$3428",
    Icon: PaidChart,
  },
  {
    id: 40,
    name: "#4456",
    date: "23 Jul 2020",
    total: "$5578",
    Icon: Draft,
  },
  {
    id: 41,
    name: "#4401",
    date: "30 Nov 2020",
    total: "$2032",
    Icon: CircleLink,
  },
  {
    id: 42,
    name: "#4449",
    date: "17 Jan 2021",
    total: "$5200",
    Icon: CircleLink,
  },
  {
    id: 43,
    name: "#4446",
    date: "01 Apr 2020",
    total: "$2477",
    Icon: Draft,
  },
  {
    id: 44,
    name: "#4439",
    date: "12 Jun 2020",
    total: "$4263",
    Icon: Draft,
  },
  {
    id: 45,
    name: "#4437",
    date: "25 Aug 2020",
    total: "$3861",
    Icon: Draft,
  },
  {
    id: 46,
    name: "#4416",
    date: "17 Sept 2020",
    total: "$4372",
    Icon: CheckCircle,
  },
  {
    id: 47,
    name: "#4410",
    date: "01 Feb 2021",
    total: "$4077",
    Icon: Draft,
  },
  {
    id: 48,
    name: "#4375",
    date: "22 Oct 2020",
    total: "$5181",
    Icon: CircleLink,
  },
  {
    id: 49,
    name: "#4341",
    date: "01 Nov 2020",
    total: "$3740",
    Icon: Draft,
  },
  {
    id: 50,
    name: "#4323",
    date: "22 Mar 2021",
    total: "$2869",
    Icon: CircleLink,
  },
  {
    id: 51,
    name: "#4477",
    date: "23 Apr 2020",
    total: "$3428",
    Icon: CircleLink,
  },

];

const iconMapping: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "Downloaded": Downloaded,
  "Draft": Draft,
  "Paid": PaidChart,
  "Partial Payment": CircleLink,
  "Past Due": InfoCircle,
  "Sent":CheckCircle,
};

const iconStyleMapping: Record<string, { bgColor: string, strokeColor: string }> = {
  "Downloaded": { bgColor: "bg-[#00BAD114]", strokeColor: "stroke-[#00BAD1]" },
  "Draft": { bgColor: "bg-[#7367F014]", strokeColor: "stroke-[#7367F0]" },
  "Paid": { bgColor: "bg-[#FF9F4314]", strokeColor: "stroke-[#FF9F43]" },
  "Partial Payment": { bgColor: "bg-[#28C76F14]", strokeColor: "stroke-[#28C76F]" },
  "Past Due": { bgColor: "bg-[#EA545529]", strokeColor: "stroke-[#EA5455]" },
  "Sent": { bgColor: "bg-[#2F2B3D14]", strokeColor: "stroke-[#808390]" },
};

const getIconStyle = (Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined) => {
  if (!Icon) return { bgColor: "bg-gray-100", strokeColor: "stroke-gray-400" };
  
  const iconKey = Object.entries(iconMapping).find(([_, component]) => component === Icon)?.[0];
  
  if (iconKey && iconStyleMapping[iconKey]) {
    return iconStyleMapping[iconKey];
  }
  return { bgColor: "bg-gray-100", strokeColor: "stroke-gray-400" };
};

const Invoice: React.FC = () => {
  const invoiceOptions = ['6', '10', '25', '50', '100'];
  const [open, setOpen] = useState(false);
  const [selectedInvoiceOption, setSelectedInvoiceOption] = useState(invoiceOptions[0]);
  const rowsDropdownRef = useRef<HTMLDivElement>(null);
  const [openRowsDropdown, setOpenRowsDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (rowsDropdownRef.current && !rowsDropdownRef.current.contains(e.target as Node)) {
        setOpenRowsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  const iconFilterOptions = ["Invoice Status", "Downloaded", "Draft", "Paid", "Partial Payment", "Past Due", "Sent"];
  const [openIconDropdown, setOpenIconDropdown] = useState(false);
  const [selectedIconFilter, setSelectedIconFilter] = useState("Invoice Status");
  const iconDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIconClickOutside = (e: MouseEvent) => {
      if (iconDropdownRef.current && !iconDropdownRef.current.contains(e.target as Node)) {
        setOpenIconDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleIconClickOutside);
    return () => document.removeEventListener("mousedown", handleIconClickOutside);
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = Number(selectedInvoiceOption);


  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesIcon = true;

    if (selectedIconFilter !== "Invoice Status") {
      const expectedIcon = iconMapping[selectedIconFilter];
      matchesIcon = project.Icon === expectedIcon;
    }
    return matchesSearch && matchesIcon;
  });
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, selectedIconFilter, searchQuery]);

  const selectAllRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const currentIds = currentProjects.map(p => p.id);
    if (selectAllRef.current) {
      const selectedOnPage = currentIds.filter(id => selectedProjectIds.includes(id));
      selectAllRef.current.indeterminate =
        selectedOnPage.length > 0 && selectedOnPage.length < currentProjects.length;
    }
  }, [selectedProjectIds, currentProjects]);

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentIds = currentProjects.map(project => project.id);
    if (e.target.checked) {
      setSelectedProjectIds(prev => [
        ...prev,
        ...currentIds.filter(id => !prev.includes(id))
      ]);
    } else {
      setSelectedProjectIds(prev => prev.filter(id => !currentIds.includes(id)));
    }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedProjectIds(prev => [...prev, id]);
    } else {
      setSelectedProjectIds(prev => prev.filter(item => item !== id));
    }
  };

  return (
    <div className="flex flex-col p-1">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-4 space-y-2 md:space-y-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <h3 className="text-[#2F2B3DB2] dark:text-gray-300 text-[15px] font-[400]">Show</h3>
          <div className="relative" ref={rowsDropdownRef}>
            <button
              onClick={() => setOpenRowsDropdown(prev => !prev)}
              className="w-30 flex justify-between items-center px-4 py-2  dark:bg-transparent border border-gray-200 dark:border-gray-700 text-[#2F2B3D66] rounded-lg hover:shadow"
            >
              <span className="text-[15px] font-[400] dark:text-gray-400">{selectedInvoiceOption}</span>
              <ChevronDown className="stroke-gray-800 dark:stroke-gray-400"/>
            </button>
            {openRowsDropdown && (
              <ul className="absolute mt-2 z-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg w-30">
                {invoiceOptions.map(option => (
                  <li key={option}>
                    <button
                      onClick={() => { setSelectedInvoiceOption(option); setOpenRowsDropdown(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="w-full sm:w-auto h-10 px-4 py-2 bg-[#7367F0] border border-gray-200 dark:border-gray-700 text-white rounded-lg hover:shadow">
            + Create Invoice
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Invoice"
            className="w-full text-[#2F2B3D66] text-[15px] font-[400] sm:w-auto border rounded-lg px-5 py-2 text-sm dark:bg-transparent"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <div className="relative w-full sm:w-auto" ref={iconDropdownRef}>
            <button
              onClick={() => setOpenIconDropdown(prev => !prev)}
              className="w-full sm:w-auto dark:bg-transparent dark:text-gray-300 flex justify-between items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow "
            >
              <span className="text-[15px] font-[400] ">{selectedIconFilter}</span>
              <ChevronDown className="stroke-gray-800 dark:stroke-gray-400 "/>
            </button>
            {openIconDropdown && (
              <ul className="absolute mt-2 right-0 z-20   dark:bg-gray-100 border border-gray-200 dark:border-gray-700 rounded shadow-lg w-30">
                {iconFilterOptions.map(option => (
                  <li key={option}>
                    <button
                      onClick={() => { setSelectedIconFilter(option); setOpenIconDropdown(false); }}
                      className="w-full text-[13px] text-left px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-400"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="px-2 md:px-4 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="w-8 py-5 px-2">
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  className="w-4 h-4"
                  checked={currentProjects.length > 0 && currentProjects.every(p => selectedProjectIds.includes(p.id))}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th className="text-left py-2 px-2 text-sm dark:text-[#E1DEF5E5]">#</th>
              <th className="text-left py-2 px-2 text-sm hidden sm:table-cell dark:text-[#E1DEF5E5]">STATUS</th>
              <th className="text-left py-2 px-2 text-sm hidden sm:table-cell dark:text-[#E1DEF5E5]">TOTAL</th>
              <th className="text-left py-2 px-2 text-sm hidden sm:table-cell dark:text-[#E1DEF5E5]">ISSUED DATE</th>
              <th className="text-left py-2 px-2 text-sm hidden sm:table-cell dark:text-[#E1DEF5E5]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.map(project => (
              <tr key={project.id} className="border-b dark:text-[#E1DEF5E5]">
                <td className="py-1.5 px-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 "
                    checked={selectedProjectIds.includes(project.id)}
                    onChange={e => handleCheckboxChange(project.id, e.target.checked)}
                  />
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded flex items-center justify-center">
                      <div className="text-[15px] font-[400] text-[#7367F0]">
                        {project.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 text-sm hidden sm:table-cell">
                  {project.Icon && (
                    <div className={`${getIconStyle(project.Icon).bgColor} rounded-full p-1.5 inline-flex items-center justify-center`}>
                      {React.createElement(project.Icon, { 
                        className: `w-5 h-5 ${getIconStyle(project.Icon).strokeColor}` 
                      })}
                    </div>
                  )}
                </td>
                <td className="px-2 hidden sm:table-cell">
                  <div className="flex -space-x-1 text-[15px] font-[400] text-[#2F2B3DB2]">{project.total}</div>
                </td>
                <td className="py-1.5 px-2 hidden sm:table-cell">
                  <div className="text-[15px] font-[400] text-[#2F2B3DB2] text-gray-400">{project.date}</div>
                </td>
                <td className="py-1.5 px-2 hidden sm:table-cell">
                  <button className="flex items-center gap-3 text-[#2F2B3DE5] text-lg font-semibold dark:bg-[#2F3349] dark:text-[#ffffff]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18M19 6l-1 14H6L5 6h14zM10 11v6M14 11v6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7-11-7-11-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
            {currentProjects.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 md:px-4 py-2 border-t space-y-2 sm:space-y-0">
        <div className="text-xs text-gray-500">
          Showing {filteredProjects.length === 0 ? 0 : indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredProjects.length)} of {filteredProjects.length} entries
        </div>
        <div className="flex gap-1 overflow-x-auto">
          <button
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            onClick={() => setCurrentPage(1)}
          >
            «
          </button>
          <button
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            ‹
          </button>
          {Array.from({ length: Math.ceil(filteredProjects.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`px-2 py-1 text-sm ${currentPage === page ? "bg-[#7367F0] text-white" : "border hover:bg-gray-100"} rounded`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            onClick={() =>
              setCurrentPage((p) => Math.min(Math.ceil(filteredProjects.length / itemsPerPage), p + 1))
            }
          >
            ›
          </button>
          <button
            className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
            onClick={() => setCurrentPage(Math.ceil(filteredProjects.length / itemsPerPage))}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;