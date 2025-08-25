import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  href, 
  className = "", 
  ...props 
}) => {
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

export default Button;
