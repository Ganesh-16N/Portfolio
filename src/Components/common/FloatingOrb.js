import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrb = ({ 
  className = "", 
  delay = 0, 
  duration = 8, 
  scale = [1, 1.2, 1], 
  opacity = [0.3, 0.6, 0.3],
  position = "top-20 left-20",
  size = "w-96 h-96",
  colors = "from-cyan-500/10 to-purple-500/10"
}) => (
  <motion.div
    className={`absolute ${position} ${size} bg-gradient-to-r ${colors} rounded-full blur-3xl ${className}`}
    animate={{
      scale,
      opacity
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default FloatingOrb;
