import React from "react";
import NavbarComp from "../../components/NavbarComp";
import HeroSection from "../../components/HeroSection";
import ImageComp from "../../components/ImageComp";
import { IoLogoGithub } from "react-icons/io";
import "./style.css";

import Cover from "../../components/Cover";
const HomePage = () => {
  return (
    <div>
      <NavbarComp />
      <div className="flex justify-center mt-40" id="home">
        <ImageComp />
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePage;
