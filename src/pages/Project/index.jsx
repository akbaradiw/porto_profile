import React from "react";
import NavbarComp from "../../components/NavbarComp";
import project1 from "../../assets/binar2.png";
import project2 from "../../assets/Dashboard.png";
import project3 from "../../assets/simplenoteupdate.png";
import project4 from "../../assets/miniecommerce.png";
import project5 from "../../assets/tokusatu.png";
import project6 from "../../assets/binar1.png";
import project7 from "../../assets/ohanime.png";
import { BsLink, BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = () => {
  const myproject = [
    {
      id: 1,
      name: "Landing Page/Customer Page Car Rental Web App",
      technologies: "React, Bootstrap, Javascript ",
      description:
        "This project is my Individual Final Project (Gold Level) for the Front End Engineering Bootcamp at Binar Academy. I developed all web components, focusing on both appearance and functionality, using Bootstrap, CSS, JavaScript, and React. The website includes features for filtering products, conducting searches, and displaying product details.",
      image: project6,
      link: "https://binar-car-rental-phi.vercel.app/",
      github:
        "https://github.com/akbaradiw/F-FER23001028-14-AKB-binacarrental-GOLD",
    },
    {
      id: 2,
      name: "Landing Page/Customer Page Car Rental Web App part 2 ",
      technologies: "React, Bootstrap, Javascript, Redux Toolkit",
      description:
        "This project is our Group Final Project (Platinum Level) for the Front End Engineering Bootcamp at Binar Academy. Building upon our previous Gold Level project, we added authentication (login and registration) and payment features. Together with my teammates, we utilized Bootstrap, CSS, JavaScript, React, and Redux Toolkit. In this project, I specifically developed the feature for detailing the duration of rental packages.",
      image: project1,
      link: "https://23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github:
        "https://github.com/Defriyhdr/23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
    },
    {
      id: 3,
      name: "Car Rental CMS/ Admin Page Car Rental Web App",
      technologies: "React, Bootstrap, Javascript, Redux Toolkit",
      description:
        "This project serves as our Group Final Project (Platinum Level) for the Front End Engineering Bootcamp at Binar Academy. The website is designed for admins to manage vehicle order data, featuring charts and tables for viewing order information, as well as login/register and CRUD (create, read, update, delete) functionalities. Alongside my teammate, we utilized Bootstrap, CSS, JavaScript, React, and Redux Toolkit. In this project, I focused on developing the Create, Update, and Delete features.",
      image: project2,
      link: "https://admin-23001028-14-kelompok-4-binar-car-rental-platinum.vercel.app/",
      github:
        "https://github.com/akbaradiw/Admin_23001028_14_Kelompok-4_Binar-Car-Rental-Platinum",
    },
    {
      id: 4,
      name: "Simple Note App",
      technologies: "React, Tailwind, Javascript, Redux Toolkit",
      description:
        "Dummy todolist web app with responsive design & CRUD (create, read, update, delete) feature. I developed the website using Tailwind CSS, JavaScript, React, and Redux Toolkit.",
      image: project3,
      link: "https://simple-note-livid.vercel.app/",
      github: "https://github.com/akbaradiw/crud_redux_toolkit",
    },
    {
      id: 5,
      name: "Mini Ecommerce",
      technologies: "React, Tailwind, Javascript, Redux Toolkit",
      description:
        "Dummy e-commerce project features a responsive design and  Add to Cart feature. I developed the website using Tailwind CSS, JavaScript, React, and Redux Toolkit, utilizing API data from https://fakestoreapi.com/. ",
      image: project4,
      link: "https://mini-ecommerce-web.vercel.app/",
      github: "https://github.com/akbaradiw/mini-ecommerce",
    },
    {
      id: 6,
      name: "Tokusatsu Hero Agency",
      technologies: "Next Js, Tailwind, Javascript",
      description:
        "The Hero Agency landing page is inspired by 911 emergency services & Tokusatsu Heroes, featuring filter options and a responsive design. I developed this project to learn how to use Next.js, and the data on the website consists of dummy information..",
      image: project5,
      link: "https://tokusatsu-heroes-agency.vercel.app/",
      github: "https://github.com/akbaradiw/Tokusatsu-Heroes-Agency",
    },
    {
      id: 7,
      name: "Oh Anime",
      technologies: "React Js, Tailwind, Javascript, Zustand",
      description:
        "Dummy MyAnimeList.net project with filter, search, pagination, & detail item feature. i developed this project with React JS, Tailwind, & Zustand. i use API from https://jikan.moe/ . ",
      image: project7,
      link: "https://oh-anime.vercel.app/",
      github: "https://github.com/akbaradiw/Anime-List",
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
            <div className="border lg:p-1 p-2 shadow-sm rounded-md mb-4 bg-stone-800 ">
              <h1 className="lg:text-xl md:text-md text-center  font-bold text-white">
                {data.name}
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                src={data.image}
                alt={data.description}
                width={500}
                height={500}
                className="rounded-lg shadow-lg mb-6 hover:scale-110 transition ease-in-out delay-150"
              />
            </div>
            <p className="border-b text-black  text-sm md:text-base lg:text-base border-black pb-3">
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
