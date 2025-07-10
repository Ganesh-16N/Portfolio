import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiGithub, 
  FiZap, 
  FiWifi, 
  FiRadio,
  FiActivity,
  FiCpu,
  FiDatabase
} from 'react-icons/fi';

// Quantum Particle System
const QuantumParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
    initial={{ 
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: 0 
    }}
    animate={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
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

// Quantum Connection Hub
const QuantumHub = ({ children }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-2xl border-2 border-cyan-500/30 shadow-[0_0_100px_rgba(0,255,255,0.3)]">
      {/* Quantum Field Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
      
      {/* Corner Decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-4 h-4 border-2 border-cyan-400 ${
            i === 0 ? 'top-4 left-4 border-r-0 border-b-0' :
            i === 1 ? 'top-4 right-4 border-l-0 border-b-0' :
            i === 2 ? 'bottom-4 left-4 border-r-0 border-t-0' :
            'bottom-4 right-4 border-l-0 border-t-0'
          }`}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  </motion.div>
);

// Futuristic Social Link
const QuantumSocialLink = ({ href, icon: Icon, platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 2000 + (index * 500));
    
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block p-6 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          rotateY: 15,
          boxShadow: "0 25px 50px rgba(0,255,255,0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Quantum Aura */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100"
          animate={{
            background: isHovered
              ? [
                  "linear-gradient(45deg, rgba(0,255,255,0.2) 0%, rgba(168,85,247,0.2) 50%, rgba(236,72,153,0.2) 100%)",
                  "linear-gradient(45deg, rgba(236,72,153,0.2) 0%, rgba(0,255,255,0.2) 50%, rgba(168,85,247,0.2) 100%)",
                  "linear-gradient(45deg, rgba(168,85,247,0.2) 0%, rgba(236,72,153,0.2) 50%, rgba(0,255,255,0.2) 100%)"
                ]
              : "linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.1) 100%)"
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* Status Indicator */}
        <motion.div
          className="absolute top-2 right-2 flex items-center gap-2"
          animate={{
            opacity: isActive ? 1 : 0.3
          }}
        >
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{
              scale: isActive ? [1, 1.5, 1] : 1,
              opacity: isActive ? [1, 0.5, 1] : 0.3
            }}
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0
            }}
          />
          <span className="text-xs text-green-400 font-mono">ONLINE</span>
        </motion.div>
        
        {/* Icon with Holographic Effect */}
        <div className="relative mb-4">
          <motion.div
            className="text-6xl text-cyan-400 relative z-10"
            animate={{
              textShadow: isHovered
                ? [
                    "0 0 20px rgba(0,255,255,0.8)",
                    "0 0 40px rgba(0,255,255,0.6)",
                    "0 0 20px rgba(0,255,255,0.8)"
                  ]
                : "0 0 10px rgba(0,255,255,0.3)"
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            <Icon />
          </motion.div>
          
          {/* Holographic Duplicate */}
          <motion.div
            className="absolute inset-0 text-6xl text-purple-400 opacity-20"
            animate={{
              x: isHovered ? [0, 2, -2, 0] : 0,
              y: isHovered ? [0, -2, 2, 0] : 0
            }}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          >
            <Icon />
          </motion.div>
        </div>
        
        {/* Platform Name */}
        <motion.h3
          className="text-xl font-bold text-white mb-2"
          animate={{
            color: isHovered ? ["#ffffff", "#00f5ff", "#a855f7", "#ffffff"] : "#ffffff"
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        >
          {platform}
        </motion.h3>
        
        {/* Connection Status */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <FiWifi className="w-4 h-4" />
          <span className="font-mono">SECURE_LINK</span>
        </div>
        
        {/* Quantum Particles */}
        <AnimatePresence>
          {isHovered && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: 50, 
                y: 50, 
                scale: 0, 
                opacity: 0 
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
};

// System Status Display
const SystemStatus = () => {
  const [stats, setStats] = useState({
    connections: 0,
    bandwidth: 0,
    latency: 0,
    uptime: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        connections: Math.floor(Math.random() * 1000) + 500,
        bandwidth: Math.floor(Math.random() * 100) + 50,
        latency: Math.floor(Math.random() * 20) + 5,
        uptime: 99.9
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {[
        { label: "ACTIVE_LINKS", value: stats.connections, icon: FiActivity, color: "text-green-400" },
        { label: "BANDWIDTH", value: `${stats.bandwidth}%`, icon: FiDatabase, color: "text-blue-400" },
        { label: "LATENCY", value: `${stats.latency}ms`, icon: FiZap, color: "text-yellow-400" },
        { label: "UPTIME", value: `${stats.uptime}%`, icon: FiCpu, color: "text-purple-400" }
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="p-4 rounded-xl bg-black/50 border border-gray-700/50 backdrop-blur-sm"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
            <span className="text-xs text-gray-400 font-mono">{stat.label}</span>
          </div>
          <motion.div
            className={`text-lg font-bold ${stat.color}`}
            key={stat.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {stat.value}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Main Contact Component
const Contact = () => {
  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/ganesh-nagargoje-3a5238231/", 
      icon: FiLinkedin, 
      platform: "LinkedIn",
      description: "Professional Network"
    },
    { 
      href: "https://twitter.com/ganunagargoje16", 
      icon: FiTwitter, 
      platform: "Twitter",
      description: "Social Updates"
    },
    { 
      href: "mailto:ganesh.nagargoje045@gmail.com", 
      icon: FiMail, 
      platform: "Email",
      description: "Direct Communication"
    },
    { 
      href: "https://github.com/Ganesh-16N", 
      icon: FiGithub, 
      platform: "GitHub",
      description: "Code Repository"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden min-h-screen">
      {/* Background Effects */}
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            QUANTUM_CONNECT.sys
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Establishing secure quantum communication channels across the digital metaverse. 
            Let's create the future together in the year 2122.
          </motion.p>
        </motion.div>

        {/* System Status */}
        <SystemStatus />

        {/* Main Connection Hub */}
        <div className="flex justify-center mb-16">
          <QuantumHub>
            <div className="text-center">
              <motion.div
                className="text-4xl mb-6"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FiRadio className="text-cyan-400 mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                QUANTUM COMMUNICATION HUB
              </h3>
              
              <p className="text-gray-400 font-mono">
                Initialize secure connection protocols
              </p>
              
              <motion.div
                className="mt-6 flex justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {["ENCRYPTED", "QUANTUM", "SECURE"].map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-mono"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </QuantumHub>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <QuantumSocialLink
              key={index}
              href={link.href}
              icon={link.icon}
              platform={link.platform}
              index={index}
            />
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-300 text-lg mb-4"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            "In the quantum realm of 2122, every connection shapes the future of technology."
          </motion.p>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500 font-mono">
            <span>SYSTEM_STATUS:</span>
            <motion.span
              className="text-green-400"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              OPERATIONAL
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;