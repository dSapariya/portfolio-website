import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "DotDash Meredith",
    role: "Software Engineer 2",
    duration: "Sep 2024 - Present",
    description:
      "Designed and implemented a DSAR automation solution with Flowable to manage access, modification, and deletion requests across 350+ datastores. Integrated Kafka for asynchronous request execution, ensuring scalability and efficient processing. Developed workflows to handle real-time status updates of datastores and workflows, enhancing transparency and traceability. Created monitoring dashboards in Vue3 to track process performance. Projects : DSAR Automation (NestJs, Vue3)",
  },
  {
    company: "ManekTech",
    role: "Senior Software Engineer",
    duration: "Nov 2022 - Sep 2024",
    description:
      "Led the development of an e-commerce platform using VueJS/ReactJS and Laravel. Collaborated with UX designers to create intuitive and user-friendly interfaces. Developed web applications that are user-friendly, component-based, reusable, dynamic, and have state management. Expertise in database management, including designing schemas, writing complex queries, and ensuring data integrity. Utilized test-driven development to maintain code quality. Conducted comprehensive code reviews, providing constructive feedback and ensuring code quality and adherence to coding standards. Stayed up-to-date with industry trends and best practices to ensure the adoption of the latest technologies and methodologies. Projects : CWS-CRM (Laravel+Vue3),Skill Coins(NodeJs + ReactJs)",
  },
  {
    company: "Zignuts Technolab",
    role: "Web Developer",
    duration: "Sept 2020 - Nov 2022",
    description:
      "Developed and delivered a variety of web projects using Laravel and Vue JS / Nuxt JS. Proficient in front-end technologies including HTML, CSS, and JavaScript, as well as modern front-end libraries and frameworks. Used Quasar JS framework to create multi-platform desktop applications, enhancing accessibility and user reach. Developed a real-time chat application using Nuxt JS and Laravel. Projects : IQ-CRM (Laravel+NuxtJs+QuasarJs)",
  },
  {
    company: "Avinashi Ventures Pvt Ltd",
    role: "Web Developer",
    duration: "Jan 2018 - Aug 2020",
    description:
      "Developed APIs using the Laravel framework, supporting multiple database technologies including MongoDB, MySQL, GraphQL, and PostgreSQL. Designed and integrated APIs in the frontend and implemented RESTful APIs that facilitated smooth data exchange between frontend and backend systems. Integrated third-party APIs, suchs payment gateways and social media platforms, to enhance application functionality. Projects : BookMyFarm(Laravel+VueJs), MeraCRM (Laravel)",
  },
];

// Variants for individual experience items
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceSection = () => {
  return (
    <section id="work" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Sticky Title Container */}
        {/* <div className="sticky top-0 h-48 sm:h-64 flex flex-col items-center justify-center text-center bg-gray-900 z-20"> */}

          <p className="text-400 font-mono text-10px md:text-lg tracking-widest uppercase md:mb-10 mb-3 relative md:inline-block text-titleText">
            The Companies I've Worked With
            <span className="block h-0.5 bg-white mt-1 w-full mt-3"></span>
          </p>
          <h1 className="text-2xl md:text-8xl font-bold mb-6 text-titleText">experience</h1>
        {/* </div> */}

        {/* Scrollable Content Area */}
        <div className="relative z-10 pt-8 pb-32"> {/* Added padding to ensure content scrolls past title */}
          {experiences.map((exp, index) => {
            const itemRef = useRef(null);
            const isInView = useInView(itemRef, { amount: 0.4, once: false }); // Trigger when 40% in view, re-trigger

            return (
              <motion.div
                key={index}
                ref={itemRef}
                className="mb-20 last:mb-0" // Space between items
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg flex flex-col md:flex-row items-start justify-between">
                  {/* Left Side: Company, Role, Duration */}
                  <div className="md:w-1/3 w-full text-center md:text-left mb-6 md:mb-0">
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-teal-400 text-xl font-semibold mb-1">
                      {exp.role}
                    </p>
                    <p className="text-gray-400 text-md">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Right Side: Description */}
                  <div className="md:w-2/3 w-full text-sm text-gray-300 md:pl-8">
                    <ul className="list-disc list-inside space-y-2 marker:text-teal-400">
                      {exp.description.split(". ").map(
                        (point, idx) =>
                          point.trim() && (
                            <li key={idx} className="leading-relaxed">
                              {point.trim()}.
                            </li>
                          )
                      )}
                    </ul>
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