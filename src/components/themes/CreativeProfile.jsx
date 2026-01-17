import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const CreativeProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-black text-white font-sans relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
        {/* Visual Side (Top on Mobile) */}
        <div className="relative h-[40vh] md:h-auto overflow-hidden">
          <img src={member.avatar} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={member.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-4">
             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 break-words">
               {member.name}
             </h1>
             <p className="text-sm md:text-xl text-gray-400 tracking-widest uppercase font-medium">
               {member.role}
             </p>
          </div>
        </div>

        {/* Content Side (Bottom on Mobile) */}
        <div className="p-6 md:p-20 flex flex-col justify-center bg-black/50 backdrop-blur-sm">
           <div className="mb-12">
             <h3 className="text-[10px] md:text-xs font-bold uppercase text-gray-500 mb-4 border-l-2 border-white pl-3">
               Biography
             </h3>
             <p className="text-base md:text-lg text-gray-300 leading-relaxed">
               {member.bio}
             </p>
           </div>

           <div>
             <h3 className="text-[10px] md:text-xs font-bold uppercase text-gray-500 mb-6 border-l-2 border-white pl-3">
               Showcase
             </h3>
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[1, 2, 3, 4].map(n => (
                  <motion.div 
                    key={n}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer group border border-gray-800 hover:border-white transition-colors overflow-hidden relative"
                  >
                    {/* Placeholder content effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors z-10">
                      <FaPlay size={10} className="ml-1 md:text-sm" />
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default CreativeProfile;
