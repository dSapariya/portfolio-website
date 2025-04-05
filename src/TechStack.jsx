import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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

const SectionBlock = ({ title, items, scrollSpeed, scrollDirection }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px 0px -100px 0px", once: false });
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isInView) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [isInView]);

    const isFast = scrollSpeed > 1500;
    const isScrollingUp = scrollDirection === "up";

    const orderedItems = isScrollingUp ? [...items].reverse() : items;

    return (
        <div ref={ref} className="grid sm:grid-cols-12 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="sm:col-span-4 mb-6 md:mb-0"
            >
                <p className="text-xl md:text-3xl font-anton leading-none text-white uppercase">
                    {title}
                </p>
            </motion.div>


            <motion.div
                className="sm:col-span-8 flex gap-x-11 gap-y-9 flex-wrap"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: isFast ? 0 : 0.2,
                            staggerDirection: isScrollingUp ? -1 : 1,
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
            >
                {orderedItems.map((tech, index) => (
                    <motion.a
                        key={tech.name}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3.5 items-center leading-none hover:opacity-80 transition"
                        initial={{ opacity: 0, y: 50 }}
                        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <img
                            src={getImagePath(tech.logo)}
                            alt={tech.name}
                            loading="lazy"
                            width={40}
                            height={40}
                            className="max-h-10 object-contain"
                        />
                        <span className="text-xl md:text-2xl capitalize">{tech.name}</span>
                    </motion.a>
                ))}
            </motion.div>

        </div>
    );
};


const TechnologiesSection = () => {
    const [scrollSpeed, setScrollSpeed] = useState(0);
    const lastScrollY = useRef(0);
    const lastTime = useRef(Date.now());

    useEffect(() => {
        const handleScroll = () => {
            const now = Date.now();
            const newY = window.scrollY;
            const dt = now - lastTime.current;
            const dy = Math.abs(newY - lastScrollY.current);
            const speed = (dy / dt) * 1000;

            setScrollSpeed(speed);
            lastScrollY.current = newY;
            lastTime.current = now;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="techstack" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <p className="text-400 font-mono text-10px md:text-lg tracking-widest uppercase md:mb-10 mb-3 relative md:inline-block text-titleText">
                    Technologies I Use
                    <span className="block h-0.5 bg-white mt-1 w-full mt-3"></span>
                </p>
                <h1 className="text-2xl md:text-8xl font-bold mb-10 text-titleText">techstack</h1>

                <SectionBlock title="frontend" items={groupTechs("frontend")} scrollSpeed={scrollSpeed} />
                <SectionBlock title="backend" items={groupTechs("backend")} scrollSpeed={scrollSpeed} />
                <SectionBlock title="database" items={groupTechs("database")} scrollSpeed={scrollSpeed} />
                <SectionBlock title="tools" items={groupTechs("tools")} scrollSpeed={scrollSpeed} />

            </div>
        </section>
    );
};

export default TechnologiesSection;
