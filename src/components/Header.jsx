import React from "react";
import logo from "../assets/images/123.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import { TypeAnimation } from "react-type-animation";

const Cv = "https://drive.google.com/file/d/1TadQMxU7r4PUq2hzymh_F4Bu40lc5otU/view?usp=sharing";

function Header() {
  return (
    <>
      <div
        id="about"
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col bottom-auto "
      >
        <Navbar />
        <div className="wrapper flex  justify-between items-center h-screen w-full px-44 lg:justify-center lg:px-6">
          <div>
            <div className="btn py-3 text-white text-2xl font-bold">
              <TypeAnimation
                sequence={[
                  "Hi! ",
                  1000,
                  "I'm Phai",
                  1000,
                  " Nattawut WanPhen",
                  1000,
                ]}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </div>
            {/* <h1 className="text-white text-5xl font-bold">Hi! I'm Phai</h1> */}
            <p className="text-white py-4 max-w-lg text-justify">
              Junior Software Developer certified by Generation Bootcamp,
              bringing 2 years of experience as a Commis Chef, where teamwork,
              problem-solving, and time management skills were developed.
              Proficient in JavaScript, React, Node.js, Express, MongoDB, SQL,
              and modern web development tools. A detail-oriented and creative
              individual with a passion for continuous learning and building
              effective software solutions. Seeking a Software Developer role to
              deliver high-quality applications and contribute to innovative
              projects
            </p>
            <a
              className="shadow-lg bg-[#171717] rounded-md text-white text-2xl hover:mix-blend-screen py-2 px-4 inline-block"
              href={Cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD CV
              <i className="fa-solid fa-arrow-right text-lg p-[2px] ml-2"></i>
            </a>
          </div>
          {/* <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>  */}
          <div className="overflow-hidden rounded-3xl lg:hidden absolute right-36">
            <img className="w-96" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
