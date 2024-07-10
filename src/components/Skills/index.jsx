import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="lg:pt-20 pt-10 lg:pe-40 ps-10"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h2
        className="lg:text-3xl md:text-3xl lg:pb-4 underline underline-offset-8 text-2xl lg:text-end  font-bold mb-8"
        id="text-skills"
      >
        SKILLS
      </h2>
      <div id="skills" className=" mb-40">
        <div className="lg:text-5xl text-4xl  mb-10 gap-4 grid grid-cols-4 lg:flex lg:justify-end">
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <IoLogoJavascript />
          <FaReact />
          <FaBootstrap />
          <RiTailwindCssFill />
          <FaGitAlt />
          <SiRedux />
          <RiNextjsFill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
