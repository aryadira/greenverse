/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardProduct = (props) => {
  return (
    <div className="card-wrapper w-[295px] h-[274px] bg-white relative rounded-[30px] mt-4 md:mt-0">
      <div className="wrapper absolute left-[28px] top-[18px] mr-5">
        <p className="number text-2xl w-[56px] h-[56px] bg-[#C0FFDF] flex justify-center items-center rounded-full">
          {props.number}
        </p>

        <h1 className="desc max-w-sm text-2xl mt-2">{props.desc}</h1>
        <img src={props.img} alt="" className="mt-6" />
      </div>
    </div>
  );
};

export default CardProduct;
