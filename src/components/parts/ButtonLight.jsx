/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import arrow from "../../assets/img/arrow.png";

const ButtonLight = (props) => {
  return (
    <div className="mt-[30px] flex rounded-[40px] px-5 py-3 border cursor-pointer ml-2 border-black">
      <a href="#" className="">
        {props.title}
      </a>
      <span>
        <img src={arrow} alt="" />
      </span>
    </div>
  );
};

export default ButtonLight;
