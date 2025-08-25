import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", hover = true, ...props }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current && hover) {
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
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={hover ? {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.1) 0%, transparent 50%)`
      } : {}}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-purple-600/5 to-pink-600/5" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
