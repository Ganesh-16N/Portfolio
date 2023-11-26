import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-4xl mb-2" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-4xl mb-2" />, name: "TypeScript" },
  { icon: <FaReact className="text-4xl mb-2" />, name: "React Native" },
  { icon: <FaReact className="text-4xl mb-2" />, name: "React" },
  { icon: <FaHtml5 className="text-4xl mb-2" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-4xl mb-2" />, name: "CSS3" },
  { icon: <SiTailwindcss className="text-4xl mb-2" />, name: "Tailwind CSS" },
  { icon: <SiRedux className="text-4xl mb-2" />, name: "Redux" },
  { icon: <FaNode className="text-4xl mb-2" />, name: "Node.js" },
  { icon: <SiExpress className="text-4xl mb-2" />, name: "Express.js" },
  { icon: <SiMongodb className="text-4xl mb-2" />, name: "MongoDB" },
  { icon: <FaGithub className="text-4xl mb-2" />, name: "GitHub" },
];

const Edu = () => {
  return (
    <section id="Edu" className=" text-white pt-16">
      <div className="container mx-auto">

        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 rounded-lg shadow-md bg-gray-900">
              <h2 class="text-3xl font-semibold text-center mb-8">Education</h2>
              <h3 class="text-2xl font-semibold">Bachelor of Computer Application</h3>
              <p>August 2020 - June 2023</p>
            </div>

            <div class="p-8 rounded-lg shadow-md bg-gray-900">
              <h2 class="text-3xl font-semibold text-center mb-8">Experience</h2>
              <div className=" flex justify-between ">
                <h3 class="text-2xl font-semibold">Plan My Venture</h3>
                <div className=" pt-2">Front End Developer</div>
              </div>
              <p>January 2023 - June 2023</p>
            </div>
          </div> 

        </div>


        <div className="bg-black h-5"></div>

        <h2 className="text-3xl font-semibold text-center my-8">Skills</h2>
        <div className=" bg-black px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-2  bg-black rounded-lg shadow-md flex flex-col items-center skill-card"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edu;
