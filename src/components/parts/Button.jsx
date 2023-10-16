/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, children, icon, link, href, ...props }) => {
  return (
    <div className={`rounded-[40px] cursor-pointer px-5 py-3 text-center transition-all ${className}`}>
      {link ? (
        <Link to={link} onClick={() => window.scrollTo(0, 0)}>
          {children}
        </Link>
      ) : (
        <a href={href}>{children}</a>
      )}
    </div>
  );
};

export default Button;
