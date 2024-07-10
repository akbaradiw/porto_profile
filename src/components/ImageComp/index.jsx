import React from "react";
import foto from "../../assets/foto.png";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ImageComp = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="mt-10 lg:mt-40 lg:flex md:grid md:grid-cols-2 md:gap-10 px-10 lg:justify-evenly" id="imageComp">
      <motion.div
        initial={{ opacity: 0, x: -30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          id="fotoku"
          className="rounded-md lg:w-96 p-4 w-80 border-black pb-6 border-5 border-double "
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
      <div className="lg:pt-20 pt-10" data-aos="fade-left" data-aos-duration="1000">
      <h1 className=" lg:text-6xl text-4xl font-bold">Akbar Adi Wibowo</h1>
      <p className="lg:text-4xl text-2xl font-semibold py-4">Front End Web Developer</p>
      <p className="lg:text-2xl text-xl">Based in Yogyakarta</p>
      </div>
   
    </div>
  );
};
export default ImageComp;
