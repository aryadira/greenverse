/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TopicsCard = (props) => {
  return (
    <div className="mt-4">
      <img src={props.img} alt="" />
      <div className="text mt-2">
        <p className="text-sm text-[#676767]">{props.title}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default TopicsCard;
