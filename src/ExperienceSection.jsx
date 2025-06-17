import React from "react";
import { motion } from "framer-motion";
import resumeData from "./data/resume.json";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A timeline of my professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-teal-400 h-full z-0 rounded"></div>
          {resumeData.experience.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`w-full flex flex-col md:flex-row items-center mb-12 relative z-10`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Company/Duration block (opposite side of card, desktop only) */}
                {isLeft ? (
                  <div
                    className="hidden md:flex flex-col items-start w-1/2 order-3 pl-8 text-left justify-center"
                    style={{ alignItems: 'center' }}
                  >
                    <span className="text-teal-400 font-semibold text-xs sm:text-sm mb-1">{exp.company}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">{exp.duration}</span>
                  </div>
                ) : (
                  <div
                    className="hidden md:flex flex-col items-start w-1/2 order-1 pr-8 text-left justify-center"
                    style={{ alignItems: 'center' }}
                  >
                    <span className="text-teal-400 font-semibold text-xs sm:text-sm mb-1">{exp.company}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">{exp.duration}</span>
                  </div>
                )}
                {/* Timeline Dot and Image (desktop only) */}
                <div className={`order-2 flex flex-col items-center w-full md:w-auto md:absolute left-1/2 ${isLeft ? 'md:top-1/2 md:translate-y-[-50%]' : 'md:top-1/2 md:translate-y-[-50%]'} md:translate-x-[-50%]`}>
                  <div className="relative z-20 hidden md:block">
                    <div className="w-12 h-12 rounded-full border-4 border-teal-400 bg-white object-cover shadow-md"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
                  </div>
                </div>
                {/* Description Card (alternating left/right) */}
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 md:order-1" : "md:pl-8 md:order-3"} mt-2`} style={{ minWidth: 0 }}>
                  {/* On mobile, show company/duration above card */}
                  <div className="md:hidden w-full flex flex-col items-center mb-2 order-3">
                    <span className="block text-teal-400 font-semibold text-xs sm:text-sm mb-1">{exp.company}</span>
                    <span className="block text-gray-400 text-xs sm:text-sm">{exp.duration}</span>
                  </div>
                  <div className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-lg shadow-lg mx-3 sm:mx-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-teal-400 font-semibold text-lg sm:text-xl mb-1">{exp.role}</span>
                    </div>
                    <ul className="list-disc pl-4 sm:pl-5 text-gray-400 text-xs sm:text-sm mb-2">
                      {exp.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="bg-teal-700 text-[10px] sm:text-xs px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;