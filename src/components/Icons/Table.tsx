import React from "react";

const Table:React.FC<React.SVGProps<SVGSVGElement>>=(props)=>(
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  
    viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  
    strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  
    className="icon icon-tabler icons-tabler-outline icon-tabler-table  stroke-gray-800 dark:stroke-white"
    {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><path d="M3 10h18" /><path d="M10 3v18" /></svg>
);
export default Table;