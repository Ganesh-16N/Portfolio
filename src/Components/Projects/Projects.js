import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiCode, FiSmartphone, FiMonitor, FiPlay, FiZap, FiLayers, FiTrendingUp } from 'react-icons/fi';

import prof from "../../Components/Home/prof.png";
import profite from "../../Components/Projects/Photos/profiteai image.png";
import pmv from "../../Components/Projects/Photos/pmv image.png";
import fikaa_web from "../../Components/Projects/Photos/fikaa_web.png";
import fikaa_app from "../../Components/Projects/Photos/fikaa_app.jpg";
import eventImg from "../../Components/Projects/Photos/linkup_web.png";
import eventVideo from "../../Components/Projects/Photos/linkup_web.png";

// Web Projects
const webProjects = [
  {
    id: "Fikaa",
    title: "FIKAA Web",
    image: fikaa_web,
    description: "A fintech platform for mutual funds and digital gold, built with React, React Native, and secure payment integrations.",
    viewLink: "https://app.fikaa.in/login",
    technologies: ["React", "React Native", "Payment Gateway", "Firebase"],
    category: "FinTech",
    status: "Live",
    metrics: { users: "10K+", rating: "4.8/5", uptime: "99.9%" }
  },
  {
    id: "Profite",
    title: "Profite.ai",
    image: profite,
    description: "A finance analysis tool using React, Redux, and Tailwind CSS for real-time data insights.",
    viewLink: "https://profitenewdev.netlify.app",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    category: "Analytics",
    status: "Live",
    metrics: { users: "5K+", rating: "4.6/5", uptime: "99.5%" }
  },
  {
    id: "PlanMyVenture",
    title: "Plan My Venture",
    image: pmv,
    description: "A MERN-stack web app delivering scalable, responsive solutions for startups.",
    viewLink: "https://planmyventure.com/",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    category: "Business",
    status: "Live",
    metrics: { users: "15K+", rating: "4.7/5", uptime: "99.8%" }
  },
];

// App Projects
const appProjects = [
  {
    id: "FikaaApp",
    title: "FIKAA App",
    image: fikaa_app,
    description: "A fintech Application for mutual funds and digital gold, built with React, React Native, and secure payment integrations.",
    viewLink: "https://play.google.com/store/apps/details?id=com.fikaa_app&hl=en_IN",
    technologies: ["React Native", "Redux", "Firebase", "Payment Gateway"],
    category: "FinTech",
    status: "Live",
    metrics: { downloads: "25K+", rating: "4.8/5", platforms: "Android/iOS" }
  },
  {
    id: "EventManagement",
    title: "Event Booking",
    image: eventImg,
    video: eventVideo,
    description: "A Next.js-based mobile app with ticket purchasing, QR code verification, and real-time notifications via WebSockets.",
    viewLink: "",
    codeLink: "https://github.com/Ganesh-16N/event-management",
    technologies: ["Next.js", "WebSockets", "QR Code", "Real-time"],
    category: "Events",
    status: "Development",
    metrics: { features: "12+", tests: "95%", performance: "A+" }
  },
];

// Floating Orb Component
const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-xl ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
    }}
  />
);

// Neural Network Background
const NeuralNetwork = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg className="w-full h-full">
      {[...Array(50)].map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 100 + '%'}
          cy={Math.random() * 100 + '%'}
          r="1"
          fill="url(#neuralGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Project Card Component
const ProjectCard = ({ project, index, isApp = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
          animate={{
            background: isHovered 
              ? "linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.1) 100%)"
              : "linear-gradient(135deg, rgba(0,255,255,0.05) 0%, rgba(168,85,247,0.05) 50%, rgba(236,72,153,0.05) 100%)"
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Holographic scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%'
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
        
        <div className="relative z-10 p-8">
          {/* Project Image */}
          <div className="relative mb-6 overflow-hidden rounded-2xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <motion.div
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {project.status}
              </motion.div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <motion.div
                className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30"
                whileHover={{ scale: 1.1 }}
              >
                {project.category}
              </motion.div>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {isApp ? <FiSmartphone className="text-cyan-400" /> : <FiMonitor className="text-cyan-400" />}
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700/50">
              {Object.entries(project.metrics).map(([key, value], i) => (
                <div key={i} className="text-center">
                  <div className="text-sm font-bold text-cyan-400">{value}</div>
                  <div className="text-xs text-gray-500 capitalize">{key}</div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {project.viewLink && (
                <motion.a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Live
                </motion.a>
              )}
              
              {project.codeLink && (
                <motion.a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-cyan-400/50 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiCode className="w-4 h-4" />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Tab Component
const ProjectTab = ({ icon: Icon, label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25' 
        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5" />
    {label}
  </motion.button>
);

// Main Projects Component
const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-indigo-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <NeuralNetwork />
      <FloatingOrb className="w-96 h-96 bg-cyan-500/10 top-20 -left-20" delay={0} />
      <FloatingOrb className="w-64 h-64 bg-purple-500/10 bottom-40 -right-10" delay={2} />
      <FloatingOrb className="w-80 h-80 bg-pink-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            PROJECT_MATRIX.exe
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Exploring the digital frontier through innovative web applications and mobile solutions that push the boundaries of user experience and technology.
          </motion.p>
        </motion.div>
        
        {/* Project Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <ProjectTab
            icon={FiMonitor}
            label="Web Projects"
            isActive={activeTab === 'web'}
            onClick={() => setActiveTab('web')}
          />
          <ProjectTab
            icon={FiSmartphone}
            label="Mobile Apps"
            isActive={activeTab === 'app'}
            onClick={() => setActiveTab('app')}
          />
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {(activeTab === 'web' ? webProjects : appProjects).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isApp={activeTab === 'app'}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div 
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FiLayers className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400">Projects</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FiZap className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Users</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border border-pink-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FiTrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4.7+</div>
            <div className="text-gray-400">Avg Rating</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border border-cyan-400/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FiCode className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-400">Uptime</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;