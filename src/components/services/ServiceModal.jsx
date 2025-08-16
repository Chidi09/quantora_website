// src/components/services/ServiceModal.jsx
// A new component for the modal that appears when a service is selected.
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaVideo, FaCode, FaFeatherAlt, FaLightbulb } from 'react-icons/fa';
import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import TeamMember from './TeamMember';

const serviceIcons = {
  'video-editing': FaVideo,
  'software-development': FaCode,
  'script-writing': FaFeatherAlt,
  'creative-direction': FaLightbulb,
};

export const ServiceModal = ({ service, onClose, socials }) => {
  const [showSubsections, setShowSubsections] = useState(false);
  const ServiceIcon = serviceIcons[service.id];

  // This effect handles closing the modal with the 'Escape' key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center"
    >
      <motion.div
        layout
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={(e) => e.stopPropagation()} // Prevents click from closing modal
        className="relative w-[90%] max-w-4xl z-50 overflow-y-auto bg-gray-800 shadow-2xl p-8 md:p-10 rounded-xl max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300 z-10"
        >
          <FaTimes size={32} />
        </button>

        <div className="flex items-center justify-center space-x-4 mb-8">
          {ServiceIcon && <ServiceIcon size={64} className="text-indigo-400" />}
          <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
        </div>

        <div className="text-lg mb-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">What We Do</h3>
          <p>{service.whatWeDo}</p>
        </div>

        <div className="text-lg mb-8 bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">Our Accomplishments</h3>
          <p>{service.accomplishments}</p>
        </div>

        {service.subsections && (
          <div className="mb-8 text-center">
            <button
              onClick={() => setShowSubsections(!showSubsections)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              {showSubsections ? 'Hide Team Details' : 'Learn More About Our Team'}
            </button>

            <AnimatePresence>
              {showSubsections && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-8 space-y-6 overflow-hidden"
                >
                  {service.subsections.map((sub, index) => (
                    <TeamMember key={index} member={sub} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <ContactForm formspreeId={socials.formspreeId} />
        <SocialLinks socials={socials} />

      </motion.div>
    </div>
  );
};

export default ServiceModal;
