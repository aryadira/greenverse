/* eslint-disable react/jsx-key */
import React from "react";
import { displayAll } from "../../constants/contents/products/displayAll";
import { crimson } from "../../assets/img";

const ProductSection = () => {
  return (
    <div className='border-t-2 pt-[90px] border-[#0000004d]'>
      <h1 className='text-[32px] font-HaasMd'>Seeds Type List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {displayAll.map((content) => (
          <div className='card-content mt-8 rounded-[30px] hover:rounded-none'>
            <div className=' relative overflow-hidden bg-cover bg-no-repeat '>
              <img src={content.img} alt='' className='w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer' />
            </div>
            <div className='text pt-4 bg-white cursor-pointer'>
              <h1 className='text-sm text-[#676767]'>{content.type}</h1>
              <h1 className='text-2xl font-HaasMd'>{content.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
