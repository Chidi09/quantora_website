import React from 'react';
import { motion } from 'framer-motion';

// Using the provided image description for a metallic feel
const Header = ({ title, subtitle }) => (
  <header className="relative flex flex-col items-center justify-center min-h-[90vh] bg-black text-white overflow-hidden">
    
    {/* Abstract Background Animation - Silver Lines */}
    <div className="absolute inset-0 opacity-20">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-500 rounded-full animate-pulse-fast" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-400 rounded-full" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-600 rounded-full opacity-50" />
    </div>

    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="z-10 mb-8"
    >
      {/* Assuming the image is saved in public folder as logo.jpeg */}
      {/* If it's not there, it falls back to the CSS styled circle */}
      <img 
        src="/logo.jpeg" 
        alt="Quantora Logo" 
        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        onError={(e) => {
           e.target.style.display = 'none';
           if (e.target.nextSibling) {
             e.target.nextSibling.style.display = 'flex';
           }
        }}
      />
      {/* Fallback Logo if image fails */}
      <div className="hidden w-48 h-48 rounded-full bg-gradient-to-br from-gray-300 to-gray-800 items-center justify-center shadow-2xl border-4 border-gray-500">
         <span className="text-5xl font-black text-black">Q</span>
      </div>
    </motion.div>

    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="z-10 text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 text-center"
    >
      QUANTORA
    </motion.h1>
    
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="z-10 text-lg md:text-xl text-center max-w-xl text-gray-400 font-light tracking-widest uppercase"
    >
      Design. Develop. Deliver.
    </motion.p>
  </header>
);

export default Header;
