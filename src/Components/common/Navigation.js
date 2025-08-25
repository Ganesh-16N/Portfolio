import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiZap, FiStar, FiTrendingUp, FiCpu, FiCode, FiMail } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';

const Navigation = () => {
  const { isDark } = useContext(ThemeContext);
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
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
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

export default Navigation;
