import React from "react";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { motion  } from "framer-motion";

const SideNav = ({ setSideOpen }) => {
  const updateSideOpen = () => {
    setSideOpen(false);
  };
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className="fixed top-[40vh] left-0 bg-cyan-800 text-xl z-50"
    >
      <ul className="translate-x-8 bg-cyan-700 p-4 rounded-e-2xl relative">
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1 pr-8 cursor-pointer transition-all"
        >
          <a href="/#hero">Home</a>{" "}
        </li>
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1 pr-10  cursor-pointer transition-all"
        >
          <a href="/#about">About</a>{" "}
        </li>
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1 pr-10  cursor-pointer transition-all"
        >
          <a href="/#tech">Technologies</a>{" "}
        </li>
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1 pr-10 cursor-pointer transition-all"
        >
          <a href="/#exp">Experience</a>{" "}
        </li>
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1 pr-10 cursor-pointer transition-all"
        >
          <a href="/#pro">Projects</a>{" "}
        </li>
        <li
          onClick={updateSideOpen}
          className="hover:text-white hover:scale-105 py-1  pr-10 cursor-pointer transition-all"
        >
          <a href="/#con">Contact</a>{" "}
        </li>
        <TbCircleArrowLeftFilled
          className="absolute top-[40%] -right-4 hover:cursor-pointer hover:-right-2 transition-all text-5xl"
          onClick={updateSideOpen}
        />
      </ul>
    </motion.div>
  );
};

export default SideNav;
