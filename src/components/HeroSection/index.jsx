import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="py-3 fixed ps-80 ms-60">
      <div className="pt-20">
        <h1 className="text-6xl  pb-2 ps-10 font-bold transition duration-150 ease-in-out animate-bounce ">
          Hello !
        </h1>
        <div className="text-6xl  pb-4 ps-10 font-bold transition duration-150 ease-in-out ">
        <TypeAnimation
          sequence={[
            `I'm\nAkbar Adi Wibowo ` , 400 , "" ,
          ]}
          style={{ whiteSpace: "pre-line" }}
          repeat={Infinity}
        />
        </div>
        <h1 className="pt-2 pb-2 ps-10 text-4xl font-semibold animate-bounce">
          Front End Web Developer
        </h1>
        {/* <p className="ps-10 pt-2 text-base  ">
          I'm join front end developer
          bootcamp at Binar Academy in October 2023 - February 2024. During in
          this bootcamp I learn about HTML, CSS, Javascript, React, Next js,
          Bootstarp, Tailwind, Responsive web design & build car rental website
          for final project.
        </p> */}
    
      </div>
      {/* <div>
        <img className="h-98 me-20 " src={foto} alt="test" />
      </div> */}
    </div>
  );
};

export default HeroSection;
