import React from "react";
import NavbarComp from "../../components/NavbarComp";
import Cover from "../../components/Cover";
import Paragraph from "../../components/Paragraph";
import "./style.css";

const AboutPage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="flex justify-center mt-40" id="about">
          <Paragraph />
          <Cover />
      </div>
    </div>
  );
};

export default AboutPage;
