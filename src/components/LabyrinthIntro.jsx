import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LabyrinthIntro = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation time before unmounting
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) onAnimationComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // Metallic Silver Gradient definition
  const silverGradient = (
    <defs>
      <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0E0E0" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#A3A3A3" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {silverGradient}

            {/* Outer Ring Sectors */}
            <motion.path
              d="M100,10 A90,90 0 0,1 190,100"
              stroke="url(#silver-grad)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,190 A90,90 0 0,1 10,100"
              stroke="url(#silver-grad)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M190,100 A90,90 0 0,1 100,190"
              stroke="url(#silver-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Inner Concentric Rings */}
            <motion.circle
              cx="100"
              cy="100"
              r="55"
              stroke="url(#silver-grad)"
              strokeWidth="8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
            />
            
            <motion.circle
              cx="100"
              cy="100"
              r="25"
              stroke="url(#silver-grad)"
              strokeWidth="15"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            />

            {/* The Vertical Line (The "Q" tail) */}
            <motion.line
              x1="100" y1="100" x2="100" y2="195"
              stroke="url(#silver-grad)"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </motion.svg>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-20 text-white tracking-[0.5em] font-light text-sm uppercase"
          >
            Initializing
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LabyrinthIntro;
