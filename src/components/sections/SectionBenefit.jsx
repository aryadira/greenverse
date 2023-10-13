import React, { useState, useEffect, useRef } from "react";
import { landingImg2, arrow } from "../../assets/img/";
import { benefits } from "../../constants/contents/ongoing";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { SplitText } from "gsap-trial/SplitText";
// gsap.registerPlugin(SplitText, ScrollTrigger)

const sectionBenefit = () => {
  // const ourText = new SplitText('.title-heading', { types: 'chars' });
  // const chars = ourText.chars

  // useEffect(() => {
  // gsap.from(
  //   chars,
  //   {
  //     yPercent: 100,
  //     stagger: 0.05,
  //     ease: "back.out",
  //     duration: 1,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".title-heading",
  //       markers: true,
  //       start: "top 80%",
  //       scrub: true
  //     }
  //   }
  // )
  // }, []);

  return (
    <div className='wrapper mt-[120px]'>
      <div className='title text-center'>
        <p className=' text-[#676767] text-xl font-base'>Reasons.</p>
        <h1 className='text-[32px] mb-8 font-HaasMd'>Why should choose Greenverse?</h1>
      </div>
      <div className='flex justify-between items-start flex-wrap lg:flex-nowrap gap-3'>
        <div className='bg-white w-full lg:w-1/2 flex justify-center rounded-[30px] mr-1 mb-3'>
          <img src={landingImg2} alt='' className='w-[70%] px-6 pt-6' />
        </div>
        <div className='w-full lg:w-1/2 '>
          <div className='right-benefit gap-3 grid grid-cols-2'>
            {benefits.map((benefit) => (
              // eslint-disable-next-line react/jsx-key
              <div className='card pt-[20px] px-[10px] pb-[50px] bg-white rounded-[30px]'>
                <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white inline py-[4px] pl-[12px] pr-5 rounded-full'>
                  {benefit.id}
                </p>
                <h3 className='title-heading my-[10px] mx-[10px] text-2xl  font-HaasMd'>{benefit.title}</h3>
                <p className='my-[10px] mx-[10px]'>{benefit.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default sectionBenefit;
