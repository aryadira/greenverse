import React from 'react';
import { landingImg2, arrow } from "../../assets/img/";

const sectionBenefit = () => {
  return (
    <>
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
                <div className="card w-[313px] h-[190px] p-2 bg-white rounded-[30px]">
                    <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white w-[55px] py-[4px] px-[12px] rounded-full'>001</p>
                    <h3 className='my-[10px] mx-[10px] text-3xl font-bold'>Trusted</h3>
                    <p className='my-[10px] mx-[10px]'>we are trusted for service and purchases </p>
                </div>
                <div className="card w-[313px] h-[190px] p-2 bg-white rounded-[30px]">
                    <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white w-[55px] py-[4px] px-[12px] rounded-full'>002</p>
                    <h3 className='my-[10px] mx-[10px] text-3xl font-bold'>Guaranteed</h3>
                    <p className='my-[10px] mx-[10px]'>we are trusted for service and purchases </p>
                </div>
                <div className="card w-[313px] h-[190px] p-2 bg-white rounded-[30px]">
                    <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white w-[55px] py-[4px] px-[12px] rounded-full'>003</p>
                    <h3 className='my-[10px] mx-[10px] text-3xl font-bold'>Flexible</h3>
                    <p className='my-[10px] mx-[10px]'>we are trusted for service and purchases </p>
                </div>
                <div className="card w-[313px] h-[190px] p-2 bg-white rounded-[30px]">
                    <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white w-[55px] py-[4px] px-[12px] rounded-full'>004</p>
                    <h3 className='my-[10px] mx-[10px] text-3xl font-bold'>Quickly</h3>
                    <p className='my-[10px] mx-[10px]'>we are trusted for service and purchases </p>
                </div>
            </div>
            <div className="btn-right absolute bottom-0 right-0 flex items-center">
              <p className='mr-4 text-[#4A4A4A]'>Learn More</p>
              <img src={arrow} alt="" className='bg-white py-3 px-5 rounded-full'/>
            </div>
          </div>
      </div>
    </div>
     
    </>
  )
}

export default sectionBenefit