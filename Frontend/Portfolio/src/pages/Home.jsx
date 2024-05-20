import React from "react";
import homeart2 from "../assets/giphy.gif";
import Techstack from "./Techstack";
import Projects from "./Projects";
import Codingprofiles from "./Codingprofiles";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div
        className=" w-[100vw] h-[100vh] static  bg-slate-950  grid grid-cols-4"
        id="home"
      >
        <div className="grid col-span-2  justify-center items-center">
          <img
            src={homeart2}
            alt="3d art"
            className=" w-[400px] h-[400px] rounded-full outline outline-2 outline-white shadow-lg shadow-white"
          />
        </div>
        <div className="grid col-span-2  justify-center items-center">
          <div className="text-white child:m-4">
            <p className="text-4xl">Hi There ✌</p>
            <p className="text-8xl">Gaurav Here,</p>
            <p className="text-3xl">A bit about myself 🤩</p>
            <p className="text-xl">
              ⭐ I am a Software Engineering Student From{" "}
              <a
                href="http://www.unipune.ac.in/"
                target="_blank"
                className=" text-red-500"
              >
                Pune University
              </a>
              , India 🎓,
            </p>
            <p className="text-xl">
              ⭐ I mostly like to work as a{" "}
              <span className=" text-blue-600">Fullstack Developer</span> and{" "}
              <span className=" text-blue-600">Data Scientist</span>
            </p>
            <p className="text-xl">
              ⭐ I also like to spend a good chunk of time solving problems on{" "}
              <a
                href="https://leetcode.com/gauravbisht126/"
                target="_blank"
                className=" text-red-500"
              >
                Leetcode
              </a>
            </p>
            <p className="text-xl">
              ⭐ You can also see my{" "}
              <a
                href="https://drive.google.com/file/d/1Bg3KiQiiPsjxBbTrl2vkS0uOHf6cVVNp/view?usp=sharing"
                target="_blank"
                className=" text-red-500"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="techstack">
        <Techstack />
      </div>
      <div id="coding">
        <Codingprofiles />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
