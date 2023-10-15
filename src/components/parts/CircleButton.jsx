/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CircleButton = ({ className, children, icon, link, ...props }) => {
  return (
    <Link to={link}>
      <div
        className={`w-[192px] h-[192px] hover:w-[230px] cursor-pointer rounded-full flex justify-center items-center bg-[#313A36] text-white hover:bg-[#0f231a] text-center transition-all ${className}`}>
        {children}
      </div>
    </Link>
  );
};

export default CircleButton;
