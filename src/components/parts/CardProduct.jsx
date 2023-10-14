/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardProduct = (props) => {
  return (
    <div className='card-wrapper bg-white relative rounded-[40px] px-1 sm:px-7 sm:pt-7 flex sm:block'>
      <div className='flex sm:block items-center'>
        <div className='number text-xl md:text-2xl w-[56px] h-[56px] bg-[#C0FFDF] flex justify-center items-center mr-5 rounded-full'>
          {props.number}
        </div>
        <h1 className='desc max-w-sm text-md font-HaasMd sm:text-2xl mt-2'>{props.desc}</h1>
      </div>
      <div className='wrapper relative bottom-0'>
        <img src={props.img} alt='' className='mt-6' />
      </div>
    </div>
  );
};

export default CardProduct;
