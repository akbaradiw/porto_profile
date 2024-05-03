import React from "react";
import { motion } from "framer-motion";
const Paragraph = () => {
  return (
    <div>
      <div className="text-2xl text-black 
 px-40">
  <motion.div
   initial={{ opacity: 0, x: -50, y: -50 }}
   animate={{ opacity: 1, x: 0, y: 0 }}
   transition={{ duration: 2, ease: "easeInOut" }}>
        <p>
          My Name is Akbar Adi Wibowo, i have 4 years experience work as
          business development administrator.
          I'm join front end developer bootcamp at Binar Academy in October 2023
          - February 2024. 
          During in this bootcamp I learn about HTML, CSS,
          Javascript, React, Next js, Bootstarp, Tailwind, Responsive web design
          & build car rental website for final project.
        </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Paragraph;
