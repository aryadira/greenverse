import React from "react";
import check from "../../assets/img/check.png";

const ButtonGreen = ({ title }) => {
  return (
    <div className='mt-3 bg-[#e6fdef] text-[#757575] rounded-[40px] pr-5 py-2 text-center border border-[#b6b6b6] flex items-center'>
      <span className='px-3'>
        <img src={check} alt='' />
      </span>
      <p href='#' className=''>
        {title}
      </p>
    </div>
  );
};

export default ButtonGreen;
