import React, { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Edu from "./Components/Edu/Edu";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
// import "./App.css"; // Import your CSS file for styling

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

   /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
   var prevScrollpos = window.scrollY;
   window.onscroll = function () {
     var currentScrollPos = window.scrollY;
     if (prevScrollpos > currentScrollPos) {
       document.getElementById("navbar").style.top = "0";
     } else {
       document.getElementById("navbar").style.top = "-10vh";
     }
     prevScrollpos = currentScrollPos; 
   };


  return (
    <div className={`bg-black text-white min-h-screen font-sans ${true ? "" : "hidden"}`}>
      <nav id="navbar" className="bg-gray-900 p-4 md:p-6 fixed w-full top-0 z-10 transition-all ease-in-out duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl md:text-2xl">My Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={700}>
              Home
            </Link>
            <Link to="About" spy={true} smooth={true} offset={50} duration={700}>
              About
            </Link>
            <Link to="Edu" spy={true} smooth={true} offset={50} duration={700}>
              Education & Skills
            </Link>
            <Link to="Projects" spy={true} smooth={true} offset={50} duration={700}>
              Projects
            </Link>
            <Link to="Contacts" spy={true} smooth={true} offset={50} duration={700}>
              Contact Me
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white text-center py-10">
          <div className="flex flex-col space-y-6">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="Edu"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={closeMenu}
            >
              Education & Skills
            </Link>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="Contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}

      <div id="topSpace" className="h-20"></div>

      <div id="allFields" className="container mx-auto p-5 md:p-10">
        <div id="Home" className="h-16"></div>
        <div className="fields">
          <Home />
        </div>

        <div id="About" className="h-16"></div>
        <div className="fields">
          <About />
        </div>

        <div id="Edu" className="h-16"></div>
        <div className="fields">
          <Edu />
        </div>

        <div id="Projects" className="h-16"></div>
        <div className="fields">
          <Projects />
        </div>

        <div id="topSpace" className="h-20"></div>
        <div id="Contacts"></div>
        <div className="fields">
          <Contact />
        </div>
      </div>

      {/* Add Snowfall Effect */}
      {/* <Snowfall snowflakeCount={100} // You can adjust the number of snowflakes
        color="#FFF" // Snowflake color
        speed={1} // Snowfall speed
      /> */}
    </div>
  );
}

export default App;
