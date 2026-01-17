import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import CoderProfile from '../themes/CoderProfile';
import WriterProfile from '../themes/WriterProfile';
import CreativeProfile from '../themes/CreativeProfile';

const TeamMemberModal = ({ member, onClose }) => {
  // Determine which profile layout to use
  const renderProfile = () => {
    switch (member.roleType) {
      case 'coder':
        return <CoderProfile member={member} />;
      case 'writer':
        return <WriterProfile member={member} />;
      case 'creative':
        return <CreativeProfile member={member} />;
      default:
        // Default fallback (uses Coder for now or a generic one)
        return <CoderProfile member={member} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl h-[90vh] overflow-y-auto rounded-xl shadow-2xl no-scrollbar"
      >
        {/* Close Button - Sticky to corner */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-md border border-white/10"
        >
          <FaTimes size={20} />
        </button>

        {/* Render the Specific Themed Profile */}
        {renderProfile()}
        
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberModal;
