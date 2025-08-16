import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LabyrinthIntro = ({ onAnimationComplete }) => {
  const [introVisible, setIntroVisible] = useState(true);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };
  
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
      onAnimationComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {introVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[100]"
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          exit="exit"
        >
          <motion.svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.g variants={containerVariants} filter="url(#glow)">
              <motion.path d="M100,20 A80,80 0 1,1 99.9,20.05" stroke="#818cf8" strokeWidth="4" variants={pathVariants} />
              <motion.path d="M100,50 A50,50 0 1,1 50,100" stroke="#a78bfa" strokeWidth="6" variants={pathVariants} />
              <motion.path d="M100,100 Q120,120 140,140" stroke="#c4b5fd" strokeWidth="5" strokeLinecap="round" variants={pathVariants} />
              <motion.path d="M160,100 A60,60 0 0,0 100,40" stroke="#6366f1" strokeWidth="3" variants={pathVariants} />
              <motion.path d="M40,100 A60,60 0 0,1 100,160" stroke="#4f46e5" strokeWidth="2" variants={pathVariants} />
            </motion.g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LabyrinthIntro;