import React from "react";
import fotoku from "../../assets/fotoku.png";
import fotoprofil from "../../assets/fotoprofil.png";
import foto from "../../assets/foto.png";
import "./style.css";
import { motion } from "framer-motion";
import responsive from "../../responsive";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
const ImageComp = () => {
  
  return (
    <div className="pe-80 mt-20" id="imageComp">
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img
          id="fotoku"
          className="rounded-md  border-black pb-6 border-5 border-double "
          src={foto}
          alt="test"
        />
        <div className="flex justify-start gap-3 pt-3 text-3xl " id="contact">
          <a
            className="hover:-translate-y-3 hover:scale-110 duration-300"
            href="https://www.linkedin.com/in/akb06/"
          >
            <BsLinkedin />
          </a>
          <a
            className="hover:-translate-y-3 hover:scale-110 duration-300"
            href="https://github.com/akbaradiw"
          >
            <BsGithub />
          </a>
          <a className="hover:-translate-y-3 hover:scale-110 duration-300"
          href="https://wa.me/qr/RUKJ3LDQ6NUZD1">
            
            <BsWhatsapp />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default ImageComp;
