import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiDownload, 
  FiPlay, 
  FiSmartphone, 
  FiTrendingUp, 
  FiGlobe,
  FiWifi,
  FiRadio,
  FiActivity,
  FiCpu,
  FiDatabase,
  FiZap
} from "react-icons/fi";
import { FaReact, FaNode, FaApple, FaAndroid } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiFirebase, SiReact, SiExpo } from "react-icons/si";

// Theme Context
const ThemeContext = React.createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

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

// Neural Network Visualization
const NeuralNetwork = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    <svg className="w-full h-full">
      {[...Array(100)].map((_, i) => {
        const cx = Math.random() * 100;
        const cy = Math.random() * 100;
        return (
          <motion.g key={i}>
            <motion.circle
              cx={`${cx}%`}
              cy={`${cy}%`}
              r="2"
              fill="url(#neuralGradient)"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                r: [1, 3, 1]
              }}
              transition={{
                duration: 3,
                delay: i * 0.05,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {i < 50 && (
              <motion.line
                x1={`${cx}%`}
                y1={`${cy}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.g>
        );
      })}
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Professional Button Component
const ProfessionalButton = ({ children, variant = "primary", size = "md", onClick, href, className = "", ...props }) => {
  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg hover:shadow-xl focus:ring-gray-500",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500",
    ghost: "bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white shadow-lg focus:ring-gray-500",
    quantum: "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg hover:shadow-xl focus:ring-cyan-500 border border-cyan-500/30"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-2xl"
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
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </ButtonComponent>
  );
};

// Professional Card Component
const ProfessionalCard = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-purple-600/5 to-pink-600/5" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Hero Section
const Hero = () => {
  const { isDark } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "React Native Developer",
    "Mobile App Architect", 
    "Cross-Platform Expert",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { icon: <SiReact className="text-2xl" />, name: "React Native", color: "text-cyan-400" },
    { icon: <SiExpo className="text-2xl" />, name: "Expo", color: "text-purple-400" },
    { icon: <FaReact className="text-2xl" />, name: "React", color: "text-blue-400" },
    { icon: <SiTypescript className="text-2xl" />, name: "TypeScript", color: "text-blue-300" },
    { icon: <SiFirebase className="text-2xl" />, name: "Firebase", color: "text-orange-400" },
    { icon: <FaNode className="text-2xl" />, name: "Node.js", color: "text-green-400" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Quantum Background Effects */}
      <HolographicGrid />
      <NeuralNetwork />
      
      {/* Quantum Particles */}
      {[...Array(30)].map((_, i) => (
        <QuantumParticle key={i} delay={i * 0.2} />
      ))}
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-6xl mx-auto">


          {/* Professional Avatar */}
          <motion.div
            className="relative mx-auto mt-40 mb-8 w-48 h-48 md:w-64 md:h-64"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full p-1 shadow-[0_0_100px_rgba(0,255,255,0.3)]">
              <div className="w-full h-full bg-gray-900 rounded-full p-6 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl md:text-7xl">👨‍💻</div>
                </div>
              </div>
            </div>
            
            {/* Quantum Status Indicators */}
            <motion.div
              className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-400/50"
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
              <FiSmartphone className="text-white text-lg" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-green-400/50"
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
              <SiReact className="text-white text-lg" />
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
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
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
            
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-cyan-400 font-semibold"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Specialized in building high-performance mobile applications with React Native and quantum-enhanced user experiences. 
              Creating the future of cross-platform development.
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
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
                  <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { 
                value: "3+", 
                label: "Years in React Native", 
                icon: <SiReact className="text-3xl" />,
                color: "text-cyan-400"
              },
              { 
                value: "25+", 
                label: "Mobile Apps Deployed", 
                icon: <FiSmartphone className="text-3xl" />,
                color: "text-purple-400"
              },
              { 
                value: "500K+", 
                label: "App Downloads", 
                icon: <FiTrendingUp className="text-3xl" />,
                color: "text-green-400"
              }
            ].map((stat, index) => (
              <ProfessionalCard key={index} className="p-6 text-center">
                <motion.div 
                  className={`${stat.color} mb-3 flex justify-center`}
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
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </ProfessionalCard>
            ))}
          </motion.div>

          {/* Platform Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FaApple className="text-gray-300 text-xl" />
              <span className="text-gray-300 text-sm">iOS Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FaAndroid className="text-gray-300 text-xl" />
              <span className="text-gray-300 text-sm">Android Development</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
              <FiGlobe className="text-gray-300 text-xl" />
              <span className="text-gray-300 text-sm">Web Development</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <ProfessionalButton 
              variant="quantum" 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiMail className="text-lg" />
              Initialize Contact
            </ProfessionalButton>
            
            <ProfessionalButton 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiPlay className="text-lg" />
              Access Projects
            </ProfessionalButton>
            
            <ProfessionalButton 
              variant="ghost" 
              size="lg" 
              href="#"
            >
              <FiDownload className="text-lg" />
              Download Profile
            </ProfessionalButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function QuantumHero() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <Hero />
      </div>
    </ThemeProvider>
  );
}