import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const SocialBar = () => {
    return (
        <div>
            {/* Left Side Social Icons */}
            <div className="fixed bottom-12 left-4 flex flex-col md:flex-col items-start gap-3 z-50 text-white text-2xl">
                {/* Icons: row on mobile, column on md+ */}
                <div className="flex flex-row md:flex-col items-center gap-4">
                    <a href="https://www.linkedin.com/in/dixa-sapariya/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
                    </a>
                    <a href="https://github.com/dSapariya" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-teal-400 cursor-pointer" />
                    </a>
                    <a href="https://leetcode.com/u/dixa_sapariya/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="hover:text-teal-400 cursor-pointer" />
                    </a>
                </div>

                {/* Border line: hidden on mobile */}
                <div className="hidden md:block h-24 border-l border-white z-10"></div>
            </div>

            {/* Right Side Email */}
            <div className="fixed bottom-4 left-4 md:bottom-0 md:right-4 flex md:flex-col items-start md:items-end gap-3 z-50 text-white text-sm">
                {/* Email: inline on mobile, vertical on md+ */}
                <div className="flex flex-row md:flex-col items-center gap-4">
                    <a
                        href="mailto:dixasapariya786@gmail.com"
                        className="hover:text-teal-400 tracking-wide md:rotate-90 md:origin-bottom-right cursor-pointer"
                    >
                        dixasapariya786@gmail.com
                    </a>
                </div>

                {/* Border line: hidden on mobile */}
                <div className="hidden md:block h-24 border-l border-white z-10"></div>
            </div>
        </div>
    );
};

export default SocialBar;
