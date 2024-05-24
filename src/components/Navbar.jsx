import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="text-4xl ">Is</div>
      <div className="mx-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Navbar;
