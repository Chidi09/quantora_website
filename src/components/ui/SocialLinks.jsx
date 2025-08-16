// src/components/ui/SocialLinks.jsx
// A new, reusable component for the social media links.
import React from 'react';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const SocialLinks = ({ socials }) => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <a href={`mailto:${socials.email}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
        <FaEnvelope size={32} />
      </a>
      <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
        <FaWhatsapp size={32} />
      </a>
      <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
        <FaTwitter size={32} />
      </a>
      <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
        <FaLinkedin size={32} />
      </a>
      <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
        <FaGithub size={32} />
      </a>
    </div>
  );
};

export default SocialLinks;
