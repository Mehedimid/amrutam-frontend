import React from "react";
import Button1 from "../buttons/Button1";
import Button2 from "../buttons/Button2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass =
    "text-lg text-[#474747] font-medium hover:text-primary transition duration-200";

  const navlinks = (
    <>
      <NavLink to={"/"} className={navClass}>
        Home
      </NavLink>
      <NavLink to={"/find-doctors"} className={navClass}>
        Find Doctors
      </NavLink>
      <NavLink to={"/about-us"} className={navClass}>
        About Us
      </NavLink>
    </>
  );

  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-secondary"
            >
              {navlinks}
              <div className="md:hidden w-10/12 my-5">
              <Button1>Sign-Up</Button1>
            </div>
            </ul>
          </div>
          <h1 className="text-4xl font-semibold text-primary hidden md:block">
            A M R U T A M
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="gap-5 flex flex-col md:flex-row">
            {" "}
            <div>
              <Button2>Login</Button2>
            </div>
            <div className="hidden md:block">
              <Button1>Sign-Up</Button1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
