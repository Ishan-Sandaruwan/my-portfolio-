import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: delay } },
});

const Hero = () => {
  return (
    <div
      className="border-b border-neutral-700 lg:h-screen w-full flex justify-center items-center pb-20 lg:pb-0"
      id="hero"
    >
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 h-screen lg:h-auto flex flex-col justify-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pt-28 md:pt-0 pb-4 md:pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl xl:text-8xl"
          >
            Ishan Sandaruwan
          </motion.h1>
          <motion.span
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="text-2xl bg-gradient-to-tr from-pink-300 via-slate-400 to-purple-500 bg-clip-text tracking-tight text-transparent "
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="lg:pt-6 pt-4 md:pt-16 my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            Hi, I'm Ishan Sandaruwan, a passionate Full Stack Developer with a
            talent for crafting dynamic and responsive web applications. With a
            deep understanding of both front-end and back-end technologies, I
            thrive on transforming complex challenges into seamless,
            user-friendly solutions. Let's build something amazing together!
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 lg:h-full lg:p-8 ">
          <motion.img
            initial={{x:100 , opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.5}}
            src="./profile.jpeg"
            alt="Ishan Sandaruwan"
            className="h-[65vh] rounded-2xl object-cover brightness-50 hover:brightness-100 transition-colors cursor-pointer shadow-lg shadow-purple-950 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
