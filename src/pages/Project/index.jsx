import React from "react";
import NavbarComp from "../../components/NavbarComp";
import project1 from "../../assets/LandingPage.png";
import project2 from "../../assets/Dashboard.png";
import project3 from "../../assets/simplenote.png";
import project4 from "../../assets/ecommerce.png";
import { motion } from "framer-motion";
import "./style.css";

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
      description: "i try CRUD with redux toolkit to developed this project",
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
  ];

  return (
    <div>
      <NavbarComp />
      <div className="flex justify-center  mb-10">
        <div className="pt-40 w-3/4  grid grid-cols-2 gap-10 " id="project">
          {myproject.map((project) => (
            <div
              className="border-2 border-dotted relative shadow-4xl shadow-black rounded-3xl  border-black"
              id="project-border"
              key={project.id}
            >
              <motion.div
                initial={{ opacity: 0, x: -60, y: 140 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div className="flex justify-center" id="project-image">
                  <img
                    className="pt-10 px-10 transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 hover:opacity-60"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div>
                      <div className="flex justify-center pt-3">
                        <h1
                          className="text-lg text-black font-bold"
                          id="project-name"
                        >
                          {project.name}
                        </h1>
                      </div>

                      <div className="flex justify-center pt-3">
                        <p
                          className="text-md text-black font-bold"
                          id="project-tech"
                        >
                          Technologies: {project.technologies}
                        </p>
                      </div>
                      <div className="flex justify-center py-3">
                        <p
                          className=" text-black w-3/4 font-sm ps-3"
                          id="project-description"
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div
                  className="flex justify-center gap-5 pb-5 pt-2"
                  id="project-button"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      id="demo"
                      className="border-black border-2 text-black font-bold hover:bg-yellow-300 py-2 px-4 rounded hover:-translate-y-3 hover:scale-110 duration-300 "
                    >
                      Demo
                    </button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      id="github"
                      className="border-black border-2 text-black hover:bg-yellow-300 font-bold py-2 px-4 rounded hover:-translate-y-3 hover:scale-110 duration-300"
                    >
                      Github/Code
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
