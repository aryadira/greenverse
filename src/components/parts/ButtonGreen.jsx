import React from "react";
import check from "../../assets/img/check.png";

const ButtonGreen = (props) => {
  return (
    <div className="mt-3 bg-[#e6fdef] text-[#757575] rounded-[40px] px-5 py-2 text-center border border-[#b6b6b6] flex items-center">
      <span className="mr-2">
        <img src={check} alt="" />
      </span>
      <p href="#" className="">
        {props.title}
      </p>
    </div>
  );
};

export default ButtonGreen;
