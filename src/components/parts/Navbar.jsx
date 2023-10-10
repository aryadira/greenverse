import { Link } from "react-router-dom";
import { useState } from "react";
import { BoxContainer, SpacingLayout } from "../../layouts";
import { consul } from "../../assets/img";
import "./styles/navbar.css";
// import "./js/navbar";

const NavOverlayDown = ({ active, pages }) => {
  function refreshPage() {
    window.location.reload(false);
  }

  const isLink = (pages) => {
    if (pages == "Products") {
      return (
        <ul className="w-[20%] text-xl leading-10">
          <li onClick={refreshPage}>
            <Link to={"/products"} className="block mb-4">
              Discover All
            </Link>
            <Link to={"/products/seeds"} className="block">
              Seeds
            </Link>
            <Link to={"/products/materials"} className="block">
              Materials
            </Link>
            <Link to={"/products/tools"} className="block">
              Tools
            </Link>
            <Link to={"/products/fertilizers"} className="block">
              Fertilizer
            </Link>
          </li>
        </ul>
      );
    } else if (pages == "Services") {
      return (
        <ul className="w-[20%] text-xl leading-10">
          <li onClick={refreshPage}>
            <Link to={"/services"} className="block mb-4">
              Discover All
            </Link>
            <Link to={"/services/green-infrastructure"} className="block">
              Green infrastructure
            </Link>
            <Link to={"/services/smart-irrigation"} className="block">
              Smart irrigation
            </Link>
            <Link to={"/services/agriculture-plantation"} className="block">
              Agriculture plantation
            </Link>
            <Link to={"/services/vertical-farming"} className="block">
              Vertical farming
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="lg:w-[16%] w-10% text-xl leading-10">
          <li className="mb-5" onClick={refreshPage}>
            <Link to={"/products"} className="block">
              Products
            </Link>
            <Link to={"/products/seeds"} className="block">
              Seeds
            </Link>
            <Link to={"/products/materials"} className="block">
              Materials
            </Link>
            <Link to={"/products/tools"} className="block">
              Tools
            </Link>
            <Link to={"/products/fertilizers"} className="block">
              Fertilizer
            </Link>
          </li>
          <li onClick={refreshPage}>
            <Link to={"/services"} className="block">
              Services
            </Link>
            <Link to={"/services/green-infrastructure"} className="block">
              Green infrastructure
            </Link>
            <Link to={"/services/smart-irrigation"} className="block">
              Smart irrigation
            </Link>
            <Link to={"/services/agriculture-plantation"} className="block">
              Agriculture plantation
            </Link>
            <Link to={"/services/vertical-farming"} className="block">
              Vertical farming
            </Link>
          </li>
          <div className="lg:flex text-base hidden items-center">
            <Link to={"/signin"} className="mr-6">
              Sign in
            </Link>
            <Link
              to={"/signup"}
              className="bg-black text-white px-8 py-3 rounded-full"
            >
              Join Us
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
      }`}
    >
      <SpacingLayout>
        <BoxContainer>
          <nav className="navbar lg:flex block  justify-between py-3">
            <div className="link-title pr-[100px]  mb-2">
              <h2 className="font-HaasBd text-sm">{pages}</h2>
            </div>
            {isLink(pages)}
            <div>
              <img src={consul} alt="" className="w-[280px] hidden md:block" />
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
    <header className="w-full bg-white top-0 fixed z-10">
      <SpacingLayout>
        <BoxContainer>
          <nav className="navbar flex justify-between py-3 items-center z-20 bg-white">
            <div className="logo" onClick={refreshPage}>
              <Link to={"/"} className="font-HaasBd text-2xl">
                Greenverse
              </Link>
            </div>

            {/* desktop links */}
            <ul className="lg:flex text-base hidden">
              <li className="px-2">
                <div
                  onClick={() => {
                    overlayDown("Products");
                  }}
                  className="cursor-pointer"
                >
                  Products
                </div>
              </li>
              <li className="px-2">
                <div
                  onClick={() => {
                    overlayDown("Services");
                  }}
                  className="cursor-pointer"
                >
                  Services
                </div>
              </li>
              <li className="px-2">
                <div className="cursor-pointer">Topics</div>
              </li>
              <li className="px-2">
                <div className="cursor-pointer">Consultation</div>
              </li>
            </ul>
            <div className="lg:flex text-base hidden items-center">
              <Link to={"/signin"} className="mr-6">
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="bg-black text-white px-8 py-3 rounded-full"
              >
                Join Us
              </Link>
            </div>

            {/* mobile links */}
            <ul className="mobile-nav hidden w-full">
              <li>
                <div
                  className="menu-icon-container"
                  onClick={() => overlayDown("")}
                >
                  <div className="menu-icon">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
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
