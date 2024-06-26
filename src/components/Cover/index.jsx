import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import "./style.css";
import { motion } from "framer-motion";

const Cover = () => {
  return (
    <div className="pt-14 ps-20">
      <h2 className="text-2xl  text-black  font-bold mb-8" id="text-skills">
        Skills
      </h2>
      <div id="skills" className="  text-black mb-10">
        <motion.div
          initial={{ opacity: 0, x: 100, y: 70 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
