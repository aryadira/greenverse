import React from "react";
import { servicesBanner } from "../../assets/img";
import { BoxContainer, SpacingLayout } from "../../layouts";

const Banner = ({ title, children, image, subtitle }) => {
  return (
    <div>
      <div className='w-full banner mt-7 relative'>
        <img src={image ? image : servicesBanner} className='w-full h-[50vh] object-cover' alt='' />
        <SpacingLayout className={"bg-red-500"}>
          <div className='text absolute bottom-1/2 translate-y-1/2 text-xl left lg:left-[120px] text-center sm:text-left'>
            <p className='text-[#C8C8C8] sm:text-xl text-base'>{subtitle}</p>
            <p className='text-[#C8C8C8] text-xl lg:text-[40px] leading-7 lg:leading-[44px] max-w-[532px]'>
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
