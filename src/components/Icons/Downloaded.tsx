import React from 'react';

const Downloaded: React.FC<React.SVGProps<SVGSVGElement>>=(props)=>
(
    <svg  xmlns="http://www.w3.org/2000/svg"  
    width="24"  
    height="24"  
    viewBox="0 0 24 24"  
    fill="none"  
    stroke="currentColor"  
    strokeWidth="2"  
    strokeLinecap="round"  
    strokeLinejoin="round"  
    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-circle"{...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 7v14" />
    <path d="M9 18l3 3l3 -3" /><path d="M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" /></svg>
)
export default Downloaded;