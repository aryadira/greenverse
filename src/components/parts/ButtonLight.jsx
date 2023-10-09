/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import arrow from "../../assets/img/arrow.svg";

const ButtonLight = (props) => {
  return (
    <div className="mt-[30px] flex rounded-[40px] px-5 py-3 border cursor-pointer ml-2 border-black hover:bg-[#313A36] hover:border-none hover:text-white items-center justify-center">
      <a href="#">{props.title}</a>
      <span >
        <img src={arrow} className="rotate-[-40deg]" alt="" />
      </span>
    </div>
  );
};

export default ButtonLight;
