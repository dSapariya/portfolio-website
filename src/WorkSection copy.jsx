import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "./utils/getImagePath";

const projects = [
  {
    title: "Weather App",
    description: "It Provides Real-Time Weather information... Technology : Vue3, Tailwind, Pinia, Axios",
    link: "https://dsapariya.github.io/weather-tracker/",
    image: "/weather.png",
  },
  {
    title: "Coffee Website Design",
    description: "User-friendly Web interface for a coffee shop... Technology : HTML, CSS, JavaScript, Bootstrap",
    link: "https://dsapariya.github.io/coffee-website/",
    image: "/coffee.png",
  },
];

const WorkSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [step, setStep] = useState(0); // 0: title+img, 1: description, 2: next

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      setStep((prev) => {
        if (prev < 2) return prev + 1;
        if (currentProjectIndex < projects.length - 1) {
          setCurrentProjectIndex((i) => i + 1);
          return 0;
        }
        return prev;
      });
    } else {
      // Scroll up
      setStep((prev) => {
        if (prev > 0) return prev - 1;
        if (currentProjectIndex > 0) {
          setCurrentProjectIndex((i) => i - 1);
          return 2;
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentProjectIndex]);

  const project = projects[currentProjectIndex];

  return (
    <section id="work" className="h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="max-w-6xl w-full px-4 flex gap-5">
        {/* Title & Description */}
        <div className="w-1/3 flex flex-col">
          <AnimatePresence mode="wait">
            {step >= 0 && (
              <motion.h2
                key={project.title + "_title"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
              >
                {project.title}
              </motion.h2>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key={project.title + "_desc"}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-300"
              >
                <ul className="list-disc pl-5 space-y-2">
                  {project.description.split(". ").map((point, i) => (
                    <li key={i}>{point.trim()}.</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="w-1/2 flex items-center">
          <motion.img
            key={project.image}
            src={getImagePath(project.image)}
            alt={project.title}
            initial={{ opacity: 0, scale: 0.95, x: 100 }}
            animate={{ opacity: 1, scale: 1  }}
            exit={{ opacity: 0, scale: 0.95, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
