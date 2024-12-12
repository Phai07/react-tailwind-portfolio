import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"
import { SiHtml5 } from "react-icons/si";
import { SiCss3,SiTailwindcss,SiExpress,SiMongodb   } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,FaGithub  } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";




function Skills() {
  return (
    <>
      <div id="skills"  className="wrapper    h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-slate-600 mb-10 p-10 rounded-[20px] lg:p-2">
          <h1 className="text-4xl mb-10 font-bold">Skills</h1>
          {/* <p className="text-lg py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
          <div className="box flex   justify-around  items-center  rounded-xl">

            <div className="flex flex-col items-center w-10 m-4   "> 
          <p className=" font-bold from-neutral-50 text-white ">HTML</p>
          <SiHtml5 className="text-orange-600 text-6xl  " />
        
            </div>

            
            <div className="flex flex-col items-center  h-20 w-10  m-4"> 
          <p className=" font-bold from-neutral-50 text-white">CSS</p>
          <SiCss3 className="text-blue-600 text-6xl  " />
            </div>

            <div className="flex flex-col items-center  h-20 w-10 m-4"> 
          <p className=" font-bold from-neutral-50 text-white">javascript</p>
          <IoLogoJavascript className="text-amber-400 text-6xl  " />
            </div>

            <div className="flex flex-col items-center  h-20 w-10 m-4 "> 
          <p className=" font-bold from-neutral-50 text-white ">Tailwind CSS</p>
          <SiTailwindcss className="text-sky-400 text-6xl  " />
            </div>

            <div className="flex flex-col items-center  h-20 w-10 m-4 "> 
          <p className=" font-bold from-neutral-50 text-white ">React</p>
          <FaReact className="text-sky-400 text-6xl  " />
            </div>

            <div className="flex flex-col items-center h-20 w-10 m-4 "> 
          <p className=" font-bold from-neutral-50 text-white ">Node.js</p>
          <DiNodejs  className="text-green-500 text-8xl  " />
            </div>
          
            <div className="flex flex-col items-center h-20 w-10 m-4 "> 
          <p className=" font-bold from-neutral-50 text-white ">Express</p>
          <SiExpress   className=" text-6xl " />
            </div>
          
            <div className="flex flex-col items-center h-20 w-10 m-4 "> 
          <p className=" font-bold from-neutral-50 text-white  ">MongoDB</p>
          <SiMongodb  className="text-green-500 text-6xl  " />
            </div>
        
            {/* <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Web Dev</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Frontend </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">React.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Javascript</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
