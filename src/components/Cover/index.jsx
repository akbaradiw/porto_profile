import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const Cover = () => {
  return (
    <div className="pt-14">
      <h1 className="text-2xl  text-black flex justify-center font-bold mb-8">
        SKILLS
      </h1>
      <div className=" shadow-lg shadow-black 	  rounded-xl border-3 border-dashed border-black p-5 text-black">
        <div className="text-5xl mb-10 animate-bounce  flex gap-2">
          <IoLogoHtml5 />
          <IoLogoCss3 />
          <IoLogoJavascript />
          <FaReact />
        </div>
        <div className="text-5xl flex gap-2 animate-bounce">
          <FaBootstrap />
          <RiTailwindCssFill />
          <FaGitAlt />
          <SiRedux />
        </div>
      </div>
    </div>
  );
};

export default Cover;
