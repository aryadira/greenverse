/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import star from "../../assets/img/star.png";

const TopicsButtonCard = (props) => {
  return (
    <div className="flex bg-white max-w-[295px] h-[100px] rounded-[20px] my-5">
      <div className="wrapper ml-8 flex items-center justify-center">
        <span>
          <img src={star} width="57px" height="57px" alt="" />
        </span>
        <p className="text-[27px] ml-9 ">{props.title}</p>
      </div>
    </div>
  );
};

export default TopicsButtonCard;
