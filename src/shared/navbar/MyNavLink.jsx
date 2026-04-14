import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink 
        to={to}
      className={({ isActive }) =>
        `flex justify-center items-center gap-1 font-semibold py-2 px-4 rounded-sm w-1/3 md:w-full ${isActive ? "bg-[#244D3F] text-white" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
