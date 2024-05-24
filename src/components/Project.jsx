import React from "react";
import { Projects } from "../constants";
const Project = () => {
  return (
    <div className=" border-b border-neutral-700 w-full  pb-20 lg:pb-0">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {Projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:flex-row-reverse lg:justify-center">
            <div className="w-full lg:w-1/4 lg:flex lg:justify-center">
              <img
                src={project.img}
                alt={project.name}
                width={150}
                height={150}
                className="mb-6 rounded object-contain"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 lg:text-right">
              <h6 className="mb-2 font-semibold">{project.name}</h6>
              <p className="mb-4 text-neutral-400 lg:text-justify ">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
