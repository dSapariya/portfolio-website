import React from 'react';
import { getImagePath } from "./utils/getImagePath";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
const HeroSection = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden p-5">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getImagePath("profile1.jpeg")}
          alt="Background"
          className="w-full h-full block sm:hidden object-cover object-[75%_50%]"
        />
        <img
          src={getImagePath("profile1.jpeg")}
          alt="Background"
          className="w-full h-full object-cover hidden sm:block"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>

        {/* Grid Overlay */}
        {/* <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-1 opacity-20">
          {[...Array(72)].map((_, i) => (
            <div
              key={i}
              className={`w-full h-full ${i % 2 === 0 ? 'bg-indigo-800' : 'bg-black'}`}
            ></div>
          ))}
        </div> */}
      </div>

      {/* Top-left Logo */}

      {/* Top-right Nav */}
      <nav className="text-end absolute top-6 right-6 z-10 flex flex-col md:flex-row space-x-6 text-10px sm:text-sm md:text-sm lg:text-sm font-mono text-white">
        <span className="hover:text-teal-300 cursor-pointer" onClick={() => scrollToSection("work")}>
          <span className="text-teal-400">01.</span> Work
        </span>
        <span className="hover:text-teal-300 cursor-pointer" onClick={() => scrollToSection("experience")}>
          <span className="text-teal-400">02.</span> Experience
        </span>
        <span className="hover:text-teal-300 cursor-pointer" onClick={() => scrollToSection("techstack")}>
          <span className="text-teal-400">04.</span> Techstack
        </span>
        <span className="hover:text-teal-300 cursor-pointer" onClick={() => scrollToSection("contact")}>
          <span className="text-teal-400">04.</span> Contact
        </span>
      </nav>
      {/* Centered Content */}
      <div className="max-w-4xl mx-auto flex items-center justify-center h-screen">
        <div className="relative z-10 flex flex-col justify-center h-full">
          {/* HELLO with line */}
          <p className="text-white font-bold text-10px md:text-lg tracking-widest uppercase mb-4 relative inline-block text-titleText">
            HELLO
            <span className="block w-16 md:w-48 h-0.5 bg-white mt-1"></span>
          </p>

          {/* Name */}
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-wider mb-6 text-titleText ">
            my name is <br /> <p className='md:mt-5'>Dixa Kundariya</p>
          </h1>


          {/* Description with Icons */}
          <div className="flex flex-col sm:flex-row sm:items-start items-center gap-4 sm:gap-6 text-gray-200 max-w-4xl text-lg leading-relaxed">
            {/* Left Social Icons */}

            {/* Text Block */}
            <p className="text-left md:text-center sm:text-left text-sm sm:text-2xl md:text-3xl">
              I'm a software developer, dedicated to mastering the latest technologies and design principles to build dynamic, responsive web solutions.
            </p>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        {/* Left Side Social Icons */}
        <div className="absolute bottom-12 md:bottom-0 left-4 flex flex-col md:flex-col items-start md:items-center gap-3 z-50 text-white text-2xl">
          {/* Icons: row on mobile, column on md+ */}
          <div className="flex flex-row md:flex-col items-center gap-4">
            <a href="https://www.linkedin.com/in/dixa-sapariya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
            </a>
            <a href="https://github.com/dSapariya" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-teal-400 cursor-pointer" />
            </a>
            <a href="https://leetcode.com/u/dixa_sapariya/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="hover:text-teal-400 cursor-pointer" />
            </a>
          </div>

          {/* Border line: hidden on mobile */}
          <div className="hidden md:block md:h-24 border-l border-white z-10"></div>
        </div>

        {/* Right Side Email */}
        <div className="absolute bottom-4 left-4 md:bottom-0 md:right-6 flex md:flex-col items-start md:items-end gap-3 z-50 text-white text-sm">
          {/* Email: inline on mobile, vertical on md+ */}
          <div className="flex flex-row md:flex-col items-center gap-4 md:mr-3">
            <a
              href="mailto:dixasapariya786@gmail.com"
              className="hover:text-teal-400 tracking-wide md:rotate-90 md:origin-bottom-right cursor-pointer"
            >
              dixasapariya786@gmail.com
            </a>
          </div>

          {/* Border line: hidden on mobile */}
          <div className="hidden md:block h-24 border-l border-white z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
