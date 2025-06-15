import React from "react";
import { motion } from "framer-motion";
import { getImagePath } from "./utils/getImagePath";

const techGroups = {
    frontend: [
        "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Vue",
        "Nuxt.js", "TailwindCSS", "Framer Motion", "SASS", "Bootstrap"
    ],
    backend: ["Node.js", "Express.js", "Nest.js"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL"],
    tools: ["Git", "Docker", "AWS", "GitHub", "NPM", "Figma"],
};

const technologies = [
    { name: "React", logo: "/tech/react.png", link: "https://react.dev/" },
    { name: "Vue", logo: "/tech/vue.png", link: "https://vuejs.org/" },
    { name: "Next.js", logo: "/tech/next.png", link: "https://nextjs.org/" },
    { name: "Nuxt.js", logo: "/tech/nuxt.png", link: "https://nuxt.com/" },
    { name: "JavaScript", logo: "/tech/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", logo: "/tech/typescript.png", link: "https://www.typescriptlang.org/" },
    { name: "Node.js", logo: "/tech/node.png", link: "https://nodejs.org/" },
    { name: "Express.js", logo: "/tech/ex.png", link: "https://expressjs.com/" },
    { name: "Nest.js", logo: "/tech/nest.png", link: "https://nestjs.com/" },
    { name: "TailwindCSS", logo: "/tech/tailwind.png", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", logo: "/tech/bootstrap.png", link: "https://getbootstrap.com/" },
    { name: "GraphQL", logo: "/tech/graphql.png", link: "https://graphql.org/learn/" },
    { name: "PostgreSQL", logo: "/tech/postgress.png", link: "https://www.postgresql.org/" },
    { name: "MySQL", logo: "/tech/sql.png", link: "https://www.mysql.com/" },
    { name: "MongoDB", logo: "/tech/mongodb.png", link: "https://www.mongodb.com/" },
    { name: "NPM", logo: "/tech/npm.png", link: "https://www.npmjs.com/" },
    { name: "Git", logo: "/tech/git.png", link: "https://git-scm.com/" },
    { name: "GitHub", logo: "/tech/github.png", link: "https://github.com/" },
    { name: "Figma", logo: "/tech/figma.png", link: "https://figma.com/" },
    { name: "Docker", logo: "/tech/docker.png", link: "https://www.docker.com/" },
    { name: "AWS", logo: "/tech/aws.png", link: "https://aws.amazon.com/" },
    { name: "Redux", logo: "/tech/redux.png", link: "https://redux.js.org/" },
    { name: "Framer Motion", logo: "/tech/framer-motion.png", link: "https://www.framer.com/motion/" },
    { name: "SASS", logo: "/tech/sass.png", link: "https://sass-lang.com/" },
];

const groupTechs = (category) =>
    techGroups[category]
        .map((name) => technologies.find((tech) => tech.name.toLowerCase() === name.toLowerCase()))
        .filter(Boolean);

const TechCategory = ({ title, items }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h3 className="text-2xl font-bold text-teal-400 mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((tech) => (
                    <a
                        key={tech.name}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <img
                            src={getImagePath(tech.logo)}
                            alt={tech.name}
                            loading="lazy"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-white">{tech.name}</span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section id="techstack" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
                        My Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I use to build modern web applications.
                    </p>
                </div>

                <div className="space-y-12">
                    <TechCategory title="Frontend" items={groupTechs("frontend")} />
                    <TechCategory title="Backend" items={groupTechs("backend")} />
                    <TechCategory title="Database" items={groupTechs("database")} />
                    <TechCategory title="Tools" items={groupTechs("tools")} />
                </div>
            </div>
        </section>
    );
};

export default TechStack;
