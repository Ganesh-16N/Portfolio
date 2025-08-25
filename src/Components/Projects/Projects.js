import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiCode, FiSmartphone, FiMonitor, FiPlay, FiZap, FiLayers, FiTrendingUp, FiStar, FiUsers, FiDownload, FiAward, FiShield, FiCpu, FiDatabase, FiGlobe, FiGithub } from 'react-icons/fi';
import { FaReact, FaApple, FaAndroid, FaGithub } from 'react-icons/fa';
import { SiReact, SiExpo, SiRedux, SiFirebase, SiTypescript, SiJavascript, SiMongodb, SiNodeDotJs, SiNextDotJs, SiTailwindcss, SiJest, SiWebpack } from 'react-icons/si';

import prof from "../../Components/Home/prof.png";
import profite from "../../Components/Projects/Photos/profiteai image.png";
import pmv from "../../Components/Projects/Photos/pmv image.png";
import fikaa_web from "../../Components/Projects/Photos/fikaa_web.png";
import fikaa_app from "../../Components/Projects/Photos/fikaa_app.jpg";
import fikaa1 from "../../Components/Projects/Photos/fikaa_photos/fikaa1.jpeg";
import fikaa2 from "../../Components/Projects/Photos/fikaa_photos/fikaa2.jpeg";
import fikaa3 from "../../Components/Projects/Photos/fikaa_photos/fikaa3.jpeg";
import fikaa4 from "../../Components/Projects/Photos/fikaa_photos/fikaa4.jpeg";
import fikaa5 from "../../Components/Projects/Photos/fikaa_photos/fikaa5.jpeg";
import linkup1 from "../../Components/Projects/Photos/linkup_photos/linkup1.jpeg";
import linkup2 from "../../Components/Projects/Photos/linkup_photos/linkup2.jpeg";
import linkup3 from "../../Components/Projects/Photos/linkup_photos/linkup3.jpeg";
import linkup4 from "../../Components/Projects/Photos/linkup_photos/linkup4.jpeg";
import linkup5 from "../../Components/Projects/Photos/linkup_photos/linkup5.jpeg";
import loan1 from "../../Components/Projects/Photos/loan_photos/loan1.jpeg";
import loan2 from "../../Components/Projects/Photos/loan_photos/loan2.jpeg";
import loan3 from "../../Components/Projects/Photos/loan_photos/loan3.jpeg";
import loan4 from "../../Components/Projects/Photos/loan_photos/loan4.jpeg";
import loan5 from "../../Components/Projects/Photos/loan_photos/loan5.jpeg";
import eventImg from "../../Components/Projects/Photos/linkup_web.png";
import eventVideo from "../../Components/Projects/Photos/linkup_web.png";
import mobileApp1 from "../../Components/Projects/Photos/mobileApp1.jpeg";
import mobileApp2 from "../../Components/Projects/Photos/mobileApp2.jpeg";
// React Native Mobile Apps
const mobileApps = [
  {
    id: "FikaaApp",
    title: "FIKAA - Investment App For Women",
    image: fikaa_app,
    screenshots: [fikaa1, fikaa2, fikaa3, fikaa4, fikaa5],
    description: "A comprehensive fintech application designed exclusively for women to unlock financial freedom through mutual funds investments. Features personalized investment portfolios, educational content, and a supportive community of like-minded women.",
    viewLink: "https://play.google.com/store/apps/details?id=com.fikaa_app&hl=en_IN",
    codeLink: "https://github.com/Ganesh-16N/fikaa-mobile",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Payment Gateway", "Biometric Auth", "Algorithms"],
    category: "FinTech",
    status: "Live",
    platforms: ["Android"],
    metrics: { 
      downloads: "50K+", 
      rating: "4.8/5", 
      users: "25K+",
      performance: "95%",
      crashRate: "0.1%"
    },
    features: [
      "Personalized mutual funds portfolios",
      "Educational content and interactive sessions",
      "Women-focused investment community",
      "Proprietary risk-minimizing algorithms",
      "Secure payment processing",
      "Real-time portfolio tracking"
    ],
    highlights: ["50K+ Downloads", "Women-Focused Fintech", "Backed by Keynote Capitals"]
  },
  {
    id: "LoanRecoveryApp",
    title: "Loan Recovery Agent App",
    image: mobileApp1,
    screenshots: [loan1, loan2, loan3, loan4, loan5],
    description: "Enterprise-grade React Native application for loan recovery agents with advanced features like GPS tracking, digital signatures, camera integration, and real-time data synchronization.",
    viewLink: "#",
    codeLink: "https://github.com/Ganesh-16N/loan-recovery-app",
    technologies: ["React Native", "React Query", "Zustand", "NativeWind", "GPS Tracking", "Digital Signatures"],
    category: "Enterprise",
    status: "Production",
    platforms: ["Android", "iOS"],
    metrics: { 
      agents: "500+", 
      efficiency: "85%", 
      accuracy: "98%",
      performance: "98%",
      crashRate: "0.05%"
    },
    features: [
      "Real-time GPS tracking",
      "Digital signature capture",
      "Camera integration",
      "Background location services",
      "Offline-first architecture",
      "Real-time data sync"
    ],
    highlights: ["Enterprise Solution", "500+ Active Agents", "98% Accuracy"]
  },
  {
    id: "LinkupApp",
    title: "Linkup - Event Management Platform",
    image: eventImg,
    screenshots: [linkup1, linkup2, linkup3, linkup4, linkup5],
    description: "A comprehensive event management platform for both users and organizers. Organizers can create studios, host events, and manage teams with permissions. Users can discover, book, and attend events with seamless QR verification and real-time updates.",
    viewLink: "#",
    codeLink: "https://github.com/Ganesh-16N/event-management",
    technologies: ["React Native", "Next.js", "WebSockets", "QR Code", "Real-time", "TypeScript", "Team Management"],
    category: "Events",
    status: "Development",
    platforms: ["Android", "iOS"],
    metrics: { 
      features: "15+", 
      tests: "95%", 
      performance: "A+",
      users: "2K+",
      events: "50+",
      studios: "25+"
    },
    features: [
      "Studio creation and management",
      "Team management with permissions",
      "Event hosting and discovery",
      "QR code ticket verification",
      "Real-time notifications",
      "Payment integration"
    ],
    highlights: ["Dual Platform", "Team Management", "Studio Creation"]
  },

];

// Web Applications
const webApps = [
  {
    id: "FikaaWeb",
    title: "FIKAA Web Platform",
    image: fikaa_web,
    description: "Comprehensive fintech web platform for mutual funds and digital gold investments. Features advanced analytics, secure payment processing, and responsive design.",
    viewLink: "https://app.fikaa.in/login",
    codeLink: "https://github.com/Ganesh-16N/fikaa-web",
    technologies: ["React", "TypeScript", "Redux", "Firebase", "Payment Gateway", "Analytics"],
    category: "FinTech",
    status: "Live",
    platforms: ["Web"],
    metrics: { 
      users: "10K+", 
      rating: "4.8/5", 
      uptime: "99.9%",
      performance: "95%",
      conversion: "8%"
    },
    features: [
      "Advanced portfolio analytics",
      "Secure payment processing",
      "Real-time market data",
      "Responsive design",
      "User dashboard",
      "Investment tracking"
    ],
    highlights: ["99.9% Uptime", "10K+ Users", "4.8★ Rating"]
  },
  {
    id: "ProfiteAI",
    title: "Profite.ai - Finance Analytics",
    image: profite,
    description: "Advanced finance analysis platform using React, Redux, and real-time data visualization for comprehensive market insights and investment strategies.",
    viewLink: "https://profitenewdev.netlify.app",
    codeLink: "https://github.com/Ganesh-16N/profite-ai",
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js", "Real-time Data", "Analytics"],
    category: "Analytics",
    status: "Live",
    platforms: ["Web"],
    metrics: { 
      users: "5K+", 
      rating: "4.6/5", 
      uptime: "99.5%",
      performance: "90%",
      accuracy: "95%"
    },
    features: [
      "Real-time market data",
      "Advanced charting",
      "Investment analysis",
      "Portfolio tracking",
      "Risk assessment",
      "Performance metrics"
    ],
    highlights: ["Real-time Analytics", "95% Accuracy", "5K+ Users"]
  },
  {
    id: "PlanMyVenture",
    title: "Plan My Venture",
    image: pmv,
    description: "MERN-stack web application delivering scalable, responsive solutions for startups and business planning with advanced features and analytics.",
    viewLink: "https://planmyventure.com/",
    codeLink: "https://github.com/Ganesh-16N/plan-my-venture",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Analytics"],
    category: "Business",
    status: "Live",
    platforms: ["Web"],
    metrics: { 
      users: "15K+", 
      rating: "4.7/5", 
      uptime: "99.8%",
      performance: "88%",
      growth: "25%"
    },
    features: [
      "Business planning tools",
      "Financial modeling",
      "Market analysis",
      "Team collaboration",
      "Progress tracking",
      "Resource management"
    ],
    highlights: ["15K+ Users", "99.8% Uptime", "25% Growth"]
  }
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
          cx={Math.random() * 100}
          cy={Math.random() * 100}
          r="2"
          fill="url(#neuralGradient)"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            r: [1, 3, 1]
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
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



// Project Card Component
const ProjectCard = ({ project, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-purple-600/5 to-pink-600/5" />
        
        {/* Project Image */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          {project.screenshots ? (
            <div className="flex h-full gap-3 p-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="flex-1 relative group overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  {/* Screenshot Number Badge */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div className="h-full relative group overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
              project.status === 'Production' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
              'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Platform Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {project.platforms.map((platform, index) => (
              <div key={platform} className="flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full text-xs text-gray-300">
                {platform === 'Android' ? <FaAndroid className="text-green-400" /> :
                 platform === 'iOS' ? <FaApple className="text-gray-300" /> :
                 <FiGlobe className="text-blue-400" />}
                {platform}
              </div>
            ))}
          </div>

          {/* Screenshot Indicator */}
          {project.screenshots && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/70 rounded-full text-xs text-white font-semibold backdrop-blur-sm">
              {project.screenshots.length} Screenshots
            </div>
          )}


        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30 font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-gray-500/10 text-gray-400 text-xs rounded-full font-medium">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Metrics:</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                <motion.div 
                  key={key} 
                  className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(31, 41, 55, 0.8)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-lg font-bold text-cyan-400 mb-1">{value}</div>
                  <div className="text-xs text-gray-400 capitalize font-medium">{key}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 3).map((feature, index) => (
                <span key={feature} className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-400/30">
                  {feature}
                </span>
              ))}
              {project.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded-full">
                  +{project.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, index) => (
                <span key={highlight} className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-400/30">
                  <FiStar className="text-xs" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.viewLink && (
              <motion.a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink className="text-sm" />
                {isMobile ? 'View App' : 'View Live'}
              </motion.a>
            )}
            {project.codeLink && (
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiGithub className="text-sm" />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Projects Section Component
const Projects = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <NeuralNetwork />
      <FloatingOrb className="w-96 h-96 bg-cyan-500/10 top-20 left-20" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-purple-500/10 bottom-20 right-20" delay={2} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Showcasing my expertise in React Native development, mobile app architecture, and full-stack solutions. 
            Each project demonstrates advanced features, performance optimization, and user experience excellence.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex bg-gray-800/50 rounded-xl p-1 backdrop-blur-sm border border-cyan-500/30">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiSmartphone className="text-lg" />
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FiMonitor className="text-lg" />
              Web Apps
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {(activeTab === 'mobile' ? mobileApps : webApps).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isMobile={activeTab === 'mobile'}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next React Native project. I bring expertise in mobile app development, 
            performance optimization, and delivering exceptional user experiences.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;