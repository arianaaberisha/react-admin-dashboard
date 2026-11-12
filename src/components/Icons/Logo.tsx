import React from "react";

type LogoProps = {
  effectiveCollapsed: boolean;
};

const Logo: React.FC<LogoProps> = ({ effectiveCollapsed }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={effectiveCollapsed ? "mx-auto" : "mr-2"}
    >
      <rect width="30" height="30" rx="7" fill="#7367F0" />
      <rect x="6" y="15" width="4" height="9" rx="1.5" fill="white" />
      <rect x="13" y="9" width="4" height="15" rx="1.5" fill="white" />
      <rect x="20" y="12" width="4" height="12" rx="1.5" fill="white" opacity="0.7" />
    </svg>
  );
};

export default Logo;
