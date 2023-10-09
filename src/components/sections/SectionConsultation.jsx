import React from 'react';
import { consul } from "../../assets/img/index";

const SectionConsultation = () => {
  return (
    <div className='wrapper'>
        <div className="container flex justify-evenly">
            <div className="left-content bg-white w-[50%] flex justify-center items-center rounded-[30px]">
                <div className='w-[550px] h-[45%] relative'>
                    <p className='text-[15px] text-[#676767]'>Don’t know your plan?</p>
                    <h3 className='text-[30px] leading-8 mt-[2px]'>Let’s consultation. <span className='text-[#676767]'>You can consultation what you needs</span></h3>
                    <div className="btn-left">
                        <a href="" className='bg-[#313A36] text-white py-2 px-3 absolute bottom-0 rounded-full'>Consultation Now!</a>    
                    </div>
                </div>
            </div>
            <div className="right-content">
                <img src={consul} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionConsultation