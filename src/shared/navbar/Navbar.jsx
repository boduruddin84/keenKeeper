import React from "react";
import LogoImg from "../../assets/images/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import MyNavLink from "./MyNavLink";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm ">
      <div className="container mx-auto">
        <div className="ml-20 md:ml-0 md:flex md:flex-wrap justify-between  py-5">
          <img className="mb-3 md:mb-0" src={LogoImg} alt="" />
          <ul className="md:flex gap-5 flex-wrap">
            <li>
              <MyNavLink to={"/"}>
                <IoHomeOutline /> Home
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/timeline"}>
                <CiClock2 /> Timeline
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/stats"}>
                <ImStatsDots /> Stats
              </MyNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
