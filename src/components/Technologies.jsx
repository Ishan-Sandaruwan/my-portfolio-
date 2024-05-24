import React from "react";
import { RiReactjsFill , RiNodejsFill , } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const Technologies = () => {
  return (
    <div
      className="border-b border-neutral-700 w-full flex flex-col justify-center items-center"
      id="hero"
    >
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 pb-20">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-4xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsFill className="text-4xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux  className="text-4xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl text-slate-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-4xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-4xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
