import React from 'react';
import { getImagePath } from "./utils/getImagePath";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import resumeData from "./data/resume.json";

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex flex-col justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-900 opacity-50"></div>

      {/* Navigation - Responsive, fixed, with background and padding */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm font-mono">
          <a href="#work" className="hover:text-teal-400 transition-colors">
            <span className="text-teal-400">01.</span> Work
          </a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">
            <span className="text-teal-400">02.</span> Experience
          </a>
          <a href="#techstack" className="hover:text-teal-400 transition-colors">
            <span className="text-teal-400">03.</span> Techstack
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            <span className="text-teal-400">04.</span> Contact
          </a>
        </div>
      </nav>

      {/* Main Content - Centered Vertically, with top padding for nav */}
      <div className="flex-1 flex items-center justify-center pt-20 md:pt-0">
        <motion.div
          className="max-w-7xl w-full px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p className="text-teal-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4" variants={fadeUp}>
              Hello, I'm
            </motion.p>
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight" variants={fadeUp}>
              {resumeData.personalInfo.name}
            </motion.h1>
            <motion.h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-6 text-gray-400 leading-tight" variants={fadeUp}>
              {resumeData.personalInfo.role}
            </motion.h2>
            <motion.p className="text-gray-400 text-sm sm:text-base max-w-2xl mb-4 sm:mb-8 mx-auto lg:mx-0" variants={fadeUp}>
              {resumeData.personalInfo.bio}
            </motion.p>
            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-4 sm:mb-8" variants={fadeUp}>
              {resumeData.personalInfo.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-teal-400">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex flex-col items-center lg:justify-end mt-4 lg:mt-0">
            <motion.div 
              className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-teal-500 rounded-full opacity-20 blur-2xl"></div>
              <img
                src={getImagePath(resumeData.personalInfo.profileImage)}
                alt={resumeData.personalInfo.name}
                className="relative w-full h-full object-cover rounded-full border-4 border-teal-500 shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons and Email for mobile only, after all hero content */}
      <div className="flex flex-col items-center mt-6 gap-2 md:hidden">
        <div className="flex gap-4 text-2xl">
          <a href={resumeData.personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href={resumeData.personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <FaGithub />
          </a>
          <a href={resumeData.personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <SiLeetcode />
          </a>
        </div>
        <a href={`mailto:${resumeData.personalInfo.email}`} className="text-sm font-mono mt-1 hover:text-teal-400 transition-colors">
          {resumeData.personalInfo.email}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-teal-400 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
