import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="pt-20 fixed ps-80">
      <div className="flex gap-2 pt-12 ps-60">
        <Link to="/">
          <button className="text-white text-2xl border-3 rounded-lg  w-60 h-10  bg-black border-black">
            About Me
          </button>
        </Link>
        <Link>
          <button className="text-white text-2xl border-3 rounded-lg  w-60 h-10 bg-black  border-black  ">
            Projects
          </button>
        </Link>
      </div>
      <div className="pt-10 ps-60">
      <h1 className="text-3xl pb-4 pt-4 ps-1 font-bold">Hello !</h1>
      <h2 className="text-3xl  pb-4 ps-1 font-bold">I'm Akbar Adi Wibowo</h2>
      <h3 className="  ps-1 text-2xl font-semibold ">Front End Web Developer</h3>
      </div>
  
    </div>
  );
};

export default Menu;
