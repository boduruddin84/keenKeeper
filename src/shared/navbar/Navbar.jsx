import React from "react";
import LogoImg from "../../assets/images/logo.png"
import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="flex justify-between container mx-auto py-5">
        <img src={LogoImg} alt="" />
        <ul className="flex gap-5">
            <li className="flex justify-center items-center gap-1"><IoHomeOutline /><NavLink> Home</NavLink></li>
            <li className="flex justify-center items-center gap-1"><CiClock2 /><NavLink>Timeline</NavLink></li>
            <li className="flex justify-center items-center gap-1"><ImStatsDots /><NavLink>Stats</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
