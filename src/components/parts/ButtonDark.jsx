/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ButtonDark = (props) => {
  return (
    <div className="mt-[24px]">
      <a href="#" className="bg-black text-white rounded-[40px] px-5 py-3">
        {props.title}
      </a>
    </div>
  );
};

export default ButtonDark;
