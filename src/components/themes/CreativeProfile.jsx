import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const CreativeProfile = ({ member }) => {
  return (
    <div className="font-sans bg-black text-white min-h-full rounded-xl overflow-hidden shadow-2xl relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0" />
      
      {/* Hero Section */}
      <div className="relative z-10 h-64 md:h-80 overflow-hidden">
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover opacity-60 blur-sm scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
           <motion.h1 
             initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
             className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
           >
             {member.name}
           </motion.h1>
           <p className="text-xl text-gray-300 uppercase tracking-widest mt-2">{member.role}</p>
        </div>
      </div>

      <div className="relative z-10 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-1 border-t border-white/20 pt-4">
           <h3 className="text-xs font-bold uppercase text-gray-500 mb-2">Biography</h3>
           <p className="text-gray-300 leading-relaxed text-sm">
             {member.bio}
           </p>
           <div className="mt-8 flex gap-4">
             {/* Social Circles */}
             <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
               <span className="text-xs font-bold">In</span>
             </div>
             <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
               <span className="text-xs font-bold">Be</span>
             </div>
           </div>
         </div>

         <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase text-gray-500 mb-4">Showreel / Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Placeholder for video cards */}
               {[1, 2, 3, 4].map((item) => (
                 <motion.div 
                   key={item}
                   whileHover={{ scale: 1.02 }}
                   className="aspect-video bg-gray-800 rounded-lg relative group cursor-pointer overflow-hidden"
                 >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
                       <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                          <FaPlay size={14} className="ml-1" />
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default CreativeProfile;
