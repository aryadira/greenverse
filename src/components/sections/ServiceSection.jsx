/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { displayAll } from "../../constants/contents/services/displayAll";
import { arrow, infraGreen1 } from "../../assets/img";

const ServiceSection = () => {
  return (
    <div className='border-t-2 border-[#0000004d]'>
      {displayAll.map((all) => (
        <div className='relative my-[150px]' key={all.id}>
          <div className='container-content flex justify-between border-b-2 pb-8'>
            <div className='title text-2xl'>
              <p>{all.title}</p>
            </div>
            <div className='img grid gap-4 grid-cols-2 border-[#0000004d]'>
              {all.img.map((img) => (
                <div className='card' key={img.id}>
                  <img src={img.path} alt='' />
                  <div className='text mt-6'>
                    <p className='text-sm text-[#676767]'>{img.title}</p>
                    <p className='text-lg'>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='btn absolute right-0 -bottom-20 z-50 '>
            <a href='#' className='flex text-xl items-center text-[#4A4A4A]'>
              See More{" "}
              <span className='bg-white py-4 px-4 mx-4 rounded-[30px]'>
                <img src={arrow} alt='' className='px-5' />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
