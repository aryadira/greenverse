/* eslint-disable no-unused-vars */
import React from "react";
import { landingImg1 } from "../../assets/img";
import ButtonDark from "../parts/ButtonDark";
import ButtonLight from "../parts/ButtonLight";

const SectionLanding = () => {
  return (
    <div className='wrapper flex justify-between items-center flex-wrap'>
      <div className='left'>
        <h1 className='text-6xl leading-tight'>
          Providing Solutions for <br /> Greening the World
        </h1>
        <h1 className='font-medium mt-[17px] max-w-lg leading-6'>
          We are fully prepared to be the main facilitator in realizing a greener world in the future by committing to developing innovative,
          sustainable and environmentally friendly solutions.
        </h1>
        <div className='btn flex items-cent31er'>
          <ButtonDark title={"Get Started"} />
          <ButtonLight title={"Explore"} />
        </div>
      </div>
      <div className='right md:w-[550px] w-[200px]'>
        <img src={landingImg1} />
      </div>
    </div>
  );
};

export default SectionLanding;
