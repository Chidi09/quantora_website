import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import TeamMemberCard from './TeamMemberCard';
import EditTeamMemberModal from '../admin/EditTeamMemberModal';

const ServiceSection = ({ service, onSelectMember, refreshData }) => {
  const { currentUser } = useAuth();
  const [editingMember, setEditingMember] = useState(null);

  return (
    <section 
      id={service.id} 
      className="relative min-h-screen w-full bg-black border-t border-white/10"
    >
      <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col lg:flex-row gap-12">
        
        {/* LEFT: Sticky Header & Description (Uses 40% of width) */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 lg:h-fit z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-800 mb-6 uppercase tracking-tighter">
              {service.title}
            </h2>
            <div className="h-1 w-24 bg-white/20 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
              {service.whatWeDo}
            </p>
            <div className="hidden lg:block text-sm text-gray-600 uppercase tracking-[0.3em]">
              /// {service.team?.length || 0} Specialists Available
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Team Grid (Uses 60% of width) */}
        <div className="lg:w-7/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.team && service.team.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onSelect={() => onSelectMember(member)} 
                onEdit={currentUser ? () => setEditingMember(member) : null} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Admin Edit Modal */}
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
