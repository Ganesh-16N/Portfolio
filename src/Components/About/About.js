import React from "react";

const About = () => {
  return (
    <section id="About" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg shadow-md">
            <p>
            I'm an enthusiastic Mobile Application developer and Full-Stack web Developer with a specialization in MERN Stack Development. Proficient in crafting high-performance websites, web applications, and Android applications, I thrive on solving real-world challenges. While my primary expertise lies in Front-end.
            </p>
          </div> 
          <div className="p-8 rounded-lg shadow-md">
            <p>
            I'm equally passionate about exploring emerging technologies like Blockchain and Cryptography. I enjoy taking on challenging projects that broaden my skills in both web and mobile application development, pushing me beyond my comfort zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
