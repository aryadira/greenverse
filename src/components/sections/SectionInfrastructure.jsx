/* eslint-disable react/no-children-prop */
import React, { useEffect } from "react";
import { infra1, infra2, infra3, infra4 } from "../../assets/img/";
import check from "../../assets/img/check.png";
import Label from "../parts/Label";
import { Button } from "../parts";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const SectionInfrastructure = (props) => {
  let split = new SplitText(".wrapper p", { types: "chars" });
  let mySplit = split.chars;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top 80%",
      end: "top 30%",
      // markers: true,
    },
  });

  tl.to(mySplit, {
    yPercent: 0,
    duration: 0.07,
    stagger: 0.2,
  });
  return (
    <div className='wrapper'>
      <p className='text-[#676767] text-xl font-base'>And Then...</p>
      <p className='title text-[32px] text-[#676767] max-w-md'>
        <span className='text-black font-HaasMd'>Keep Exploring.</span> We have any solutions from our services!
      </p>

      <div className='container my-[100px] -top mt-8 grid lg:grid-cols-2 place-content-center col-reverse'>
        <div className='left mt-10'>
          <img src={infra1} alt='' className='animate-[updown_2s_ease-in-out_infinite]' />
        </div>
        <div className='right max-w-[581px]'>
          <h1 className='text-[32px] font-HaasMd'>Green Infrastructure Design</h1>
          <p className='max-w-md text-[#676767] text-[18px] my-2 leading-6'>
            Green infrastructure integrates plants and other natural elements to make urban spaces more sustainable and environmentally friendly.
          </p>
          <div className='btn-group'>
            <div className='first flex gap-2'>
              <Label title='Parks and urban forest' />
              <Label title='Bioswales and rain gardens' />
            </div>
            <div className='second flex gap-2'>
              <Label title='Forests and nature reserves' />
              <Label title='Green Transportation' />
            </div>
            <div className='third flex gap-2'>
              <Label title='Wetlands and constructed wetlands' />
              <Label title='Green streets' />
            </div>
            <div className='fourth flex gap-2'>
              <Label title='Green roofs and walls' />
              <Label title='Wildlife habitats and corridors' />
            </div>
          </div>
          <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline-block mt-7`}>Learn more</Button>
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap '>
        <div className='left-content w-full md:w-[35%] py-10'>
          <h2 className='text-[30px] font-HaasMd w-full '>Smart Irrigation Technology</h2>
          <p className='w-full text-[18px] my-2 leading-6 text-[#676767]'>
            There is a broad spectrum of smart irrigation technology that consumers can benefit from utilizing. Choosing the correct technology for
            the situation is essential to achieve potential water savings.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}>Learn more</Button>
          </div>
        </div>
        <div className='left-content w-full md:w-[50%] flex justify-end '>
          <img src={infra2} alt='' className='animate-[updown_2s_ease-in-out_infinite]' />
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap flex-col-reverse md:flex-row'>
        <div className='left-content w-full md:w-[35%] flex justify-end'>
          <img src={infra3} alt='' className='animate-[updown_2s_ease-in-out_infinite]' />
        </div>
        <div className='left-content w-full md:w-[35%] py-10'>
          <h2 className='text-[30px] font-HaasMd w-full'>Agriculture Plantation</h2>
          <p className='w-full text-[18px] my-2 leading-6 text-[#676767]'>
            Plantation agriculture is the clearing of forest or land to create an area of farming for one specific crop, which is grown on a large
            scale.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}>Learn more</Button>
          </div>
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap'>
        <div className='left-content w-full md:w-[35%] mt-10'>
          <h2 className='text-[30px] font-HaasMd w-full'>Vertical Farming</h2>
          <p className='w-full text-[18px] my-2 leading-6 text-[#676767]'>
            Vertical farming is an innovative method of growing crops and plants by stacking them on vertical multi-level racks inside a
            controlled-environment building.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}>Learn more</Button>
          </div>
        </div>
        <div className='left-content w-full md:w-[35%] py-10'>
          <img src={infra4} alt='' className='animate-[updown_2.8s_ease-in-out_infinite]' />
        </div>
      </div>
    </div>
  );
};

export default SectionInfrastructure;
