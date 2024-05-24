import React from "react";
import { Experience as exp } from "../constants/index.js";
import { motion } from "framer-motion";

const container = (x, delay) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Experience = () => {
  return (
    <div className=" border-b border-neutral-700 w-full  pb-20 lg:pb-0">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -100 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h3>
      <div>
        {exp.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              key={index}
              variants={container(-100, index/2)}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>
            <motion.div
              key={index}
              variants={container(100, index/2)}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {exp.role}-{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
