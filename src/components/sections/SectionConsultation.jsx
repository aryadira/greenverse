/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ButtonDark from "../parts/ButtonDark";
import { consul } from "../../assets/img";

const SectionConsultation = () => {
  return (
    <div className="flex justify-between">
      <div className="left bg-white w-1/2 rounded-[30px] pt-20 pl-12">
        <div className="wrapper">
          <p className="text-[#676767] text-xl font-base">
            Don’t know your plan?
          </p>
          <p className="text-[32px] text-[#676767] max-w-md">
            <span className="text-black">Let’s consultation.</span>You can
            consultation what you needs
          </p>
          <ButtonDark title="Consultation Now!" />
        </div>
      </div>
      <div className="center mx-3"></div>
      <div className="right w-1/2">
        <img src={consul} alt="" />
      </div>
    </div>
  );
};

export default SectionConsultation;
