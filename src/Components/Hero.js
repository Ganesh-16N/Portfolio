import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMail, 
  FiDownload, 
  FiPlay, 
  FiSmartphone, 
  FiTrendingUp, 
  FiGlobe,
  FiAward,
  FiStar,
  FiUsers,
  FiShield
} from "react-icons/fi";
import { FaReact, FaApple, FaAndroid, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiExpo, SiRedux, SiFirebase, SiMongodb } from "react-icons/si";
import Button from "./common/Button";

// Quantum Particle System
const QuantumParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
    initial={{ 
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      scale: 0 
    }}
    animate={{
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      scale: [0, 1, 0],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Holographic Grid
const HolographicGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ top: `${(i * 5)}%` }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          style={{ left: `${(i * 5)}%` }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scaleY: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </div>
);

// Hero Section
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Senior React Native Developer",
    "Performance Optimization Specialist",
    "Cross-Platform Expert",
    "Mobile App Architect"
  ];

  const reactNativeSkills = [
    "React Native CLI", "Expo", "Native Modules", "Performance Optimization",
    "Offline-First", "Push Notifications", "Deep Linking", "App Store Deployment"
  ];

  const techStack = [
    { name: "React Native", icon: <SiReact />, level: "Expert", color: "text-cyan-400" },
    { name: "Expo", icon: <SiExpo />, level: "Advanced", color: "text-blue-400" },
    { name: "Redux", icon: <SiRedux />, level: "Expert", color: "text-purple-400" },
    { name: "Firebase", icon: <SiFirebase />, level: "Advanced", color: "text-orange-400" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Advanced", color: "text-green-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Quantum Background Effects */}
      <HolographicGrid />
      
      {/* Quantum Particles */}
      {[...Array(30)].map((_, i) => (
        <QuantumParticle key={i} delay={i * 0.2} />
      ))}
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Professional Avatar */}
          <motion.div
            className="relative mx-auto mt-20 sm:mt-32 md:mt-40 mb-6 sm:mb-8 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-[0_0_100px_rgba(0,255,255,0.3)]">
              <div className="w-full h-full bg-gray-900 rounded-full p-4 sm:p-6 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl md:text-7xl">👨‍💻</div>
                </div>
              </div>
            </div>
            
            {/* Quantum Status Indicators */}
            <motion.div
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-400/50"
              animate={{ 
                rotate: 360,
                boxShadow: [
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 40px rgba(0,255,255,0.8)",
                  "0 0 20px rgba(0,255,255,0.5)"
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <FiSmartphone className="text-white text-sm sm:text-lg" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-green-400/50"
              animate={{ 
                rotate: -360,
                boxShadow: [
                  "0 0 20px rgba(34,197,94,0.5)",
                  "0 0 40px rgba(34,197,94,0.8)",
                  "0 0 20px rgba(34,197,94,0.5)"
                ]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <SiReact className="text-white text-sm sm:text-lg" />
            </motion.div>

            {/* Quantum Field Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 px-4">
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                GANESH NAGARGOJE
              </motion.span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 h-8 sm:h-12 flex items-center justify-center px-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-cyan-400 font-semibold text-center"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Senior React Native Developer with expertise in building high-performance, scalable mobile applications. 
              Specialized in cross-platform development, performance optimization, and delivering exceptional user experiences.
            </motion.p>
          </motion.div>

          {/* React Native Skills */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl text-cyan-400 font-semibold mb-3 sm:mb-4 px-4">React Native Expertise</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
              {reactNativeSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 5px 15px rgba(0,255,255,0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl text-purple-400 font-semibold mb-3 sm:mb-4 px-4">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0,255,255,0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium hidden sm:block">{tech.name}</span>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-1 sm:px-2 py-1 rounded-full">{tech.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { 
                value: "3+", 
                label: "Years React Native", 
                icon: <SiReact className="text-xl sm:text-3xl" />,
                color: "text-cyan-400",
                detail: "Expert Level"
              },
              { 
                value: "8+", 
                label: "Mobile Apps Deployed", 
                icon: <FiSmartphone className="text-xl sm:text-3xl" />,
                color: "text-purple-400",
                detail: "Production Ready"
              },
              { 
                value: "550K+", 
                label: "App Downloads", 
                icon: <FiTrendingUp className="text-xl sm:text-3xl" />,
                color: "text-green-400",
                detail: "Active Users"
              },
              { 
                value: "4.8★", 
                label: "App Store Rating", 
                icon: <FiStar className="text-xl sm:text-3xl" />,
                color: "text-yellow-400",
                detail: "User Satisfaction"
              }
            ].map((stat, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-purple-600/5 to-pink-600/5" />
                <div className="relative z-10 p-3 sm:p-6 text-center">
                  <motion.div 
                    className={`${stat.color} mb-2 sm:mb-3 flex justify-center`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-lg sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-cyan-400 hidden sm:block">{stat.detail}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Platform Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FaApple className="text-gray-300 text-lg sm:text-xl" />
              <span className="text-gray-300 text-xs sm:text-sm hidden sm:block">iOS Development</span>
              <span className="text-xs text-green-400">✓</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FaAndroid className="text-gray-300 text-lg sm:text-xl" />
              <span className="text-gray-300 text-xs sm:text-sm hidden sm:block">Android Development</span>
              <span className="text-xs text-green-400">✓</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FiGlobe className="text-gray-300 text-lg sm:text-xl" />
              <span className="text-gray-300 text-xs sm:text-sm hidden sm:block">Web Development</span>
              <span className="text-xs text-green-400">✓</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FiShield className="text-gray-300 text-lg sm:text-xl" />
              <span className="text-gray-300 text-xs sm:text-sm hidden sm:block">App Store Verified</span>
              <span className="text-xs text-green-400">✓</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button 
              variant="primary" 
              size="md"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiMail className="text-base sm:text-lg" />
              Start Project
            </Button>
            
            <Button 
              variant="ghost" 
              size="md"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiPlay className="text-base sm:text-lg" />
              View Projects
            </Button>
            
            <Button 
              variant="secondary" 
              size="md"
              className="w-full sm:w-auto"
              href="#"
            >
              <FiDownload className="text-base sm:text-lg" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/Ganesh-16N"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-black/50 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaGithub className="text-xl sm:text-2xl text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ganesh-nagargoje"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-black/50 rounded-full border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <FaLinkedin className="text-xl sm:text-2xl text-gray-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;