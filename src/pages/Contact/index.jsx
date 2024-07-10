import React from "react";
import NavbarComp from "../../components/NavbarComp";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavbarComp />
      <div
        className="lg:pt-40 pt-10 md:pt-20 text-center px-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="lg:text-3xl text-2xl font-bold">Contact Me</h1>
        <p className="lg:text-2xl font-semibold py-10 text-lg">
          If you have a project that requires a front end developer, you can
          contact me
        </p>
      </div>
      <div
        className="lg:pt-20 flex  justify-evenly gap-10"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        <a
          className="lg:text-8xl hover:scale-110  text-4xl md:text-6xl"
          href="https://wa.me/qr/RUKJ3LDQ6NUZD1"
        >
          <BsWhatsapp />
        </a>
        <a
          className="lg:text-8xl hover:scale-110 text-4xl md:text-6xl"
          href="https://www.linkedin.com/in/akb06/"
        >
          <BsLinkedin />
        </a>
        <a
          className="lg:text-8xl hover:scale-110 text-4xl md:text-6xl"
          href="mailto: akbaradiw000@gmail.com"
        >
          <MdOutlineEmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
