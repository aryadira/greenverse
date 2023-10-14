import { Link } from "react-router-dom";
import { useState } from "react";
import { BoxContainer, SpacingLayout } from "../../layouts";
import { consul } from "../../assets/img";
import "./styles/navbar.css";
import Button from "./Button";
// import "./js/navbar";

const NavOverlayDown = ({ active, pages }) => {
  function refreshPage() {
    window.location.reload(false);
  }

  const isLink = (pages) => {
    if (pages == "Products") {
      return (
        <ul className='w-[20%] text-xl leading-10 block'>
          <li onClick={refreshPage}>
            <Link to={"/products"} className='links mb-4 max-w-fit block'>
              Discover All
            </Link>
            <Link to={"/products/brassicas"} className='links max-w-fit block'>
              Brassicas
            </Link>
            <Link to={"/products/cover-crop-mixes"} className='links max-w-fit block'>
              Cover Crop Mixes
            </Link>
            <Link to={"/products/grasses-millets-sorghums"} className='links max-w-fit block'>
              Grasses Millets Sorghums
            </Link>
            <Link to={"/products/grains"} className='links max-w-fit block'>
              Grains
            </Link>
            <Link to={"/products/legumes"} className='links max-w-fit block'>
              Legumes
            </Link>
          </li>
        </ul>
      );
    } else if (pages == "Services") {
      return (
        <ul className='w-[20%] text-xl leading-10'>
          <li onClick={refreshPage}>
            <Link to={"/services"} className='mb-4 links max-w-fit block'>
              Discover All
            </Link>
            <Link to={"/services/green-infrastructure"} className='links max-w-fit block'>
              Green infrastructure
            </Link>
            <Link to={"/services/smart-irrigation"} className='links max-w-fit block'>
              Smart irrigation
            </Link>
            <Link to={"/services/agriculture-plantation"} className='links max-w-fit block'>
              Agriculture plantation
            </Link>
            <Link to={"/services/vertical-farming"} className='links max-w-fit block'>
              Vertical farming
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='lg:w-[16%] w-10% text-xl leading-10'>
          <li className='mb-5'>
            <Link to={"/products"} className='links max-w-fit block'>
              Products
            </Link>
            <Link to={"/products/brassicas"} className='links max-w-fit block'>
              Brassicas
            </Link>
            <Link to={"/products/cover-crop-mixes"} className='links max-w-fit block'>
              Cover Crop Mixes
            </Link>
            <Link to={"/products/grasses-millets-sorghums"} className='links max-w-fit block'>
              Grasses Millets Sorghums
            </Link>
            <Link to={"/products/grains"} className='links max-w-fit block'>
              Grains
            </Link>
            <Link to={"/products/legumes"} className='links max-w-fit block'>
              Legumes
            </Link>
          </li>
          <li onClick={refreshPage}>
            <Link to={"/services"} className='links'>
              Services
            </Link>
            <Link to={"/services/green-infrastructure"} className='links'>
              Green infrastructure
            </Link>
            <Link to={"/services/smart-irrigation"} className='links'>
              Smart irrigation
            </Link>
            <Link to={"/services/agriculture-plantation"} className='links'>
              Agriculture plantation
            </Link>
            <Link to={"/services/vertical-farming"} className='links'>
              Vertical farming
            </Link>
          </li>
          <div className='lg:flex text-base hidden items-center'>
            <Link to={"/signin"} className='mr-6'>
              Sign in
            </Link>
            <Link to={"/signup"}>
              <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a]`} children={`Get Started`} />
            </Link>
          </div>
        </ul>
      );
    }
  };

  return (
    <div
      className={`clicked-link w-full bg-white border-b backdrop-blur-sm bg-opacity-80 absolute transition duration-500 ease-in-out delay-100 py-5 -z-10 ${
        active == "" ? "-translate-y-[800px]" : ""
      }`}>
      <SpacingLayout>
        <BoxContainer>
          <nav className='navbar lg:flex  justify-between py-3'>
            <div className='link-title pr-[100px]  mb-2'>
              <h2 className='font-HaasBd text-sm'>{pages}</h2>
            </div>
            {isLink(pages)}
            <div>
              <img src={consul} alt='' className='w-[280px] hidden md:block' />
            </div>
          </nav>
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPage, setIsPage] = useState("");

  const overlayDown = (pages) => {
    setIsActive(!isActive);
    setIsPage(pages);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <header className='w-full bg-white top-0 fixed z-10'>
      <SpacingLayout>
        <BoxContainer>
          <nav className='navbar flex justify-between py-3 items-center z-20 bg-white'>
            <div className='logo' onClick={refreshPage}>
              <Link to={"/"} className='font-HaasBd text-2xl'>
                Greenverse
              </Link>
            </div>

            {/* desktop links */}
            <ul className='lg:flex text-base hidden'>
              <li className='mx-2 relative '>
                <div
                  onClick={() => {
                    overlayDown("Products");
                  }}
                  className='cursor-pointer links'>
                  Products
                </div>
              </li>
              <li className='mx-2 relative'>
                <div
                  onClick={() => {
                    overlayDown("Services");
                  }}
                  className='cursor-pointer links'>
                  Services
                </div>
              </li>
              <li className='mx-2 relative'>
                <div className='cursor-pointer links'>Topics</div>
              </li>
              <li className='mx-2 relative'>
                <div className='cursor-pointer links'>Consultation</div>
              </li>
            </ul>
            <div className='lg:flex text-base hidden items-center'>
              <Link to={"/signin"} className='mr-6'>
                Sign in
              </Link>
              <Link to={"/signup"}>
                <Button className={`bg-[#313A36] text-white hover:bg-[#0f231a]`} children={`Join Us`} />
              </Link>
            </div>

            {/* mobile links */}
            <ul className='mobile-nav hidden w-full'>
              <li onClick={refreshPage}>
                <div className='menu-icon-container' onClick={() => overlayDown("")}>
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
      <NavOverlayDown active={isActive} pages={isPage} />
    </header>
  );
};

export default Navbar;
