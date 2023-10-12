import React from "react";
import { infra1, infra2, infra3, infra4 } from "../../assets/img/";
import check from "../../assets/img/check.png";
import ButtonGreen from "../parts/ButtonGreen";
import { Button } from "../parts";

const SectionInfrastructure = (props) => {
  return (
    <div className='wrapper'>
      <p className='text-[#676767] text-xl font-base'>And Then...</p>
      <p className='text-[32px] text-[#676767] max-w-md'>
        <span className='text-black'>Keep Exploring.</span> We have any solutions from our services!
      </p>

      <div className='container my-[100px] -top mt-8 grid lg:grid-cols-2 place-content-center col-reverse'>
        <div className='left mt-10'>
          <img src={infra1} alt='' />
        </div>
        <div className='right max-w-[581px]'>
          <h1 className='text-[32px]'>Green Infrastructure Design</h1>
          <p className='max-w-md text-[#676767] leading-tight'>
            Green infrastructure integrates plants and other natural elements to make urban spaces more sustainable and environmentally friendly.
          </p>
          <div className='btn-group'>
            <div className='first flex'>
              <ButtonGreen title='Parks and urban forest' />
              <div className='mx-1'></div>
              <ButtonGreen title='Bioswales and rain gardens' />
            </div>
            <div className='second flex'>
              <ButtonGreen title='Forests and nature reserves' />
              <div className='mx-1'></div>
              <ButtonGreen title='Green Transportation' />
            </div>
            <div className='third flex'>
              <ButtonGreen title='Wetlands and constructed wetlands' />
              <div className='mx-1'></div>
              <ButtonGreen title='Green streets' />
            </div>
            <div className='fourth flex'>
              <ButtonGreen title='Green roofs and walls' />
              <div className='mx-1'></div>
              <ButtonGreen title='Wildlife habitats and corridors' />
            </div>
          </div>
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap '>
        <div className='left-content w-full md:w-[35%] py-10'>
          <h2 className='text-[30px] font-semibold w-full'>Smart Irrigation Technology</h2>
          <p className='w-full text-[18px] my-2 leading-none text-[#676767]'>
            There is a broad spectrum of smart irrigation technology that consumers can benefit from utilizing. Choosing the correct technology for
            the situation is essential to achieve potential water savings.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`} children={`Learn more`} />
          </div>
        </div>
        <div className='left-content w-full md:w-[50%] flex justify-end '>
          <img src={infra2} alt='' />
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap flex-col-reverse md:flex-row'>
        <div className='left-content w-full md:w-[35%] flex justify-end'>
          <img src={infra3} alt='' />
        </div>
        <div className='left-content w-full md:w-[35%] py-10'>
          <h2 className='text-[30px] font-semibold w-full'>Agriculture Plantation</h2>
          <p className='w-full text-[18px] my-2 leading-none text-[#676767]'>
            Plantation agriculture is the clearing of forest or land to create an area of farming for one specific crop, which is grown on a large
            scale.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`} children={`Learn more`} />
          </div>
        </div>
      </div>

      <div className='container my-[100px] flex w-full justify-evenly items-center flex-wrap'>
        <div className='left-content w-full md:w-[35%] mt-10'>
          <h2 className='text-[30px] font-semibold w-full'>Vertical Farming</h2>
          <p className='w-full text-[18px] my-2 leading-none text-[#676767]'>
            Vertical farming is an innovative method of growing crops and plants by stacking them on vertical multi-level racks inside a
            controlled-environment building.
          </p>
          <div className='btn-left mt-10'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`} children={`Learn more`} />
          </div>
        </div>
        <div className='left-content w-full md:w-[35%] py-10'>
          <img src={infra4} alt='' />
        </div>
      </div>
    </div>
  );
};

export default SectionInfrastructure;
