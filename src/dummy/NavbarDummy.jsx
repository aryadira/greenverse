import React from "react";

const NavbarDummy = () => {
  return (
    <nav className='flex justify-between h-[74px] items-center px-24'>
      <div className='logo'>
        <h2>Greenverse</h2>
      </div>

      <ul className='flex font-medium'>
        <li className='px-2'>
          <a href='#'>Products</a>
          <Link to={"/products/seeds"}>Seeds</Link>
          <Link to={"/products/materials"}>Materials</Link>
          <Link to={"/products/tools"}>Tools</Link>
          <Link to={"/products/Fertilizers"}>Fertilizer</Link>
        </li>
        <li className='px-2'>
          <a href='#'>Services</a>
          <Link to={"/services/green-infrastructure"}>Green infrastructure</Link>
          <Link to={"/services/smart-irrigation"}>Smart irrigation</Link>
          <Link to={"/services/agriculture-plantation"}>Agriculture plantation</Link>
          <Link to={"/services/vertical-farming"}>Vertical farming</Link>
        </li>
        <li className='px-2'>
          <a href='#'>Topics</a>
        </li>
        <li className='px-2'>
          <a href='#'>Consultations</a>
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
  );
};

export default NavbarDummy;
