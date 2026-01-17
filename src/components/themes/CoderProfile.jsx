import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

const CoderProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-[#0D1117] text-[#C9D1D9] font-mono">
      {/* VS Code Toolbar - Sticky on Mobile */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-[#8B949E] truncate max-w-[150px]">
          {member.name.replace(/\s+/g, '_').toLowerCase()}.tsx
        </div>
        <div className="w-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(90vh-45px)]">
        {/* Sidebar Info - Stacked on Mobile, Sidebar on Desktop */}
        <div className="lg:col-span-4 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#30363D] bg-[#0D1117]">
          <div className="mb-6 md:mb-8 relative group flex justify-center lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={member.avatar} 
              alt={member.name}
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#30363D]"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center lg:text-left break-words">
            {member.name}
          </h1>
          <p className="text-[#58A6FF] text-center lg:text-left mb-6 text-xs md:text-sm flex justify-center lg:justify-start items-center gap-2">
            <FaTerminal /> {member.role}
          </p>

          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-[#161B22] p-4 rounded border border-[#30363D] overflow-x-auto">
              <span className="text-[#FF7B72]">const</span> <span className="text-[#D2A8FF]">techStack</span> = [
              <div className="flex flex-wrap gap-2 mt-2 pl-2 md:pl-4">
                {member.techStack?.map((tech, i) => (
                  <span key={i} className="text-[#A5D6FF] whitespace-nowrap">' {tech} ',</span>
                ))}
              </div>
              ];
            </div>
            
            <div className="bg-[#161B22] p-4 rounded border border-[#30363D] break-all">
               <span className="text-[#79C0FF]">location:</span> <span className="text-[#A5D6FF]">"{member.location || 'Remote'}"</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 p-6 md:p-8 overflow-y-auto">
          <div className="mb-10">
            <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="text-[#FF7B72]">function</span> <span className="text-[#D2A8FF]">About</span>()
            </h2>
            <p className="text-[#8B949E] text-sm md:text-base leading-relaxed pl-4 md:pl-6 border-l-2 border-[#30363D]">
              {member.bio}
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">Projects</span> = 
            </h2>
            <div className="grid gap-4 pl-0 md:pl-4">
              {member.projects?.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: 10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#161B22] p-4 md:p-5 rounded border border-[#30363D] hover:border-[#58A6FF] transition-all group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#D2A8FF] font-bold text-base md:text-lg break-words pr-2">{project.title}</h3>
                    <FaExternalLinkAlt className="text-[#8B949E] flex-shrink-0 mt-1" size={14} />
                  </div>
                  <p className="text-[#8B949E] text-xs md:text-sm mb-3 line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-mono text-[#58A6FF]">
                    {project.stack?.map(s => <span key={s} className="bg-[#58a6ff]/10 px-1 rounded">#{s}</span>)}
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
