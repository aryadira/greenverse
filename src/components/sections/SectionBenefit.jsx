import React from 'react';
import { landingImg2, arrow } from "../../assets/img/";
import { benefits } from "../../constants/contents/ongoing";

const sectionBenefit = () => {
  return (
    <div className='wrapper'>
      <div className="title text-center">
        <p className='text-[#7D7D7D]'>Reasons.</p>
        <h1 className='text-[50px]'>Why should choose Greenverse?</h1>
      </div>
      <div className="container flex mt-10 justify-between items-start w-full h-[60vh]">
          <div className='bg-white w-[630px] h-full relative flex justify-center rounded-[30px]'>
              <img src={landingImg2} alt="" className="w-[70%] absolute bottom-0" />
          </div>
          <div className="relative container-right h-full w-[50%]">
            <div className="right-benefit gap-3 flex flex-wrap">
              {benefits.map((benefit) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card w-[313px] h-[190px] p-2 bg-white rounded-[30px]">
                    <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white w-[55px] py-[4px] px-[12px] rounded-full'>{benefit.id}</p>
                    <h3 className='my-[10px] mx-[10px] text-3xl font-bold'>{benefit.title}</h3>
                    <p className='my-[10px] mx-[10px]'>{benefit.desc} </p>
                </div>
              ))} 
            </div>
          </div>
      </div>
    </div>
  )
}

export default sectionBenefit