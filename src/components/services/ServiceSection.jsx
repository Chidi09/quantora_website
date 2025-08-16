import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import TeamMemberCard from './TeamMemberCard';
import EditTeamMemberModal from '../admin/EditTeamMemberModal';

const ServiceSection = ({ service, onSelectMember, refreshData }) => {
  const { currentUser } = useAuth();
  const [editingMember, setEditingMember] = useState(null);

  const themeClasses = {
    'bg-slate-900': 'bg-slate-200 dark:bg-slate-900',
    'bg-zinc-900': 'bg-zinc-200 dark:bg-zinc-900'
  };

  return (
    <section 
      id={service.id} 
      className={`relative p-8 md:p-16 min-h-screen transition-colors duration-500 ${themeClasses[service.theme] || 'bg-gray-200 dark:bg-gray-800'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          {service.title}
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          {service.whatWeDo}
        </p>
        
        {service.team && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.team.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onSelect={() => onSelectMember(member)} 
                onEdit={currentUser ? () => setEditingMember(member) : null} 
              />
            ))}
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {editingMember && (
          <EditTeamMemberModal 
            member={editingMember} 
            serviceId={service.id} 
            onClose={() => setEditingMember(null)} 
            onSave={refreshData} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceSection;