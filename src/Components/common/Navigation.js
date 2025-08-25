import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiZap, FiStar, FiTrendingUp, FiCpu, FiCode, FiMail } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  console.log('🚀 Navigation component rendering...');
  const { isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "home", displayName: "Home", icon: <FiZap /> },
    { name: "about", displayName: "About", icon: <FiStar /> },
    { name: "experience", displayName: "Experience", icon: <FiTrendingUp /> },
    { name: "skills", displayName: "Skills", icon: <FiCpu /> },
    { name: "projects", displayName: "Projects", icon: <FiCode /> },
    { name: "contact", displayName: "Contact", icon: <FiMail /> }
  ];

  const scrollToSection = (sectionName) => {
    console.log('🔍 Attempting to scroll to section:', sectionName);
    const element = document.getElementById(sectionName);
    console.log('📍 Found element:', element);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navigation
      console.log('📏 Scrolling to offset:', offsetTop);
      console.log('📍 Element position:', element.offsetTop);
      console.log('📱 Window scroll position:', window.scrollY);
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Verify scroll happened
      setTimeout(() => {
        console.log('✅ New scroll position:', window.scrollY);
      }, 1000);
    } else {
      console.error('❌ Element not found for section:', sectionName);
      console.log('🔍 Available sections:', ['home', 'about', 'experience', 'skills', 'projects', 'contact']);
    }
    setActiveSection(sectionName);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => console.log('🎯 Logo clicked!')}
          >
            GANESH_2055.exe
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  console.log('🖱️ Desktop button clicked:', item.name);
                  scrollToSection(item.name);
                }}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.name
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/25"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.displayName}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.name && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 shadow-lg"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden mb-4 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-2xl"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      console.log('🖱️ Mobile button clicked:', item.name);
                      scrollToSection(item.name);
                    }}
                    className="w-full"
                  >
                    <motion.div
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.name
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                          : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20"
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold">{item.displayName}</span>
                    </motion.div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
