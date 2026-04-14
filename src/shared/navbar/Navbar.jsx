import React from "react";
import LogoImg from "../../assets/images/logo.png"
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import MyNavLink from "./MyNavLink";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="flex justify-between container mx-auto py-5">
        <img src={LogoImg} alt="" />
        <ul className="flex gap-5">
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
    </nav>
  );
};

export default Navbar;
