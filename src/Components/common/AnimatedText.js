import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  animation = "fadeInUp",
  ...props 
}) => {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay, duration }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { delay, duration }
    },
    slideInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { delay, duration }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay, duration }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      transition={selectedAnimation.transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
