import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-teal-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-12">
            Be it discussing any collaboration opportunities or just a casual conversation,
            my inbox is always open. I would love to have a chat with you! :)
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:dixasapariya786@gmail.com"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>

  
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;