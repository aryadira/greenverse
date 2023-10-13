/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import star from "../../assets/img/star.png";

const TopicsButtonCard = (props) => {
  return (
    <div className='flex bg-white py-6 pr-20 rounded-[20px] my-5'>
      <div className='wrapper ml-8 flex items-center justify-center'>
        <span>
          <img src={star} width='57px' height='57px' alt='' />
        </span>
        <p className='text-[27px] ml-9 text-base md:text-xl '>{props.title}</p>
      </div>
    </div>
  );
};

export default TopicsButtonCard;
