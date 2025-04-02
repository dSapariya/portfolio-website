import React from 'react';

const HeroSection = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/profile1.jpeg" // replace with your actual image path
          alt="Background"
          className="w-full h-full object-cover"
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
      <nav className="absolute top-6 right-6 z-10 flex space-x-6 text-sm font-mono text-white">
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
        <p className="text-white font-bold text-lg tracking-widest uppercase mb-4 relative inline-block text-titleText">
          HELLO
          <span className="block w-48 h-0.5 bg-white mt-1"></span>
        </p>

        {/* Name */}
        <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-wider mb-6 text-titleText ">
          my name is <br /> <p className='mt-5'>Dixa Kundariya</p>
        </h1>


        {/* Description with Icons */}
        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-4 sm:gap-6 text-gray-200 max-w-4xl text-lg leading-relaxed">
          {/* Left Social Icons */}

          {/* Text Block */}
          <p className="text-center sm:text-left text-2xl sm:text-2xl md:text-3xl">
          I'm a software developer, dedicated to mastering the latest technologies and design principles to build dynamic, responsive web solutions.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
