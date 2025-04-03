import React from "react";
import { getImagePath } from "./utils/getImagePath";

const technologies = [
    { name: "React", logo: "/tech/react.png", link: "https://react.dev/" },
    { name: "Vue", logo: "/tech/vue.png", link: "https://vuejs.org/" },
    { name: "Next.js", logo: "/tech/next.png", link: "https://nextjs.org/" },
    { name: "Nuxt.js", logo: "/tech/nuxt.png", link: "https://nextjs.org/" },
    { name: "JavaScript", logo: "/tech/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", logo: "/tech/typescript.png", link: "https://www.typescriptlang.org/" },
    { name: "Node.js", logo: "/tech/node.png", link: "https://nodejs.org/" },
    { name: "HTML", logo: "/tech/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", logo: "/tech/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
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
];


const TechnologiesSection = () => {
    return (
        <section id="techstack" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <p className="text-400 font-mono text-lg tracking-widest uppercase mb-10 relative inline-block text-titleText">
                    Technologies I Use
                    <span className="block h-0.5 bg-white mt-1 w-full"></span>
                </p>
                <h1 className="text-7xl md:text-8xl font-bold mb-6 text-titleText">techstack</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, index) => (
                        <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-700 px-3 py-2 rounded-md hover:bg-gray-800 transition">
                            <img src={getImagePath(tech.logo)} alt={`${tech.name} logo`} className="w-6 h-6 rounded" />
                            <span className="text-gray-400 font-mono">{tech.name}</span>
                        </a>
                    ))}
                </div>
                <p className="mt-4 text-gray-500 text-center">...and many more!</p>
            </div>
        </section>
    );
};

export default TechnologiesSection;