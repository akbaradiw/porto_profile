import React from "react";
import fotoku from "../../assets/fotoku.png";
import fotoprofil from "../../assets/fotoprofil.png";
import foto from "../../assets/foto.png";
import "./style.css";
import { motion } from "framer-motion";
const ImageComp = () => {
  return (
    <div className="pe-80 mt-20">
      <motion.div 
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
      <img
        id="fotoku"
        className="p-10 rounded-md  border-black pb-6 border-5 border-double"
        src={foto}
        alt="test"
      />
      </motion.div>
   
    </div>
  );
};
export default ImageComp;
