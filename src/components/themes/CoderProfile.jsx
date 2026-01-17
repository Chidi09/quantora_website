import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaMapMarkerAlt, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';

const CoderProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-[#0D1117] text-[#C9D1D9] font-mono selection:bg-[#58A6FF] selection:text-black">
      
      {/* Window Controls (Pure Aesthetic) */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-[#8B949E] font-sans tracking-wide opacity-50">
          {member.name} — Developer Profile
        </div>
        <div className="w-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(90vh-45px)]">
        
        {/* Sidebar Info */}
        <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#30363D] bg-[#0D1117]">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
              <img 
                src={member.avatar} 
                alt={member.name}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[#30363D] group-hover:border-[#58A6FF] transition-colors"
              />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center lg:text-left">
              {member.name}
            </h1>
            <p className="text-[#58A6FF] mb-6 text-sm flex items-center gap-2 bg-[#58A6FF]/10 px-3 py-1 rounded-full border border-[#58A6FF]/20">
              <FaTerminal size={12} /> {member.role}
            </p>

            <div className="w-full space-y-6">
              {/* Tech Stack Section */}
              <div>
                <h3 className="text-xs font-bold text-[#8B949E] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FaLayerGroup /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.techStack?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs text-[#79C0FF] bg-[#1F6FEB]/10 border border-[#1F6FEB]/30 rounded hover:bg-[#1F6FEB]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Location Section */}
              <div className="flex items-center gap-2 text-sm text-[#8B949E]">
                 <FaMapMarkerAlt />
                 <span>{member.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 p-6 md:p-10 overflow-y-auto">
          
          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-[#30363D] pb-2 inline-block">
              About Me
            </h2>
            <p className="text-[#C9D1D9] leading-relaxed text-base md:text-lg">
              {member.bio}
            </p>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-lg font-bold text-white mb-6 border-b border-[#30363D] pb-2 inline-block">
              Selected Projects
            </h2>
            <div className="grid gap-4">
              {member.projects?.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-[#161B22] p-5 rounded-lg border border-[#30363D] hover:border-[#58A6FF] transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaExternalLinkAlt className="text-[#58A6FF]" />
                  </div>
                  
                  <h3 className="text-[#58A6FF] font-bold text-lg mb-1 group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-[#8B949E] text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack?.map(s => (
                      <span key={s} className="text-xs text-[#8B949E] bg-[#30363D]/50 px-2 py-1 rounded">
                        #{s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoderProfile;
