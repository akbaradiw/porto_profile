import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Paragraph = () => {
  return (
    <div>
      <div
        className="text-2xl text-black ps-20
"
      >
        <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h2 className=" pb-4  font-bold text-black underline underline-offset-8 ">
            About Me
          </h2>{" "}
          <p id="paragraph" className="ps-2">
          My Name is Akbar Adi Wibowo, i have 4 years work experience as business development administrator. In my current activity i learn about Front End Development to improve my skill after graduate from Front End Engineering bootcamp at Binar Academy in October 2023 - February 2024.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Paragraph;
