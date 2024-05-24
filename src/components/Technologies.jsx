import React from "react";
import { RiReactjsFill, RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconvarients = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div
      className="border-b border-neutral-700 w-full flex flex-col justify-center items-center"
      id="hero"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -100 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, x: -100 }}
        className="flex flex-wrap items-center justify-center gap-4 pb-20"
      >
        <motion.div
          variants={iconvarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsFill className="text-4xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsFill className="text-4xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-4xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-4xl text-slate-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconvarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-4xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
