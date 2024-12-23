import React, { useState } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import img1 from "../assets/images/Screenshot 2024-12-14 234518.jpg"
import img2 from "../assets//images/Screenshot 2024-12-22 113855.jpg";
// import img3 from "../assets/images/project-img3.png";


import "../styles.css";
import ProjectCard from "./ProjectCard";
import { FaReact, FaGithub } from "react-icons/fa";

function Projects() {
  // const img1 = "https://via.placeholder.com/300"
  // const img2 = "https://via.placeholder.com/300"
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Pharmacy  E-commerce",
      description: "",
      img: img1,
      
    }, 
    {
      id: 2,
      title: "",
      description: "Design & Development",
      img: img2,
      
    }

  ];

  return (

    <div id="projects" className="  projects mt-32 p-8  text-white py-10">
      <h1 className="text-4xl mb-10 text-center font-bold ">Projects</h1>

      <div className="grid grid-cols-2  ">
        <div className="flex flex-col items-center "> 
          <header className="flex justify-center items-center p-4 text-white ">
              <div className="flex space-x-4 ">
                <a href="https://github.com/Gargantua-Saichania-JSD8/GenAIDV1" className="hover:text-yellow-200">
                  <FaGithub className="text-4xl" />
                </a>
                <a href="https://gen-aidv-1-deploy-q37l.vercel.app/" className="hover:text-yellow-200">
                  <LuSquareArrowOutUpRight className="text-4xl" />
                </a>
              </div>
          </header>
          <footer className="   w-6/12" ><ProjectCard item={projects[0]} />
          {/* <ul class="mt-10 flex justify-center items-center gap-8 text-lg ">
              <li className="font-bold">HTML</li>
              <li className="font-bold ">CSS</li>
            </ul> */}
            </footer>
        </div>


         <div className="flex flex-col items-center   "> 
          <header className="flex justify-center items-center p-4 text-white ">
              <div className="flex space-x-4 ">
                <a href="https://github.com/Phai07/17-Nattawut-colmar" className="hover:text-yellow-200">
                  <FaGithub className="text-4xl" />
                </a>
                <a href="https://17-nattawut-colmar.vercel.app/" className="hover:text-yellow-200">
                  <LuSquareArrowOutUpRight className="text-4xl" />
                </a>
              </div>
          </header>
          <footer className="   w-6/12  "><ProjectCard item={projects[1]} />
          {/* <ul class="mt-10 flex justify-center items-center gap-8 text-lg ">
              <li className="font-bold">HTML</li>
              <li className="font-bold ">CSS</li>
            </ul> */}
            </footer>
        </div> 



      </div>
    </div>
  );
}

export default Projects;
