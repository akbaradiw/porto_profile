import React from "react";
import fotoku from "../../assets/fotoku.png";
import fotoprofil from "../../assets/fotoprofil.png";
import foto from "../../assets/foto.png";
import "./style.css";
import { TypeAnimation } from "react-type-animation";

const ImageComp = () => {
  return (
    <div className="pe-80 mt-20" >
        <img id="fotoku" className="p-10 rounded-md  border-black pb-6 border-5 border-double" src={foto} alt="test" />
      

 
    </div>
  );
};
export default ImageComp;
