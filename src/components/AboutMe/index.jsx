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
    <div className=" mb-10">
      <div
        className=" lg:px-40 pt-10 grid px-10 lg:pt-20"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className=" pb-4 lg:text-3xl md:text-3xl text-2xl font-bold  underline underline-offset-8 ">
          About Me
        </h2>
        <p id="paragraph" className="lg:pt-4   lg:text-xl md:text-xl text-lg">
          Front End Developer with a solid foundation in HTML, CSS, and
          JavaScript, complemented by training at Binar Academy. Eager to apply
          my skills in a dynamic team environment to create engaging and
          user-friendly web applications. I also have four years of experience
          as a Business Development Administrator specializing in data entry, I
          bring a strong background in administrative support.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default AboutMe;
