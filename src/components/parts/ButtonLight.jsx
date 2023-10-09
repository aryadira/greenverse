/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ButtonLight = (props) => {
  return (
    <div className="mt-[24px]">
      <a href="#" className="rounded-[40px] px-5 py-3">
        {props.title}
      </a>
    </div>
  );
};

export default ButtonLight;
