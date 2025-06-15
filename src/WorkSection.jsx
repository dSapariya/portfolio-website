import React from "react";
import { motion } from "framer-motion";
import { getImagePath } from "./utils/getImagePath";

const projects = [
  {
    title: "Weather App",
    description:
      "It Provides Real-Time Weather information for any city worldwide. Displays current weather, temperature, humidity, and wind speed. Offers a detailed 7-day and hourly weather forecast for the selected city. Responsive Design: Optimized for a seamless experience on mobile devices. \n Technology : Vue3, Tailwind, Pinia, Axios",
    link: "https://dsapariya.github.io/weather-tracker/",
    image: "/weather.png",
    tags: ["Vue3", "Tailwind", "Pinia", "Axios"]
  },
  {
    title: "Coffee Website Design",
    description:
      "User-friendly Web interface for a coffee shop or brand. Attractive Layouts, engaging images, and smooth navigation. Displays products, menu items, and promotional offers effectively. Technology : HTML, CSS, JavaScript, Bootstrap with Responsive.",
    link: "https://dsapariya.github.io/coffee-website/",
    image: "/coffee.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  }
  // {
  //   title: "Tic Tac Toe",
  //   description:
  //     "Web app for a classic Tic Tac Toe game. Two players take turns marking a 3x3 grid with Xs and Os. Align three marks in a row, column, or diagonal to win. Outcome: Game results in a win for the first player to align three marks, or a draw if the grid is filled without a winner. Technology : Vue3, Mobile responsive",
  //   link: "https://dsapariya.github.io/tic-tac-toe/",
  //   image: "/tic-tac-toe.png",
  // },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
            My Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have honed my skills in HTML, CSS, JavaScript, TypeScript, and various frontend frameworks such as Vue.js and ReactJS.
            I am deeply passionate about staying updated with the latest advancements in frontend development and am committed to continuously refining my skills to tackle evolving challenges in this field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-teal-500 px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description.split(". ")[0]}.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-teal-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
