import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import kuuga from "../../assets/path3356.png";
import flower from "../../assets/rainbow_flower.png";
import "./style.css";
const NavbarComp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div>
      <nav className="bg-black p-4 fixed w-full top-0 z-10  " id="navbar">
        <div className="container mx-auto flex justify-between items-center">
          {/* <div>
           <img id="flower" src={flower} alt="kuuga" className="w-10" />
          </div> */}
          <div className="hidden md:block">
            <NavLink to="/">
            <a
              href="#"
              className="text-gray-50 hover:text-yellow-300 px-3 py-2 rounded-md "
            >
              Home
            </a>
            </NavLink>
            <NavLink className="transition-all duration-300 ease-in-out" to="/about">
            <a
              href="#"
              className="text-gray-50 hover:text-yellow-300 px-3 py-2 rounded-md  "
            >
              About
            </a>
            </NavLink>
            <NavLink to="/project">
            <a
              href="#"
              className="text-gray-50 hover:text-yellow-300 px-3 py-2 rounded-md"
            >
              Project
            </a>
            </NavLink>

          </div>
          <div className="sm:hidden" id="mobile-menu">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-yellow-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
        {/* Conditional rendering of mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-black" >
            <div className="px-2 py-3" >
              <NavLink to="/">
              <a
                href="#"
                className="block text-gray-50 hover:text-yellow-300 px-4 py-2 rounded-md"
              >
                Home
              </a>
              </NavLink>
              <NavLink to="/about">
              <a
                href="#"
                className="block text-gray-50 hover:text-yellow-300 px-4 py-2 rounded-md"
              >
                About
              </a>
              </NavLink>
              <NavLink to="/project">
              <a
                href="#"
                className="block text-gray-50 hover:text-yellow-300 px-4 py-2 rounded-md"
              >
                Project
              </a>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComp;
