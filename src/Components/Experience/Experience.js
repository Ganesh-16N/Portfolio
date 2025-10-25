import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCpu, FiTrendingUp, FiAward, FiMapPin, FiArrowRight } from 'react-icons/fi';

// Holographic Card Component
const HolographicCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl backdrop-blur-xl
        bg-gradient-to-br from-white/5 to-white/10
        border border-white/20 shadow-2xl
        hover:shadow-cyan-500/25 transition-all duration-500
        group ${className}
      `}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Tech Badge Component
const TechBadge = ({ tech, delay = 0 }) => (
  <motion.span
    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-default"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {tech}
  </motion.span>
);

// Achievement Item Component
const AchievementItem = ({ achievement, delay = 0 }) => (
  <motion.div
    className="flex items-start gap-2 sm:gap-3 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
      {achievement}
    </span>
  </motion.div>
);

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software developer",
      company: "AlphawareNext",
      location: "Mumbai, Maharashtra",
      duration: "Apr 2024 – Present",
      status: "CURRENT",
      description: "Leading React Native development for enterprise applications with focus on performance optimization, native integrations, and scalable architecture. Developed comprehensive loan recovery agent app with advanced features.",
      technologies: ["React Native", "TypeScript", "React Query", "Zustand", "NativeWind", "GPS Tracking", "Digital Signatures"],
      achievements: [
        "Developed enterprise-grade loan recovery agent app serving 500+ agents",
        "Implemented real-time GPS tracking with 98% accuracy and background location services",
        "Integrated camera access, digital signatures, and biometric authentication",
        "Optimized app performance achieving 98% crash-free rate and 95% user satisfaction",
        "Architected offline-first solution with real-time data synchronization",
        "Mentored junior developers and established coding standards"
      ],
      icon: "📱",
      color: "from-cyan-400 to-blue-500",
      metrics: {
        agents: "500+",
        accuracy: "98%",
        performance: "98%",
        satisfaction: "95%"
      }
    },
    {
      id: 2,
      title: "React Native Developer",
      company: "FIKAA",
      location: "Mumbai, Maharashtra",
      duration: "Feb 2024 – March 2025",
      status: "COMPLETED",
      description: "Built and deployed comprehensive fintech mobile application with advanced features including secure payment processing, biometric authentication, and real-time portfolio tracking.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Payment Gateway", "Biometric Auth", "Push Notifications"],
      achievements: [
        "Achieved 4.8/5 rating on app stores with 50K+ downloads",
        "Implemented secure payment gateway integration with 99.9% success rate",
        "Reduced app load times by 40% through bundle optimization and lazy loading",
        "Integrated biometric authentication and push notifications for enhanced security",
        "Developed women-focused fintech solution with personalized algorithms",
        "Implemented real-time portfolio tracking with educational content"
      ],
      icon: "💰",
      color: "from-green-400 to-emerald-500",
      metrics: {
        downloads: "50K+",
        rating: "4.8/5",
        performance: "95%",
        uptime: "99.9%"
      }
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "Plan My Venture",
      location: "Mumbai, Maharashtra",
      duration: "Jan 2023 – Dec 2023",
      status: "COMPLETED",
      description: "Led Profite.ai development with React.js and Redux, integrating Firebase, resulting in a 25% increase in user engagement.",
      technologies: ["TypeScript", "React.js", "Firebase", "Node.js", "MongoDB", "Express.js"],
      achievements: [
        "Led Profite.ai development with 25% engagement increase",
        "Delivered Plan My Venture with 99% uptime",
        "Achieved 40% faster load times",
        "Improved calculation accuracy by 30%",
        "Collaborated in Agile sprints with UX designers"
      ],
      icon: "🚀",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-indigo-900/20 to-gray-900 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            EXPERIENCE_LOG.sys
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Journey through my professional development experience, showcasing growth from frontend development to full-stack solutions.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Responsive positioning */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Timeline Node - Responsive positioning */}
              <motion.div 
                className="absolute left-2 sm:left-4 md:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 sm:border-4 border-black shadow-lg shadow-cyan-400/50 z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content - Responsive margin */}
              <div className="ml-8 sm:ml-12 md:ml-16 flex-1">
                <HolographicCard className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span className="text-2xl sm:text-3xl">{exp.icon}</span>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-cyan-400 text-base sm:text-lg font-semibold mb-2">
                            <span>{exp.company}</span>
                            <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-purple-300 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                              <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <motion.div 
                        className={`text-xs sm:text-sm font-mono px-2 sm:px-4 py-1 sm:py-2 rounded-full border ${
                          exp.status === 'CURRENT' 
                            ? 'text-green-400 border-green-400/50 bg-green-400/10' 
                            : 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        STATUS: {exp.status}
                      </motion.div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <FiCpu className="w-4 h-4 sm:w-5 sm:h-5" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech, i) => (
                        <TechBadge key={i} tech={tech} delay={i * 0.1} />
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <FiAward className="w-4 h-4 sm:w-5 sm:h-5" /> Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <AchievementItem key={i} achievement={achievement} delay={i * 0.1} />
                      ))}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${exp.color} opacity-60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </HolographicCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <HolographicCard className="p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-300">Years Experience</div>
          </HolographicCard>
          <HolographicCard className="p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-300">Projects Completed</div>
          </HolographicCard>
          <HolographicCard className="p-6 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;