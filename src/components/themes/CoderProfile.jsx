import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

const CoderProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-[#0D1117] text-[#C9D1D9] font-mono">
      {/* VS Code Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-b border-[#30363D]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-[#8B949E]">{member.name.replace(/\s+/g, '_').toLowerCase()}.tsx</div>
        <div className="w-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(90vh-40px)]">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 p-8 border-r border-[#30363D] bg-[#0D1117]">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={member.avatar} 
              alt={member.name}
              className="relative w-48 h-48 rounded-full object-cover mx-auto border-4 border-[#30363D]"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2 text-center">{member.name}</h1>
          <p className="text-[#58A6FF] text-center mb-6 text-sm flex justify-center items-center gap-2">
            <FaTerminal /> {member.role}
          </p>

          <div className="space-y-4 text-sm">
            <div className="bg-[#161B22] p-4 rounded border border-[#30363D]">
              <span className="text-[#FF7B72]">const</span> <span className="text-[#D2A8FF]">techStack</span> = [
              <div className="flex flex-wrap gap-2 mt-2 pl-4">
                {member.techStack?.map((tech, i) => (
                  <span key={i} className="text-[#A5D6FF]">' {tech} ',</span>
                ))}
              </div>
              ];
            </div>
            
            <div className="bg-[#161B22] p-4 rounded border border-[#30363D]">
               <span className="text-[#79C0FF]">location:</span> <span className="text-[#A5D6FF]">"{member.location || 'Remote'}"</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 p-8 overflow-y-auto">
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="text-[#FF7B72]">function</span> <span className="text-[#D2A8FF]">About</span>()
            </h2>
            <p className="text-[#8B949E] leading-relaxed pl-6 border-l-2 border-[#30363D]">
              {member.bio}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">Projects</span> = 
            </h2>
            <div className="grid gap-4 pl-4">
              {member.projects?.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#161B22] p-5 rounded border border-[#30363D] hover:border-[#58A6FF] transition-all group cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-[#D2A8FF] font-bold text-lg">{project.title}</h3>
                    <FaExternalLinkAlt className="text-[#8B949E] group-hover:text-white" />
                  </div>
                  <p className="text-[#8B949E] text-sm mt-1 mb-3">{project.desc}</p>
                  <div className="flex gap-3 text-xs font-mono text-[#58A6FF]">
                    {project.stack?.map(s => <span key={s}>#{s}</span>)}
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
