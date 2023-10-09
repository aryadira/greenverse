/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import star from "../../assets/img/star.png";

const TopicsCard = (props) => {
  return (
    <div className="flex items-center">
      <span>
        <img src={star} width="57px" height="57px" alt="" />
      </span>
      <p className="text-[27px] ml-9">{props.title}</p>
    </div>
  );
};

export default TopicsCard;
