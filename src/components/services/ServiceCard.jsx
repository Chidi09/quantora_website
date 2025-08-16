// src/components/services/ServiceCard.jsx
// A new component for the clickable service card on the main page.
import React from 'react';
import { FaVideo, FaCode, FaFeatherAlt, FaLightbulb } from 'react-icons/fa';

const serviceIcons = {
  'video-editing': FaVideo,
  'software-development': FaCode,
  'script-writing': FaFeatherAlt,
  'creative-direction': FaLightbulb,
};

export const ServiceCard = ({ service, onSelect }) => {
  const ServiceIcon = serviceIcons[service.id];

  return (
    <section
      id={service.id}
      className={`relative p-8 flex items-center justify-center text-white min-h-screen ${service.theme}`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div
          onClick={onSelect}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-center space-x-4">
            {ServiceIcon && <ServiceIcon size={48} className="text-indigo-400" />}
            <h2 className="text-4xl font-bold">{service.title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
