import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const CreativeProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full min-h-[90vh]">
        {/* Visual Side */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden">
          <img src={member.avatar} className="absolute inset-0 w-full h-full object-cover opacity-80" alt={member.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
             <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2">{member.name}</h1>
             <p className="text-xl text-gray-400 tracking-widest uppercase">{member.role}</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-10 md:p-20 flex flex-col justify-center bg-black/50 backdrop-blur-sm">
           <div className="mb-12">
             <h3 className="text-xs font-bold uppercase text-gray-500 mb-4 border-l-2 border-white pl-3">Biography</h3>
             <p className="text-lg text-gray-300 leading-relaxed">{member.bio}</p>
           </div>

           <div>
             <h3 className="text-xs font-bold uppercase text-gray-500 mb-6 border-l-2 border-white pl-3">Showcase</h3>
             <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(n => (
                  <motion.div 
                    key={n}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer group border border-gray-800 hover:border-white transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <FaPlay size={12} className="ml-1" />
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
