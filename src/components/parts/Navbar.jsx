import { Link } from "react-router-dom";
import { BoxContainer, SpacingLayout } from "../../layouts";

const Navbar = () => {
  return (
    <header>
      <SpacingLayout>
        <BoxContainer>
          <nav className='flex justify-between py-3 items-center'>
            <div className='logo'>
              <h2>Greenverse</h2>
            </div>
            <ul className='flex font-medium'>
              <li className='px-2'>
                <Link to={"/"}>Home</Link>
              </li>
              <div>
                <li className='px-2'>
                  <Link to={"/products"}>Products</Link>
                </li>
              </div>
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
            <div className='flex font-medium items-center'>
              <a href='#' className='mr-6'>
                Sign Up
              </a>
              <a href='#' className='bg-black text-white px-8 py-3 rounded-full'>
                Join Us
              </a>
            </div>
          </nav>
        </BoxContainer>
      </SpacingLayout>
    </header>
  );
};

export default Navbar;
