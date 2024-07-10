import React from "react";
import NavbarComp from "../../components/NavbarComp";
import ImageComp from "../../components/ImageComp";
import AboutMe from "../../components/AboutMe";

const HomePage = () => {
  return (
    <div>
      <NavbarComp />
        <ImageComp />   
    <AboutMe />
    </div>
  );
};

export default HomePage;
