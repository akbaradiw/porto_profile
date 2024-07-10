import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { VscLaw } from "react-icons/vsc";

const NavbarComp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav
        className="bg-stone-800  shadow-md lg:p-3 fixed w-full top-0 z-10 "
        id="navbar"
      >
        <div className="lg:flex hidden">
          <NavLink to="/">
            <a
              href="#"
              className="text-stone-800 border-none bg-yellow-200 font-semibold hover:text-black   hover:bg-white px-2 py-1 mx-2 rounded-sm "
            >
              Home
            </a>
          </NavLink>

          <NavLink to="/project">
            <a
              href="#"
              className="text-stone-800 border-none bg-blue-400 font-semibold hover:text-black mx-2  hover:bg-white px-2 py-1 rounded-sm "
            >
              Project
            </a>
          </NavLink>
          <NavLink to="/contact">
            <a
              href="#"
              className="text-stone-800 border-none bg-red-500 font-semibold hover:text-black mx-2  hover:bg-white px-2 py-1 rounded-sm "
            >
              Contact
            </a>
          </NavLink>
        </div>
      </nav>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleMobileMenu()}
          className="text-stone-800 z-50 fixed focus:outline-none hover:cursor-pointer  top-4 left-2 transition-opacity duration-200"
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="lg:hidden py-9 px-4">
        <div
          className={`fixed bottom-0 right-0 left-0 w-full z-50 bg-stone-800 p-4 text-white transition-transform duration-500   ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ul className="flex justify-between md:justify-around">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl hover:scale-110 hover:cursor-pointer hover:text-yellow-400"
              >
                <IoHomeOutline className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/project"}
                className="flex items-center flex-col justify-center md:text-2xl hover:scale-110 hover:cursor-pointer hover:text-yellow-400"
              >
                <GoProjectRoadmap className="text-2xl" />
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="flex items-center flex-col justify-center md:text-2xl hover:scale-110 hover:cursor-pointer hover:text-yellow-400"
              >
                <TiContacts className="text-2xl" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
