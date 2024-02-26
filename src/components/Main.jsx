import React, { useState } from "react";
import { getLink } from "../utils/Index";
import bg1 from "../assets/img/Bg2new.webp";
import bg2 from "../assets/img/avatar1.svg";
import bg3 from "../assets/img/avatar3.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      {/* <img className="w-full h-screen object-cover" src={bg1} alt="bg" /> */}
      <div className="w-full h-screen object-cover bg-white">
        <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
          <div className="max-w-[1040px] h-full m-auto flex flex-col justify-center items-center lg:items-start">
            <div className="w-full md:grid md:grid-cols-2 items-center mt-20">
              <div className="px-4 mt-10 mb-10">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
                  I'm Ilham Rifai
                </h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                  I'm a
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Junior Front-end Dev",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Ui Designer",
                      1000,
                      "Graphic Designer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{
                      fontSize: "1em",
                      paddingLeft: "5px",
                      display: "inline-block",
                    }}
                    repeat={Infinity}
                  />
                </h2>
                <div className="w-full my-8">
                  <button className="bg-indigo-900 hover:bg-white hover:text-indigo-900 duration-300 px-4 py-4 rounded-md w-[150px] text-white font-bold">
                    Hire Me
                  </button>
                </div>
                <div className="w-full flex justify-between max-w-[300px] pt-6">
                  <a
                    href={getLink.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      className="cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-400 hover:text-indigo-900"
                      size={30}
                    />
                  </a>

                  <a
                    href={getLink.twit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      className="cursor-pointer hover:scale-110  ease-in duration-300 hover:shadow-gray-400 hover:text-indigo-900"
                      size={30}
                    />
                  </a>

                  <a
                    href={getLink.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className="cursor-pointer hover:scale-110  ease-in duration-300 hover:shadow-gray-400 hover:text-indigo-900"
                      size={30}
                    />
                  </a>

                  <a
                    href={getLink.linkedl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      className="cursor-pointer hover:scale-110  ease-in duration-300 hover:shadow-gray-400 hover:text-indigo-900"
                      size={30}
                    />
                  </a>
                </div>
              </div>
              <div className="px-4 my-6 py-6">
                <img className="w-full" src={bg3} alt="bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
