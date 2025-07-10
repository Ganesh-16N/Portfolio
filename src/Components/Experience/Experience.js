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
    className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-default"
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
    className="flex items-start gap-3 group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {achievement}
    </span>
  </motion.div>
);

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer (React Native)",
      company: "AlphawareNext",
      location: "Mumbai, Maharashtra",
      duration: "Apr 2024 – Present",
      status: "CURRENT",
      description: "Developed a React Native app for loan recovery agents with features like profile management, camera access, location tracking, background location services, and digital signatures.",
      technologies: ["React Native", "React Query", "Zustand", "NativeWind", "Tailwind CSS"],
      achievements: [
        "Developed comprehensive loan recovery agent app",
        "Implemented real-time location tracking services",
        "Integrated camera access and digital signatures",
        "Utilized React Query for optimal API handling",
        "Ensured cross-platform compatibility (Android/iOS)"
      ],
      icon: "📱",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "FIKAA",
      location: "Mumbai, Maharashtra",
      duration: "Feb 2024 – March 2025",
      status: "COMPLETED",
      description: "Built a fintech app (Fikaa) with React Native, Redux, and NativeBase, integrating payment gateways and biometric authentication, achieving a 4.8/5 rating on app stores.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Next.js", "Node.js", "MongoDB"],
      achievements: [
        "Achieved 4.8/5 rating on app stores",
        "Reduced load times by 35% with Next.js optimization",
        "Improved Lighthouse score from 70 to 92",
        "Increased organic traffic by 20% within 3 months",
        "Boosted user retention by 15% across platforms"
      ],
      icon: "💰",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Front-End Developer",
      company: "Plan My Venture",
      location: "Mumbai, Maharashtra",
      duration: "Jan 2023 – Jun 2023",
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
    <section id="experience" className="py-24 bg-gradient-to-br from-black via-indigo-900/20 to-gray-900 relative overflow-hidden">
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
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
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start mb-16 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50 z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="ml-16 flex-1">
                <HolographicCard className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl">{exp.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-cyan-400 text-lg font-semibold mb-2">
                            <span>{exp.company}</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-4 text-purple-300">
                            <div className="flex items-center gap-2">
                              <FiCalendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiMapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <motion.div 
                        className={`text-sm font-mono px-4 py-2 rounded-full border ${
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

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                      <FiCpu /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <TechBadge key={i} tech={tech} delay={i * 0.1} />
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                      <FiAward /> Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
            <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
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