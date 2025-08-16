import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';

const TeamMemberModal = ({ member, onClose, formspreeEndpoint }) => (
  <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      layoutId={`card-container-${member.id}`}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl bg-gray-200 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
    >
      <motion.button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10" 
        whileHover={{ scale: 1.2, rotate: 90 }}
        aria-label="Close modal"
      >
        <FaTimes size={28} />
      </motion.button>
      
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div 
            layoutId={`card-image-${member.id}`} 
            className="w-32 h-32 rounded-full shadow-lg flex-shrink-0"
          >
            <img 
              src={member.avatar} 
              alt={member.name} 
              className="w-full h-full object-cover rounded-full" 
            />
          </motion.div>
          
          <div className="text-center md:text-left">
            <motion.h2 
              layoutId={`card-name-${member.id}`} 
              className="text-4xl font-extrabold text-gray-900 dark:text-white"
            >
              {member.name}
            </motion.h2>
            <motion.p 
              layoutId={`card-role-${member.id}`} 
              className="text-xl text-indigo-600 dark:text-indigo-300 font-medium mb-4"
            >
              {member.role}
            </motion.p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href={`mailto:${member.email}`} 
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <ContactForm formspreeEndpoint={formspreeEndpoint} />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default TeamMemberModal;