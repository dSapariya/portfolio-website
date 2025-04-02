import React from "react";

const technologies = [
    { name: "React", logo: "/images/tech/react.png", link: "https://react.dev/" },
    { name: "Vue", logo: "/images/tech/vue.png", link: "https://vuejs.org/" },
    { name: "Next.js", logo: "/images/tech/next.png", link: "https://nextjs.org/" },
    { name: "Nuxt.js", logo: "/images/tech/nuxt.png", link: "https://nextjs.org/" },
    { name: "JavaScript", logo: "/images/tech/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", logo: "/images/tech/typescript.png", link: "https://www.typescriptlang.org/" },
    { name: "Node.js", logo: "/images/tech/node.png", link: "https://nodejs.org/" },
    { name: "HTML", logo: "/images/tech/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", logo: "/images/tech/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "TailwindCSS", logo: "/images/tech/tailwind.png", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", logo: "/images/tech/bootstrap.png", link: "https://getbootstrap.com/" },
    { name: "GraphQL", logo: "/images/tech/graphql.png", link: "https://graphql.org/learn/" },
    { name: "PostgreSQL", logo: "/images/tech/postgress.png", link: "https://www.postgresql.org/" },
    { name: "MySQL", logo: "/images/tech/sql.png", link: "https://www.mysql.com/" },
    { name: "MongoDB", logo: "/images/tech/mongodb.png", link: "https://www.mongodb.com/" },
    { name: "NPM", logo: "/images/tech/npm.png", link: "https://www.npmjs.com/" },
    { name: "Git", logo: "/images/tech/git.png", link: "https://git-scm.com/" },
    { name: "GitHub", logo: "/images/tech/github.png", link: "https://github.com/" },
    { name: "Figma", logo: "/images/tech/figma.png", link: "https://figma.com/" },
    { name: "Docker", logo: "/images/tech/docker.png", link: "https://www.docker.com/" },
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
                            <img src={tech.logo} alt={`${tech.name} logo`} className="w-6 h-6 rounded" />
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