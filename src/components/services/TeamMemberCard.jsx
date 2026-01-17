import React from 'react';
import { motion } from 'framer-motion';
import { FaPencilAlt, FaCode, FaFeatherAlt, FaVideo } from 'react-icons/fa';

const TeamMemberCard = ({ member, onSelect, onEdit }) => {
  
  // Choose icon based on role type
  const getIcon = () => {
    if (member.roleType === 'coder') return <FaCode className="text-blue-400" />;
    if (member.roleType === 'writer') return <FaFeatherAlt className="text-pink-500" />;
    return <FaVideo className="text-green-500" />;
  };

  // Dynamic Border/Glow based on role
  const getStyle = () => {
    if (member.roleType === 'coder') return "border-l-4 border-blue-500 hover:shadow-blue-500/20 font-mono";
    if (member.roleType === 'writer') return "border-r-4 border-pink-500 hover:shadow-pink-500/20 font-serif italic";
    return "border-b-4 border-green-500 hover:shadow-green-500/20 font-sans";
  };

  return (
    <motion.div
      layoutId={`card-container-${member.id}`}
      onClick={onSelect}
      className={`relative bg-gray-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800 ${getStyle()}`}
    >
      {onEdit && (
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(); }} 
          className="absolute top-3 right-3 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition-colors z-10"
        >
          <FaPencilAlt size={12} />
        </button>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <motion.div 
          layoutId={`card-image-${member.id}`} 
          className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-gray-700"
        >
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src='https://placehold.co/200x200?text=Q'; }}
          />
        </motion.div>
        
        <div>
          <motion.h3 
            layoutId={`card-name-${member.id}`} 
            className="text-xl font-bold text-white"
          >
            {member.name}
          </motion.h3>
          <div className="flex items-center gap-2 mt-1">
            {getIcon()}
            <p className="text-xs text-gray-400 uppercase tracking-wider">{member.roleType || 'Member'}</p>
          </div>
        </div>
      </div>

      <motion.p 
        layoutId={`card-role-${member.id}`} 
        className="text-sm text-gray-300 line-clamp-2"
      >
        {member.role}
      </motion.p>
    </motion.div>
  );
};

export default TeamMemberCard;
