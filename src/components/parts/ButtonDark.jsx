/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ButtonDark = (props) => {
  return (
    <div className="mt-[30px] bg-[#313A36] text-white rounded-[40px] px-5 py-3 max-w-[220px] text-center hover:bg-[#22503c] transition-all">
      <a href="#">{props.title}</a>
    </div>
  );
};

export default ButtonDark;
