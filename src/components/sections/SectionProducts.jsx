/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import CardProduct from "../parts/CardProduct";
import { product1, product2, product3, product4 } from "../../assets/img";
const SectionProducts = () => {
  return (
    <div>
      <p className='text-[#676767] text-xl font-base'>Let's Explore</p>
      <p className='text-[32px] text-[#676767] max-w-md'>
        <span className='text-black font-HaasMd'>Explore.</span> find your favorite products to get the solutions
      </p>
      <div className='card'>
        <div className='product-card gap-6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 my-12'>
          <CardProduct number={"1"} desc={"Quality seeds for abundant harvests"} img={product1} />
          <CardProduct number={"2"} desc={"Environmentally friendly fertilizer"} img={product2} />
          <CardProduct number={"3"} desc={"Quality \n agricultural materials"} img={product3} />
          <CardProduct number={"4"} desc={"Advanced \n agricultural tools"} img={product4} />
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
