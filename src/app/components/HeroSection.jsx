"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">Hello, I&apos;m </span>
            <br />
            <TypeAnimation sequence={["Farhaz Nurjananto", 2000, "Web Developer", 2000, "UI/UX Designer", 2000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6">Information Technology | University of Jember</p>
          {/* <div className="">
            <button className="font-medium px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-red-500 to-yellow-500 hover:bg-slate-800 text-white mt-3">
              <div className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</div>
            </button>
          </div> */}
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-slate-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero-image.png" alt="hero image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
