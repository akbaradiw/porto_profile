import React from "react";
import Skills from "../Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="lg:flex lg:justify-between mb-10">
      <div
        className=" lg:px-40 pt-10 grid px-10 lg:pt-20"
        data-aos ="fade-right" data-aos-duration="1000"
      >
        <h2 className=" pb-4 lg:text-3xl md:text-3xl text-2xl font-bold  underline underline-offset-8 ">
          About Me
        </h2>
        <p id="paragraph" className="lg:pt-4   lg:text-xl md:text-xl text-lg">
          My Name is Akbar Adi Wibowo, i have 4 years work experience as
          business development administrator. In my current activity i learn
          about Front End Development to improve my skill after graduate from
          Front End Engineering bootcamp at Binar Academy in October 2023 -
          February 2024. During bootcamp I learned to create websites from the
          basics starting from HTML, CSS, Javascript & learned to use React JS.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;
