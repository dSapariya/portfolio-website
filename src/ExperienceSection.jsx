import React, { useState } from "react";

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
      "Developed APIs using the Laravel framework, supporting multiple database technologies including MongoDB, MySQL, GraphQL, and PostgreSQL. Designed and integrated APIs in the frontend and implemented RESTful APIs that facilitated smooth data exchange between frontend and backend systems. Integrated third-party APIs, such as payment gateways and social media platforms, to enhance application functionality. Projects : BookMyFarm(Laravel+VueJs), MeraCRM (Laravel)",
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
          <p className="text-400 font-mono text-10px md:text-lg  tracking-widest uppercase md:mb-10 mb-3 relative md:inline-block text-titleText">
          The Companies I've Worked With
          <span className="block h-0.5 bg-white mt-1 w-full mt-3"></span>
        </p>

        <h1 className="text-2xl md:text-8xl font-bold mb-6 text-titleText">experience</h1>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-6 border-b border-gray-700 transition-all duration-500 ${activeIndex === index ? "scale-105 rounded-lg" : "opacity-80"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex justify-between items-center py-4 cursor-pointer">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-teal-400 text-sm">{exp.role}</p>
              </div>
              <span className="text-gray-400">{exp.duration}</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
                }`}
            >
              <ul className="list-disc text-gray-300 text-sm px-6 pb-4 space-y-2">
                {exp.description.split(". ").map((point, idx) => (
                  <li key={idx}>{point.trim()}{"."}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
