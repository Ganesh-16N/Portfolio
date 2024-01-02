import React from "react";
import prof from "./prof.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="Home" className="pl-9 bg-gradient-to-r from-black-100 to-blue-600 text-white pb-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
           Ganesh Nagargoje
          </h1>
          <p className="text-lg md:text-xl mb-8">
          Innovative Web Developer (MERN) | Mobile App Enthusiast | Crafting User-Centric Experiences
          </p>
          <div className="flex space-x-4">
           
              <Link
              to="Contacts"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Contact Me 
            </Link>
            {/* <a
              href="#"
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out"
            >
              Download Resume
            </a> */}
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <img
            src={prof}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-center mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
