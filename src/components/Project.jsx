import React from "react";
import Projectitem from "./Projectitem";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <div className="mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center text-indigo-900">
          Projects
        </h1>
        <p className="text-center py-8">
          Several projects that I have worked on, both personal and client
          projects
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <Projectitem
            img={project1}
            title="My Company Project"
            link="https://kyoaimedicalservices.vercel.app/"
          />
          <Projectitem
            img={project2}
            title="Movie Project API ( personal)"
            link="https://web-film-one.vercel.app/"
          />
          <Projectitem
            img={project3}
            title="Client Landing Page"
            link="https://webkts.000webhostapp.com/"
          />
          <Projectitem
            img={project4}
            title="UI Personal Project"
            link="https://www.instagram.com/p/CgvwbA8P4z1/"
          />
          <Projectitem
            img={project5}
            title="Weather Apps"
            link="https://weather.rifapp.site/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
