import React from "react";
import { servicesBanner } from "../../assets/img";
import { BoxContainer, SpacingLayout } from "../../layouts";

const Banner = ({ title, children }) => {
  return (
    <div>
      <div className='w-full banner mt-10 lg:mt-7 relative'>
        <img src={servicesBanner} className='w-full' alt='' />
        <SpacingLayout>
          <div className='text absolute bottom-1/2 translate-y-1/2 text-xl left-[120px]'>
            <p className='text-[#C8C8C8]'>Discover all</p>
            <p className='text-[#C8C8C8] text-[40px] leading-10'>
              <span className='text-white'>{title} </span>
              {children}
            </p>
          </div>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default Banner;
