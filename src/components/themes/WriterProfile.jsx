import React from 'react';
import { motion } from 'framer-motion';
import { FaFeatherAlt } from 'react-icons/fa';

const WriterProfile = ({ member }) => {
  return (
    <div className="font-serif bg-[#f5f5f0] text-gray-900 min-h-full rounded-sm overflow-hidden border-8 border-double border-gray-300 shadow-2xl">
      <div className="p-10 md:p-16 max-w-4xl mx-auto">
        
        {/* Header - Newspaper style */}
        <div className="text-center border-b-2 border-black pb-8 mb-10">
          <motion.div 
             initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
             className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4"
          >
            The Creative Chronicle
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-4">{member.name}</h1>
          <p className="text-xl italic text-gray-600 flex items-center justify-center gap-2">
            <FaFeatherAlt size={14} /> {member.role}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
           {/* Dropcap Bio */}
           <div className="prose prose-lg text-justify leading-relaxed">
             <p>
               <span className="float-left text-7xl font-bold pr-2 mt-[-10px] font-serif">{member.bio.charAt(0)}</span>
               {member.bio.substring(1)}
             </p>
           </div>
           
           {/* Image (Polaroid style) */}
           <div className="flex justify-center">
             <motion.div 
               whileHover={{ rotate: -2, scale: 1.05 }}
               className="bg-white p-4 shadow-xl rotate-2 max-w-xs"
             >
               <img src={member.avatar} alt={member.name} className="w-full h-auto filter sepia-[0.3]" />
               <div className="mt-4 text-center font-handwriting text-gray-500 font-serif italic">
                 {member.role}
               </div>
             </motion.div>
           </div>
        </div>

        {/* Works Section - Chapter list */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold border-b border-black mb-8 pb-2">Selected Narratives</h2>
          <div className="grid gap-6">
             {member.projects && member.projects.map((work, idx) => (
               <div key={idx} className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-300 pb-4 hover:bg-gray-200/50 p-2 transition-colors cursor-pointer">
                 <div>
                   <h3 className="text-xl font-bold">{work.title}</h3>
                   <p className="text-gray-600 italic">{work.desc}</p>
                 </div>
                 <span className="text-sm uppercase tracking-widest text-gray-500 mt-2 md:mt-0">{work.category}</span>
               </div>
             ))}
             {(!member.projects || member.projects.length === 0) && (
               <p className="italic text-gray-500">Portfolio pieces coming soon to this edition...</p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterProfile;
