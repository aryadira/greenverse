import { Link } from "react-router-dom";
import Button from "./Button";
import Marquee from "./Marquee";

const Footer = () => {
  return (
    <div className='bg-[#222222] text-white border-t-[1px] border-white border-opacity-30 mt-20'>
      <Marquee>ENJOY OUR PRODUCTS AND SERVICES</Marquee>
      <div className='footer border-t'>
        <div className='wrapper py-12 flex justify-between px-16 flex-wrap'>
          <div className='left'>
            <Link to={"/"} className='text-3xl font-HaasBd'>
              Greenverse
            </Link>
          </div>
          <div className='center text-xl'>
            <ul className='flex flex-col gap-4'>
              <Link to={"/products"} className='links after:bg-white max-w-fit'>
                Products
              </Link>
              <Link to={"/services"} className='links after:bg-white max-w-fit'>
                Services
              </Link>
              <Link to={"/consultation"} className='links after:bg-white max-w-fit'>
                Consultation
              </Link>
            </ul>
          </div>
          <div className='right w-full max-w-[295px] mt-12 md:mt-0'>
            <ul className='flex flex-col'>
              <div className='text'>
                <h1>Email</h1>
                <p className='text-[#969696]'>greenverse@verses.com</p>
              </div>
              <div className='text mt-4'>
                <h1>Phone</h1>
                <p className='text-[#969696]'>+62 98823920323</p>
              </div>
              <div className='btn w-full'>
                <Button className={`bg-white border text-black hover:-translate-y-2 mt-7`} link='/signup'>
                  Join Us
                </Button>
                <Button className={`bg-transparet text-white border-[1px] hover:-translate-y-2 mt-7`} href='#top'>
                  Back to top
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
