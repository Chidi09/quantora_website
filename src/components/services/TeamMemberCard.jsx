import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt, FaCode, FaFeatherAlt, FaVideo, FaArrowRight } from 'react-icons/fa';

const TeamMemberCard = ({ member, onSelect, onEdit, index }) => {
  
  const getIcon = () => {
    switch(member.roleType) {
      case 'coder': return <FaCode className="text-blue-400" size={18} />;
      case 'writer': return <FaFeatherAlt className="text-pink-400" size={18} />;
      case 'creative': return <FaVideo className="text-green-400" size={18} />;
      default: return <FaArrowRight className="text-white" size={18} />;
    }
  };

  const getThemeStyles = () => {
    switch(member.roleType) {
      case 'coder': return "border-l-2 border-blue-500";
      case 'writer': return "border-r-2 border-pink-500";
      default: return "border-b-2 border-green-500";
    }
  };

  return (
    <motion.div
      layoutId={`card-container-${member.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onSelect}
      className={`group relative bg-[#0a0a0a] p-5 md:p-6 h-full flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden border border-white/5 hover:border-white/20 ${getThemeStyles()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {onEdit && (
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(); }} 
          className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 z-20"
        >
          <FaPencilAlt size={12} />
        </button>
      )}

      <div className="flex items-start justify-between mb-4 md:mb-6 z-10">
        <motion.div 
          layoutId={`card-image-${member.id}`} 
          className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
        >
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-full h-full object-cover" 
            onError={(e) => { e.target.src='https://placehold.co/200x200/1e1b4b/ffffff?text=Q'; }}
          />
        </motion.div>
        <div className="p-2 md:p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/5">
          {getIcon()}
        </div>
      </div>

      <div className="z-10">
        <motion.h3 
          layoutId={`card-name-${member.id}`} 
          className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-gray-200 break-words leading-tight"
        >
          {member.name}
        </motion.h3>
        <motion.p 
          layoutId={`card-role-${member.id}`} 
          className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest group-hover:text-gray-400 line-clamp-2"
        >
          {member.role}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
