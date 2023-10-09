import { Link } from "react-router-dom";
import { BoxContainer, SpacingLayout } from "../../layouts";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <header className='w-full block bg-red-100'>
      <SpacingLayout>
        <BoxContainer>
          <nav className='navbar flex justify-between py-3 items-center'>
            <div className='logo'>
              <h2 className='font-HaasBd text-2xl'>Greenverse</h2>
            </div>

            {/* desktop links */}
            <ul className='lg:flex text-base hidden'>
              <li className='px-2'>
                <Link to={"/products"}>Products</Link>
              </li>
              <li className='px-2'>
                <Link to={"/services"}>Services</Link>
              </li>
              <li className='px-2'>
                <Link to={"/topics"}>Topics</Link>
              </li>
              <li className='px-2'>
                <Link to={"/consultation"}>Consultation</Link>
              </li>
            </ul>
            <div className='lg:flex text-base hidden items-center'>
              <Link to={"/signin"} className='mr-6'>
                Sign in
              </Link>
              <Link to={"/signup"} className='bg-black text-white px-8 py-3 rounded-full'>
                Join Us
              </Link>
            </div>

            {/* mobile links */}
            <ul className='mobile-nav hidden w-full '>
              <li>
                <div className='menu-icon-container '>
                  <div className='menu-icon'>
                    <span className='line-1'></span>
                    <span className='line-2'></span>
                  </div>
                </div>
              </li>

              <li>
                <a href='#' className='link-logo'></a>
              </li>

              <li>
                <a href='' className='link-bag'></a>
              </li>
            </ul>
          </nav>
        </BoxContainer>
      </SpacingLayout>

      {/* clicked links */}
      <div className='clicked-link bg-red-500 py-5'>
        <SpacingLayout>
          <BoxContainer>
            <nav className='navbar flex justify-between py-3 items-center'>
              <div className='link-title'>
                <h2 className='font-HaasBd text-sm'>Products</h2>
              </div>
              <ul className='text-base bg-blue-200  w-full'>
                <li>
                  <Link to={"/products"} className='block'>
                    Products
                  </Link>
                  <Link to={"/products/seeds"} className='block'>
                    Seeds
                  </Link>
                  <Link to={"/products/materials"} className='block'>
                    Materials
                  </Link>
                  <Link to={"/products/tools"} className='block'>
                    Tools
                  </Link>
                  <Link to={"/products/fertilizers"} className='block'>
                    Fertilizer
                  </Link>
                </li>
                <li className='bg-green-500 '>
                  <Link to={"/services"} className='block'>
                    Services
                  </Link>
                  <Link to={"/services/green-infrastructure"} className='block'>
                    Green infrastructure
                  </Link>
                  <Link to={"/services/smart-irrigation"} className='block'>
                    Smart irrigation
                  </Link>
                  <Link to={"/services/agriculture-plantation"} className='block'>
                    Agriculture plantation
                  </Link>
                  <Link to={"/services/vertical-farming"} className='block'>
                    Vertical farming
                  </Link>
                </li>
              </ul>
              <div>
                <img src='' alt='' />
              </div>
            </nav>
          </BoxContainer>
        </SpacingLayout>
      </div>
    </header>
  );
};

export default Navbar;
