import React from "react";

const CardPartner = (props) => {
  return (
    <div className="card w-[505px]">
      <div className="card-content bg-white flex w-full max-w-[400px] lg:max-w-[505px] items-center py-2 px-4 gap-4 rounded-md">
        <img src={props.path} className="w-[33px] h-auto" alt="" />

        <div className="text w-full">
          <h1>{props.name}</h1>
          <p className="text-[12px] text-[#bbbbbb]">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPartner;
