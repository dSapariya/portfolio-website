import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description:
      "It Provides Real-Time Weather information for any city worldwide. Displays current weather, temperature, humidity, and wind speed. Offers a detailed 7-day and hourly weather forecast for the selected city. Responsive Design: Optimized for a seamless experience on mobile devices. \n Technology : Vue3, Tailwind, Pinia, Axios",
    link: "https://dsapariya.github.io/weather-tracker/",
    image: "/images/weather.png",
  },
  {
    title: "Coffee Website Design",
    description:
      "User-friendly Web interface for a coffee shop or brand. Attractive Layouts, engaging images, and smooth navigation. Displays products, menu items, and promotional offers effectively. Technology : HTML, CSS, JavaScript, Bootstrap with Responsive.",
    link: "https://dsapariya.github.io/coffee-website/",
    image: "/images/coffee.png",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Web app for a classic Tic Tac Toe game. Two players take turns marking a 3x3 grid with Xs and Os. Align three marks in a row, column, or diagonal to win. Outcome: Game results in a win for the first player to align three marks, or a draw if the grid is filled without a winner. Technology : Vue3, Mobile responsive",
    link: "https://dsapariya.github.io/tic-tac-toe/",
    image: "/images/tic-tac-toe.png",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">
          Some Things I've Built
          <span className="block w-64 h-0.5 bg-white mt-1 mb-10"></span>
        </p> */}
        
        <p className="text-400 font-mono text-lg tracking-widest uppercase mb-10 relative inline-block text-titleText">
        Some Things I've Built
          <span className="block h-0.5 bg-white mt-1 w-full"></span>
        </p>
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-titleText">my Work</h1>
        <p className="text-gray-300 mb-12 max-w-3xl text-15px text-titleText">
          
          I have honed my skills in HTML, CSS, JavaScript, TypeScript, and various frontend frameworks such as Vue.js and ReactJS.
          I am deeply passionate about staying updated with the latest advancements in frontend development and am committed to continuously refining my skills to tackle evolving challenges in this field.
        </p>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-4 md:gap-6`}
            >
              {/* Animated Image Container */}
              <div className="relative w-full md:w-1/2 h-64 bg-gray-800 rounded-lg overflow-hidden">
                {/* Image */}
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Animation */}
                <motion.div
                  initial={{ x: "0%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gray-900"
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-15px"> <ul className="list-disc text-gray-300 text-sm px-6 pb-4 space-y-2">
                {project.description.split(". ").map((point, idx) => (
                  <li key={idx}>{point.trim()}{"."}</li>
                ))}
              </ul></p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 inline-flex items-center text-sm hover:underline"
                >
                  Visit Website <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
