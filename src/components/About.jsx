import React from "react";

const About = () => {
  return (
    <div className="border-b border-neutral-700 lg:h-screen w-full flex justify-center items-center">
      <div className="flex flex-col h-full w-full justify-evenly">
        <h2 className="text-center text-5xl my-20">
          About <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex lg:flex-wrap flex-wrap-reverse">
          <div className="w-full lg:w-1/2 lg:p-12 ">
            <img
              src="./hero.jpg"
              alt="about img"
              className="h-[32rem] w-[32rem] rounded-2xl object-cover brightness-50 hover:brightness-100 transition-colors cursor-pointer shadow-lg shadow-purple-950 lg:ml-auto mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center items-center lg:justify-start">
              <p className="my-2 max-w-xl py-12">
                I am an undergraduate student at NIBM Campus, pursuing a BSc
                (Hons) Computing degree. With over two years of experience as a
                freelancer, I specialize in creating web applications, software
                solutions, and mobile apps. My passion lies in web development,
                and I have a strong command of the MERN stack, allowing me to
                build dynamic and responsive web solutions. I am dedicated to
                continuously learning and honing my skills to deliver
                high-quality projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
