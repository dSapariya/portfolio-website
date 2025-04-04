import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <p className="text-400 font-mono text-10px md:text-lg  tracking-widest uppercase md:mb-10 mb-3 relative md:inline-block text-titleText">
          Contact
          <span className="block h-0.5 bg-white mt-1 w-full mt-3"></span>
        </p>
        <h1 className="text-2xl md:text-8xl  font-bold mb-6 text-titleText">say hello</h1>
      <div>

        </div>
        <p className="text-gray-300 mb-8">

          Be it discussing any collaboration opportunities or just a casual conversation,
          <span>my inbox is always open.</span><br />
          <span className="text-gray-300 mb-8">I would love to have a chat with you! :) </span>
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