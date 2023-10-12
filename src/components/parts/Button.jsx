/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ className, children, icon, ...props }) => {
  return (
    <div className={`rounded-[40px] cursor-pointer px-5 py-3 text-center transition-all ${className}`}>
      <a href='#'>{children}</a>
    </div>
  );
};

export default Button;

// bg-[#313A36] text-white hover:bg-[#22503c]
