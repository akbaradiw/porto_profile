import React from "react";
import NavbarComp from "../../components/NavbarComp";
import { GrTechnology } from "react-icons/gr";
import project1 from "../../assets/LandingPage.png";
import project2 from "../../assets/Dashboard.png";
import project3 from "../../assets/simplenote.png";
import project4 from "../../assets/ecommerce.png";
const Project = () => {

 const myproject = [
   {
     id: 1,
     name: "Car Rental Customer Page",
     technologies: "React, Bootstrap, Javascript, Redux Toolkit",
     description: "this project i developed with my team during front end developer bootcamp at binar academy. in this project we tested our knowledge about React, Bootstrap, Javascript, Redux Toolkit.",
     image: project1,
     link: "https://23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
     github: "https://github.com/Defriyhdr/23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
   },
   {
     id: 2,
     name: "Car Rental CMS",
     technologies: "React, Bootstrap, Javascript, Redux Toolkit",
     description: "this anotherproject i developed with my team during front end developer bootcamp at binar academy. in this project i tested and learn more about CRUD feature.",
     image: project2,
     link: "https://admin-23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
     github: "https://github.com/akbaradiw/Admin_23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
   },
   {
     id: 3,
     name: "Simple Note App",
     technologies: "React, Bootstrap, Javascript, Redux Toolkit",
     description: "i try CRUD with redux toolkit to developed this project",
     image: project3,
     link: "https://simple-note-livid.vercel.app/",
     github: "https://github.com/akbaradiw/crud_redux_toolkit",
},
{
  id: 4,
  name: "Mini Ecommerce",
  technologies: "React, Bootstrap, Javascript, Redux Toolkit",
  description: "Simple Ecommerce with Add to cart feature. i use API from https://fakestoreapi.com/",
  image: project4,
  link: "https://mini-ecommerce-web.vercel.app/",
  github: "https://github.com/akbaradiw/mini-ecommerce",
}
 ]   

  return (
    <div>
      <NavbarComp />
      <div className="flex justify-center mt-20">
      <div className="pt-40 grid grid-cols-2 gap-6">
        {myproject.map((project) => (
          <div key={project.id}>
            <div className="flex justify-center">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="flex justify-center">
              <h1 className="text-2xl text-black font-bold">{project.name}</h1>
            </div>
        
            <div className="flex justify-center">
              <p className="text-2xl text-black font-bold">{project.technologies}</p>
            </div>
            <div className="flex justify-center">
              <p className="text-2xl text-black font-bold">{project.description}</p>
            </div>
            <div className="flex justify-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Visit
                </button>
              </a>
            </div>
            <div className="flex justify-center">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Github
                </button>
              </a>
            </div>
          </div>

        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
