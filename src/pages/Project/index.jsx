import React from "react";
import NavbarComp from "../../components/NavbarComp";
import project1 from "../../assets/LandingPage.png";
import project2 from "../../assets/Dashboard.png";
import project3 from "../../assets/simplenote.png";
import project4 from "../../assets/ecommerce.png";
import project5 from "../../assets/tokusatu.png";
import { BsLink, BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = () => {
  const myproject = [
    {
      id: 1,
      name: "Car Rental Customer Page",
      technologies: "React, Bootstrap, Javascript, Redux Toolkit",
      description:
        "this project i developed with my team during front end developer bootcamp at binar academy. in this project we tested our knowledge about React, Bootstrap, Javascript, Redux Toolkit.",
      image: project1,
      link: "https://23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github:
        "https://github.com/Defriyhdr/23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
    },
    {
      id: 2,
      name: "Car Rental CMS",
      technologies: "React, Bootstrap, Javascript, Redux Toolkit",
      description:
        "this another project i developed with my team during front end developer bootcamp at binar academy. in this project i tested and learn more about CRUD feature.",
      image: project2,
      link: "https://admin-23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github:
        "https://github.com/akbaradiw/Admin_23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
    },
    {
      id: 3,
      name: "Simple Note App",
      technologies: "React, Tailwind, Javascript, Redux Toolkit",
      description: "i try CRUD with redux toolkit to developed this project.",
      image: project3,
      link: "https://simple-note-livid.vercel.app/",
      github: "https://github.com/akbaradiw/crud_redux_toolkit",
    },
    {
      id: 4,
      name: "Mini Ecommerce",
      technologies: "React, Tailwind, Javascript, Redux Toolkit",
      description:
        "Simple Ecommerce with Add to cart feature. i use API from https://fakestoreapi.com/",
      image: project4,
      link: "https://mini-ecommerce-web.vercel.app/",
      github: "https://github.com/akbaradiw/mini-ecommerce",
    },
    {
      id: 5,
      name: "Tokusatsu Hero Agency",
      technologies: "Next Js, Tailwind, Javascript",
      description:
        "Landing page with filter features. i developed this to learn about use next js. data in this website is a dummy data.",
      image: project5,
      link: "https://tokusatsu-heroes-agency.vercel.app/",
      github: "https://github.com/akbaradiw/Tokusatsu-Heroes-Agency",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavbarComp />
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-12 lg:gap-16 lg:pt-40 pt-10 pb-40 px-10"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {myproject.map((data) => (
          <div key={data.id}>
            <img
              src={data.image}
              alt={data.description}
              width={500}
              height={500}
              className="rounded-lg shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
            />
            <p className="border-b text-black text-sm md:text-base lg:text-base border-black pb-3">
              {data.description}
            </p>
            <p className="border-b font-bold text-black md:text-base lg:text-base text-sm border-black py-3">
              Technologies: {data.technologies}
            </p>
            <div className=" flex justify-start lg:text-3xl text-2xl gap-3 lg:py-2 pt-2 pb-10">
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-3 hover:scale-110 duration-300"
              >
                <BsLink />
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-3 hover:scale-110 duration-300"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
