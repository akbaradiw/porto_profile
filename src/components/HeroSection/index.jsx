import React from "react";
import foto from "../../assets/fotoku.png";
const HeroSection = () => {
  return (
    <div className="flex justify-around py-3">
      <div className="pt-20">
        <h1 className="text-4xl  pb-2 ps-10">Akbar Adi Wibowo</h1>
        <h2 className="pb-2 ps-10"> Junior Front End Web Developer</h2>
        <p className="ps-10 text-base">
          Hello my name is Akbar Adi Wibowo, I'm join front end developer
          bootcamp at Binar Academy in October 2023 - February 2024. During in
          this bootcamp I learn about HTML, CSS, Javascript, React, Next js,
          Bootstarp, Tailwind, Responsive web design and build car rental
          website for final project.
        </p>
      </div>
      <div>
        <img className="h-98 me-20" src={foto} alt="test" />
      </div>
    </div>
  );
};

export default HeroSection;
