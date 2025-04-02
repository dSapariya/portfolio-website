import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <p className="text-400 font-mono text-lg tracking-widest uppercase mb-10 relative inline-block text-titleText">
          Contact
          <span className="block h-0.5 bg-white mt-1 w-full"></span>
        </p>
        <h1 className="text-7xl md:text-8xl font-bold mb-6 text-titleText">say hello</h1>
      <div>

        </div>
        <p className="text-gray-300 mb-8">

          Be it discussing any collaboration opportunities or just a casual conversation,
          <p>my inbox is always open.</p><br />
          <p className="text-gray-300 mb-8">I would love to have a chat with you! :) </p>
        </p>
        {/* <a
          href="#"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition"
        >
          Send Email
        </a> */}

      </div>
    </section>
  );
};

export default ContactSection;