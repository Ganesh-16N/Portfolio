import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-5xl mb-2 text-yellow-500" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-5xl mb-2 text-blue-500" />, name: "TypeScript" },
  { icon: <FaReact className="text-5xl mb-2 text-blue-400" />, name: "React Native" },
  { icon: <FaReact className="text-5xl mb-2 text-blue-400" />, name: "React" },
  { icon: <FaHtml5 className="text-5xl mb-2 text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-5xl mb-2 text-blue-600" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-5xl mb-2 text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiRedux className="text-5xl mb-2 text-purple-500" />, name: "Redux" },
  { icon: <FaNode className="text-5xl mb-2 text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-5xl mb-2 text-gray-300" />, name: "Express.js" },
  { icon: <SiMongodb className="text-5xl mb-2 text-green-700" />, name: "MongoDB" },
  { icon: <FaGithub className="text-5xl mb-2 text-white" />, name: "GitHub" },
];

const Edu = () => {
  return (
    <section id="Edu" className="text-white py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="p-8 rounded-lg shadow-lg bg-gray-800">
            <h2 className="text-3xl font-semibold text-center mb-6">Education</h2>
            <h3 className="text-2xl font-semibold">Bachelor of Computer Application</h3>
            <p className="text-gray-400">August 2020 - June 2023</p>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-gray-800">
            <h2 className="text-3xl font-semibold text-center mb-6">Experience</h2>
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold">Plan My Venture</h3>
              <span className="text-gray-400 pt-2">Front End Developer</span>
            </div>
            <p className="text-gray-400">January 2023 - June 2023</p>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-center mt-12 mb-6"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {skill.icon}
              <span className="mt-2 text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Edu;