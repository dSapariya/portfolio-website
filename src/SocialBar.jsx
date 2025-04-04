// src/SocialBar.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const SocialBar = () => {
    return (
        <div>
            {/* Left Side Social Icons */}
            <div className="fixed bottom-0 md:left-4 flex flex-col items-center gap-3 text-white text-2xl z-50 md:pl-8 pl-4">
                {/* Border line starting from the bottom of the screen */}

                <div className="flex flex-row md:flex-col items-center gap-4 text-white text-2xl ">
                    <a href="https://www.linkedin.com/in/dixa-sapariya/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
                    </a>
                    <a href="https://github.com/dSapariya" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-teal-400 cursor-pointer" />
                    </a><a href="https://leetcode.com/u/dixa_sapariya/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode className="hover:text-teal-400 cursor-pointer" />
                    </a>


                </div>
                <div className="h-24 md:border-white z-10 md:border-l"></div>

            </div>

            {/* Right Side Email */}
            <div className="fixed bottom-0 right-4 flex flex-col items-end gap-3 text-white text-2xl z-50 pr-8">
                {/* Border line centered with email */}

                <div className="flex flex-col items-center gap-4 text-white text-xl sm:mr-4">
                    <a href="mailto:dixasapariya786@gmail.com" className="hover:text-teal-400 text-white text-sm tracking-wide md:rotate-90 md:origin-bottom-right cursor-pointer">
                        dixasapariya786@gmail.com
                    </a>
                </div>
                <div className="h-24 md:border-l  items-center md:border-white z-10 mr-1"></div>

            </div>
        </div>
    );
};

export default SocialBar;