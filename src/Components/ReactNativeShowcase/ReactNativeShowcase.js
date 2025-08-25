import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiZap, FiCpu, FiShield, FiCode, FiTrendingUp } from 'react-icons/fi';
import { SiReact, SiExpo, SiRedux, SiFirebase } from 'react-icons/si';

const ReactNativeShowcase = () => {
  const performanceMetrics = [
    { label: "Bundle Size", value: "2.1MB", improvement: "40%" },
    { label: "Startup Time", value: "1.2s", improvement: "57%" },
    { label: "Memory Usage", value: "45MB", improvement: "44%" },
    { label: "FPS", value: "60", improvement: "33%" }
  ];

  const nativeFeatures = [
    {
      title: "Camera Integration",
      description: "Advanced camera functionality with image processing",
      icon: <FiSmartphone className="text-2xl" />
    },
    {
      title: "GPS Tracking",
      description: "Real-time location tracking with background services",
      icon: <FiCpu className="text-2xl" />
    },
    {
      title: "Push Notifications",
      description: "Cross-platform notifications with deep linking",
      icon: <FiShield className="text-2xl" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              React Native Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced mobile development skills, performance optimization, and native integrations.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl p-6 border border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm mb-1">{metric.label}</div>
                <div className="text-green-400 text-xs">+{metric.improvement}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Native Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nativeFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl p-6 border border-cyan-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactNativeShowcase;
