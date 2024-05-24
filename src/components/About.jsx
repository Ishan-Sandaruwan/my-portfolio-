import React from "react";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:pt-36 lg:h-screen ">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img src="./hero.jpg" alt="about img" className="rounded-2xl lg:max-h-96" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex justify-center items-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am an undergraduate student at NIBM Campus, pursuing a BSc
              (Hons) Computing degree. With over two years of experience as a
              freelancer, I specialize in creating web applications, software
              solutions, and mobile apps. My passion lies in web development,
              and I have a strong command of the MERN stack, allowing me to
              build dynamic and responsive web solutions. I am dedicated to
              continuously learning and honing my skills to deliver high-quality
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
