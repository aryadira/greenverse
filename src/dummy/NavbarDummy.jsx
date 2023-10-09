import React from "react";

const NavbarDummy = () => {
  return (
    <nav className="flex justify-between h-[74px] items-center px-24">
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className="flex font-medium">
        <li className="px-2">
          <a href="#">Products</a>
        </li>
        <li className="px-2">
          <a href="#">Services</a>
        </li>
        <li className="px-2">
          <a href="#">Topics</a>
        </li>
        <li className="px-2">
          <a href="#">Consultations</a>
        </li>
      </ul>

      <div className="flex font-medium items-center">
        <a href="#" className="mr-6">
          Sign Up
        </a>
        <a href="#" className="bg-black text-white px-8 py-3 rounded-full">
          Join Us
        </a>
      </div>
    </nav>
  );
};

export default NavbarDummy;
