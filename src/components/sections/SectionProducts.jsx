import React from "react";
import CardProduct from "../parts/CardProduct";
import img1 from "../../assets/img/product-1.svg";

const SectionProducts = () => {
  return (
    <div className="wrapper">
      <div>
        <CardProduct
          number={"1"}
          desc={"Quality seeds for abundant harvests"}
          img={img1}
        />
      </div>
    </div>
  );
};

export default SectionProducts;
