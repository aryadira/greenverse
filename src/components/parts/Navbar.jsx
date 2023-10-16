import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BoxContainer, SpacingLayout } from "../../layouts";
import { consul } from "../../assets/img";
import "./styles/navbar.css";
import Button from "./Button";
// import "./js/navbar";

const NavOverlayDown = ({ active, pages }) => {
  const isLink = (pages) => {
    if (pages == "Products") {
      return (
        <ul className='w-[20%] text-xl leading-10 block'>
          <li>
            <NavLink to={"/products"} className='links mb-4 max-w-fit block'>
              Discover All
            </NavLink>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/brassica"} className='links max-w-fit block'>
              Brassica
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/cover-crop-mixes"} className='links max-w-fit block'>
              Cover Crop Mixes
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/grasses-millets-sorghums"} className='links max-w-fit block'>
              Grasses Millets Sorghums
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/grains"} className='links max-w-fit block'>
              Grains
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/legumes"} className='links max-w-fit block'>
              Legumes
            </Link>
          </li>
        </ul>
      );
    } else if (pages == "Services") {
      return (
        <ul className='w-[20%] text-xl leading-10'>
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services"} className='mb-4 links max-w-fit block'>
              Discover All
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/green-infrastructure"} className='links max-w-fit block'>
              Green infrastructure
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/smart-irrigation"} className='links max-w-fit block'>
              Smart irrigation
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/agriculture-plantation"} className='links max-w-fit block'>
              Agriculture plantation
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/vertical-farming"} className='links max-w-fit block'>
              Vertical farming
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='lg:w-[16%] text-xl leading-10 '>
          <li className='mb-5'>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products"} className='font-HaasBd text-sm'>
              Products
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/brassica"} className='links max-w-fit block text-lg'>
              Brassica
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/cover-crop-mixes"} className='links max-w-fit block text-lg'>
              Cover Crop Mixes
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/grasses-millets-sorghums"} className='links max-w-fit block text-lg'>
              Grasses Millets Sorghums
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/grains"} className='links max-w-fit block text-lg'>
              Grains
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/products/legumes"} className='links max-w-fit block text-lg'>
              Legumes
            </Link>
          </li>
          <li>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services"} className='font-HaasBd text-sm'>
              Services
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/green-infrastructure"} className='links max-w-fit block text-lg'>
              Green infrastructure
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/smart-irrigation"} className='links max-w-fit block text-lg'>
              Smart irrigation
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/agriculture-plantation"} className='links max-w-fit block text-lg'>
              Agriculture plantation
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/services/vertical-farming"} className='links max-w-fit block text-lg'>
              Vertical farming
            </Link>
          </li>
          <div className='flex text-base items-center mt-5 border-t  py-5'>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/signin"} className='mr-6'>
              Sign in
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/signup"}>
              <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a]`}>Join Us</Button>
            </Link>
          </div>
        </ul>
      );
    }
  };

  // overdown

  return (
    <div
      className={`clicked-link w-full bg-white border-b backdrop-blur-md bg-opacity-90 absolute transition duration-500 ease-in-out delay-100 py-5 -z-10 ${
        active == "" ? "-translate-y-[800px]" : ""
      } `}>
      <SpacingLayout>
        <BoxContainer>
          <nav className='navbar lg:flex justify-between py-3'>
            <div className='link-title pr-[100px]  mb-2'>
              <h2 className='font-HaasBd text-sm'>{pages}</h2>
            </div>
            {isLink(pages)}
            <div>
              <img src={consul} alt='' className='w-[280px] hidden lg:block' />
            </div>
          </nav>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);
  const [isPage, setIsPage] = useState("");

  const overlayDownOn = (pages) => {
    setIsActive(!isActive);
    setIsPage(pages);
  };

  const overlayDownOff = () => {
    setIsActive(false);
  };

  return (
    <header className={`w-full bg-white top-0 fixed z-10`} id='#top' onMouseLeave={() => setIsActive(false)}>
      <SpacingLayout>
        <BoxContainer>
          <nav className='navbar flex justify-between py-3 items-center z-20 bg-white'>
            <div className='logo'>
              <Link onClick={() => window.scrollTo(0, 0)} to={"/"} className='font-HaasBd text-2xl'>
                Greenverse
              </Link>
            </div>

            {/* desktop links */}
            <ul className='lg:flex text-base hidden'>
              <li className='mx-2 relative '>
                <div
                  onMouseEnter={() => {
                    overlayDownOn("Products");
                  }}
                  className='cursor-pointer links'>
                  Products
                </div>
              </li>
              <li className='mx-2 relative'>
                <div
                  onMouseEnter={() => {
                    overlayDownOn("Services");
                  }}
                  className='cursor-pointer links'>
                  Services
                </div>
              </li>
              <li className='mx-2 relative'>
                <div className='cursor-pointer links'>Topics</div>
              </li>
              <li className='mx-2 relative'>
                <div className='cursor-pointer links'>
                  <Link onClick={() => window.scrollTo(0, 0)} to={"/consultation"}>
                    Consultation
                  </Link>
                </div>
              </li>
            </ul>
            <div className='lg:flex text-base hidden items-center'>
              <Link onClick={() => window.scrollTo(0, 0)} to={"/signin"} className='mr-6'>
                Sign in
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to={"/signup"}>
                <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a]`}>Join Us</Button>
              </Link>
            </div>

            {/* mobile links */}
            <ul className='mobile-nav hidden w-full'>
              <li>
                <div className='menu-icon-container' onClick={() => overlayDownOn()}>
                  <div className='menu-icon'>
                    <span className='line-1'></span>
                    <span className='line-2'></span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </BoxContainer>
      </SpacingLayout>
      <NavOverlayDown active={isActive} pages={isPage} onMouseEnter={isActive} />
    </header>
  );
};

export default Navbar;
