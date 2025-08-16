import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt } from 'react-icons/fa';

const TeamMemberCard = ({ member, onSelect, onEdit }) => (
  <motion.div
    layoutId={`card-container-${member.id}`}
    onClick={onSelect}
    className="relative bg-white/50 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 hover:shadow-indigo-500/30"
  >
    {onEdit && (
      <button 
        onClick={(e) => { e.stopPropagation(); onEdit(); }} 
        className="absolute top-3 right-3 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-500 transition-colors z-10"
        aria-label="Edit member"
      >
        <FaPencilAlt />
      </button>
    )}
    <motion.div 
      layoutId={`card-image-${member.id}`} 
      className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-md"
    >
      <img 
        src={member.avatar} 
        alt={member.name} 
        className="w-full h-full object-cover" 
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src='https://placehold.co/200x200/1e1b4b/ffffff?text=Q'; 
        }}
      />
    </motion.div>
    <motion.h3 
      layoutId={`card-name-${member.id}`} 
      className="text-2xl font-bold text-center text-gray-900 dark:text-white"
    >
      {member.name}
    </motion.h3>
    <motion.p 
      layoutId={`card-role-${member.id}`} 
      className="text-center text-indigo-600 dark:text-indigo-300"
    >
      {member.role}
    </motion.p>
  </motion.div>
);

export default TeamMemberCard;