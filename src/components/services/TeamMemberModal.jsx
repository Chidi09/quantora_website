import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import CoderProfile from '../themes/CoderProfile';
import WriterProfile from '../themes/WriterProfile';
import CreativeProfile from '../themes/CreativeProfile';

const TeamMemberModal = ({ member, onClose }) => {
  // Logic to determine which profile to show
  let ProfileComponent;
  
  if (member.roleType === 'coder') {
    ProfileComponent = CoderProfile;
  } else if (member.roleType === 'writer') {
    ProfileComponent = WriterProfile;
  } else if (member.roleType === 'creative') {
    ProfileComponent = CreativeProfile;
  } else {
    // Fallback
    ProfileComponent = CoderProfile;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        className="relative w-full max-w-6xl h-[90vh] rounded-xl overflow-hidden shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-red-600 transition-colors border border-white/20"
        >
          <FaTimes size={20} />
        </button>

        {/* Render the specific theme */}
        <div className="h-full overflow-y-auto no-scrollbar">
           <ProfileComponent member={member} />
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMemberModal;
