import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiDownload, FiMail, FiMapPin, FiLinkedin, FiGithub, FiExternalLink, FiCode, FiZap, FiStar, FiTrendingUp, FiShield, FiCpu, FiDatabase, FiGlobe, FiSmartphone, FiCalendar, FiAward, FiUsers, FiHeart } from "react-icons/fi";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiMongodb, SiTailwindcss, SiNextdotjs, SiRedux, SiFirebase } from "react-icons/si";
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterFill } from "react-icons/ri";



// Quantum Particle System
const QuantumParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
    initial={{ 
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      scale: 0 
    }}
    animate={{
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
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

// About Section with Quantum Background
const About = () => {
  return (
    <section id="About" className="py-16 sm:py-20 md:py-24 bg-black relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Background Effects from Contact Component */}
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ABOUT_ME.exe
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HolographicCard className="p-8">
              <div className="text-cyan-400 text-lg mb-6 font-mono">
                <span className="text-green-400">{">"}</span> System.out.println("Hello, Mobile World!");
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a <span className="text-cyan-400 font-semibold">quantum-level mobile developer</span> with 
                2+ years of experience architecting the future of mobile applications. My neural networks 
                are primarily trained in <span className="text-purple-400 font-semibold">React Native</span>, with expertise in React and cutting-edge fintech solutions.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                When I'm not building cross-platform mobile experiences or optimizing native performance, you'll find me exploring 
                the latest in <span className="text-purple-400 font-semibold">mobile-first AI integration</span> and 
                crafting native apps that blur the line between iOS, Android, and digital magic.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <FuturisticButton variant="secondary" size="sm">
                  <FiDownload /> Download CV
                </FuturisticButton>
                <FuturisticButton variant="neon" size="sm" onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <FiMail /> Get in Touch
                </FuturisticButton>
              </div>
            </HolographicCard>
          </motion.div>

          {/* Right Side - Interactive Elements */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Code Preview */}
            <HolographicCard className="p-6">
              <div className="text-cyan-400 text-sm mb-4 font-mono">
                <span className="text-green-400">{">"}</span> developer.skills.js
              </div>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-purple-400">const <span className="text-cyan-400">ganesh</span> = {"{"}
                </div>
                <div className="ml-4 text-gray-300">
                  <div><span className="text-green-400">mobile</span>: <span className="text-yellow-400">["React Native", "Expo", "Native Modules"]</span>,</div>
                  <div><span className="text-green-400">web</span>: <span className="text-yellow-400">["React", "Next.js", "TypeScript"]</span>,</div>
                  <div><span className="text-green-400">backend</span>: <span className="text-yellow-400">["Node.js", "Express", "MongoDB"]</span>,</div>
                  <div><span className="text-green-400">passion</span>: <span className="text-yellow-400">"Creating mobile magic"</span></div>
                </div>
                <div className="text-purple-400">{"}"}</div>
              </div>
            </HolographicCard>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FiSmartphone />, title: "Mobile First", desc: "iOS & Android Native" },
                { icon: <FiZap />, title: "Performance", desc: "60fps Guaranteed" },
                { icon: <FiGlobe />, title: "Cross Platform", desc: "Write Once, Run Anywhere" },
                { icon: <FiCpu />, title: "Native Modules", desc: "Hardware Integration" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20 text-center"
                >
                  <div className="text-2xl text-cyan-400 mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm">{item.title}</div>
                  <div className="text-gray-400 text-xs">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// React Native Skills Section
const ReactNativeSkills = () => {
  const skillCategories = [
    {
      title: "Core React Native",
      icon: <SiReact className="text-2xl" />,
      skills: [
        { name: "React Native CLI", level: 95 },
        { name: "Expo Development", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "JSX/TSX", level: 92 }
      ]
    },
    {
      title: "State Management",
      icon: <SiRedux className="text-2xl" />,
      skills: [
        { name: "Redux Toolkit", level: 90 },
        { name: "Zustand", level: 85 },
        { name: "Context API", level: 92 },
        { name: "React Query", level: 88 },
        { name: "AsyncStorage", level: 85 }
      ]
    },
    {
      title: "Native Features",
      icon: <FiSmartphone className="text-2xl" />,
      skills: [
        { name: "Camera Integration", level: 90 },
        { name: "GPS/Location", level: 88 },
        { name: "Push Notifications", level: 85 },
        { name: "Biometric Auth", level: 82 },
        { name: "Deep Linking", level: 80 }
      ]
    },
    {
      title: "Performance & Testing",
      icon: <FiZap className="text-2xl" />,
      skills: [
        { name: "Performance Optimization", level: 88 },
        { name: "Memory Management", level: 85 },
        { name: "Jest Testing", level: 82 },
        { name: "Detox E2E", level: 78 },
        { name: "Bundle Optimization", level: 85 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <SiFirebase className="text-2xl" />,
      skills: [
        { name: "Firebase", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 80 },
        { name: "WebSockets", level: 85 },
        { name: "Node.js", level: 88 }
      ]
    },
    {
      title: "Deployment & CI/CD",
      icon: <FiShield className="text-2xl" />,
      skills: [
        { name: "App Store Deployment", level: 90 },
        { name: "Play Store Deployment", level: 90 },
        { name: "CodePush", level: 85 },
        { name: "Fastlane", level: 80 },
        { name: "GitHub Actions", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              React Native Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive React Native development skills covering mobile app architecture, 
            performance optimization, native integrations, and deployment strategies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl border border-cyan-500/30 shadow-2xl backdrop-blur-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="p-6 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features Showcase */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Mobile Features
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSmartphone className="text-4xl" />,
                title: "Native Integrations",
                description: "Deep integration with device features like camera, GPS, biometrics, and sensors",
                features: ["Camera & Gallery", "GPS Tracking", "Biometric Auth", "Device Sensors"],
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: <FiZap className="text-4xl" />,
                title: "Performance Optimization",
                description: "Advanced techniques for smooth animations and optimal memory usage",
                features: ["Bundle Optimization", "Memory Management", "Lazy Loading", "Image Optimization"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <FiShield className="text-4xl" />,
                title: "Security & Deployment",
                description: "Enterprise-grade security and seamless deployment strategies",
                features: ["Code Obfuscation", "API Security", "App Store Deployment", "CI/CD Pipeline"],
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-xl h-full">
                  <div className={`text-center mb-6 p-4 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-cyan-500/30`}>
                    <div className="text-cyan-400 mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <motion.div 
                        key={item} 
                        className="flex items-center gap-3 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Performance Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Bundle Size", value: "2.1MB", improvement: "40%", icon: <FiZap className="text-2xl" /> },
              { label: "Startup Time", value: "1.2s", improvement: "57%", icon: <FiTrendingUp className="text-2xl" /> },
              { label: "Memory Usage", value: "45MB", improvement: "44%", icon: <FiCpu className="text-2xl" /> },
              { label: "App Rating", value: "4.8★", improvement: "98%", icon: <FiStar className="text-2xl" /> }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 rounded-2xl p-6 border border-cyan-500/30 backdrop-blur-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-cyan-400 mb-3 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-xs font-semibold">+{metric.improvement}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;