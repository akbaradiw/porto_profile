import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="py-3 fixed ps-80 ms-60">
      <motion.div
       initial={{ opacity: 0, x: -50, y: -50 }}
       animate={{ opacity: 4, x: 10, y: 20 }}
       transition={{ duration: 2, ease: "easeInOut" }}>
        <div className="pt-20">
          <h1 className="text-6xl  pb-2 ps-10 font-bold transition duration-150 ease-in-out animate-bounce ">
            Hello !
          </h1>
          <div className="text-6xl  pb-4 ps-10 font-bold transition duration-150 ease-in-out ">
            <TypeAnimation
              sequence={[`I'm\nAkbar Adi Wibowo `, 400, ""]}
              style={{ whiteSpace: "pre-line" }}
              repeat={Infinity}
            />
          </div>
          <h1 className="pt-2 pb-2 ps-10 text-4xl font-semibold animate-bounce">
            Front End Web Developer
          </h1>
        </div>
        {/* <div>
        <img className="h-98 me-20 " src={foto} alt="test" />
      </div> */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
