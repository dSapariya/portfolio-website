import React from 'react';
import { motion } from 'framer-motion';
import resumeData from './data/resume.json';
import { getImagePath } from "./utils/getImagePath";
// Helper to get logo/link for a tech name
const getTechLogo = (name) => resumeData.techLogos.find(t => t.name.toLowerCase() === name.toLowerCase());

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading and Description */}
        <div className="text-center mb-12">
          <p className="text-teal-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">MY EXPERTISE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to build modern web applications.
          </p>
        </div>
        {categories.map((cat) => (
          <div key={cat.key} className="mb-10">
            <h3 className="text-lg sm:text-xl font-semibold text-teal-400 mb-6">{cat.label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {resumeData.techStack[cat.key].map((tech, idx) => {
                console.log('tech', tech);
                const logoObj = getTechLogo(tech);
                return (
                  <motion.a
                    key={tech}
                    href={logoObj?.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 p-2 sm:p-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition-colors min-h-[48px]"
                  >
                    {logoObj?.logo ? (
                      <img
                        src={getImagePath(logoObj.logo)}
                        alt={tech}
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="w-7 h-7 flex items-center justify-center bg-gray-700 rounded-full text-gray-400 font-bold text-base">{tech[0]}</span>
                    )}
                    <span className="text-xs sm:text-sm font-semibold text-white">{tech}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
