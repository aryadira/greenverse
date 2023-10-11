import React from "react";
import { servicesBanner } from "../../assets/img";

const Banner = () => {
  return (
    <div>
      <div className="banner mt-7 relative">
        <div className="banner relative mt-7">
          <img src={servicesBanner} className="w-full" alt="" />
          <div className="text absolute bottom-1/2 translate-y-1/2 text-xl left-[160px] ">
            <p className="text-[#C8C8C8]">Discover all</p>
            <p className="text-[#C8C8C8] text-[40px] leading-10">
              <span className="text-white">Services</span> Get your <br /> needs
              from our services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
