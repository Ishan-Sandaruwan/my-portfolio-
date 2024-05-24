import React from "react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 " id="hero">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ishan Sandaruwan
            </h1>
            <span className="bg-gradient-to-tr from-pink-300 via-slate-400 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Hi, I'm Ishan Sandaruwan, a passionate Full Stack Developer with a
              talent for crafting dynamic and responsive web applications. With
              a deep understanding of both front-end and back-end technologies,
              I thrive on transforming complex challenges into seamless,
              user-friendly solutions. Let's build something amazing together!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center shadow-md shadow-purple-950">
            <img src="./profile.jpeg" alt="Ishan Sandaruwan" className=" object-cover brightness-50 hover:brightness-100 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
