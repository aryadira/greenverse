/* eslint-disable react/no-unescaped-entities */
import { consul } from "../../assets/img";
import Button from "../parts/Button";

const SectionConsultation = () => {
  return (
    <div className='flex justify-between gap-5 md:flex-nowrap flex-wrap'>
      <div className='left bg-white w-full md:w-1/2 rounded-[30px] py-12 px-12'>
        <div className='wrapper'>
          <p className='text-[#676767] text-xl font-base'>Don’t know your plan?</p>
          <p className='text-[32px] text-[#676767] max-w-md leading-tight'>
            <span className='text-black'>Let’s consultation.</span>
            You can consultation what you needs
          </p>
          <div className='mt-14'>
            <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`} link='/consultation'>
              Consultation Now!
            </Button>
          </div>
        </div>
      </div>
      <div className='right w-full md:w-1/2'>
        <img src={consul} alt='' className='h-full' />
      </div>
    </div>
  );
};

export default SectionConsultation;
