import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiExternalLink, FiCode, FiZap, FiStar, FiTrendingUp, FiShield, FiCpu, FiDatabase, FiGlobe, FiSmartphone, FiCalendar, FiAward, FiUsers, FiHeart } from "react-icons/fi";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiTailwindcss, SiNextdotjs, SiRedux, SiFirebase } from "react-icons/si";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterFill } from "react-icons/ri";
import HeroDemo from "./Components/Hero";
import AboutDemo from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

// Theme Context
const ThemeContext = React.createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

// Futuristic Button Component
const FuturisticButton = ({ children, variant = "primary", size = "md", onClick, href, className = "", ...props }) => {
  const baseClasses = "relative overflow-hidden font-bold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-2xl",
    secondary: "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:shadow-2xl",
    ghost: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-lg shadow-cyan-400/25",
    neon: "bg-black border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black shadow-lg shadow-green-400/50 hover:shadow-green-400/75",
    holographic: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl"
  };

  const ButtonComponent = href ? "a" : "button";
  const buttonProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <ButtonComponent
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...buttonProps}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </ButtonComponent>
  );
};

// Holographic Card Component
const HolographicCard = ({ children, className = "", ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ duration: 0.3 }}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.1) 0%, transparent 50%)`
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Futuristic Navigation
const FuturisticNav = () => {
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FiZap /> },
    { name: "About", icon: <FiStar /> },
    { name: "Experience", icon: <FiTrendingUp /> },
    { name: "Skills", icon: <FiCpu /> },
    { name: "Projects", icon: <FiCode /> },
    { name: "Contact", icon: <FiMail /> }
  ];

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionName);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-cyan-500/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            GANESH_2055.exe
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className="cursor-pointer"
              >
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    activeSection === item.name
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                      : "text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.div>
              </button>
            ))}
            
            {/* <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-400/25"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden mt-4 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className="w-full"
                >
                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </motion.div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Main App Component
const App = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-black" : "bg-gradient-to-br from-indigo-50 via-white to-gray-100"} transition-colors duration-500`}>
      <FuturisticNav />
     <HeroDemo/>
     <AboutDemo/>
     <Experience/>
     <Projects/>
     <Contact/>
    </div>
  );
};

// Wrapped App with Theme Provider
export default function Resume() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}