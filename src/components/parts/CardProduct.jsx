import React from "react";

const CardProduct = (props) => {
  return (
    <div className="card max-w-[295px] h-[274px]">
      <p className="number">{props.number}</p>
      <h1 className="desc">{props.desc}</h1>
      <img src={props.img} alt="" />
    </div>
  );
};

export default CardProduct;
