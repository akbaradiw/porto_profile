import React from "react";
import NavbarComp from "../../components/NavbarComp";
import HeroSection from "../../components/HeroSection";
import Menu from "../../components/Menu";
import ImageComp from "../../components/ImageComp";

import Cover from "../../components/Cover";
const HomePage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="flex justify-evenly mt-40">
        <ImageComp />
        <HeroSection/>
      </div>
      <div>
      </div>
    </div>
  );
};

export default HomePage;
