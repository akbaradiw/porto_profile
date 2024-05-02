import React from "react";
import NavbarComp from "../../components/NavbarComp";
import Cover from "../../components/Cover";
import Paragraph from "../../components/Paragraph";

const AboutPage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="mt-40 ms-4">
        <h1 className="flex justify-center pb-5 text-4xl font-bold text-black underline underline-offset-8 ">About Me</h1>
        <Paragraph />
      </div>
 <div className="flex justify-center">
        <Cover />
      </div>
    </div>
  );
};

export default AboutPage;
