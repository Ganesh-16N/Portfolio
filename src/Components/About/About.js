import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="p-8 rounded-lg shadow-md bg-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm an enthusiastic Mobile Application developer and Full-Stack web Developer with a specialization in MERN Stack Development. Proficient in crafting high-performance websites, web applications, and Android applications, I thrive on solving real-world challenges. While my primary expertise lies in Front-end.
            </p>
          </motion.div>
          <motion.div 
            className="p-8 rounded-lg shadow-md bg-gray-800"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              I'm equally passionate about exploring emerging technologies like Blockchain and Cryptography. I enjoy taking on challenging projects that broaden my skills in both web and mobile application development, pushing me beyond my comfort zone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;