import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const CoderProfile = ({ member }) => {
  return (
    <div className="font-mono bg-[#0d1117] text-gray-300 min-h-full rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
      {/* VS Code-like Header */}
      <div className="bg-[#161b22] p-2 flex items-center border-b border-gray-800">
        <div className="flex space-x-2 px-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs text-gray-500 flex space-x-4">
          <span className="bg-[#0d1117] px-3 py-1 rounded-t-md border-t border-l border-r border-gray-800 text-blue-400">
            {member.name.replace(/\s+/g, '_').toLowerCase()}.jsx
          </span>
          <span className="px-3 py-1">package.json</span>
        </div>
      </div>

      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar / Line Numbers */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start border-r border-gray-800 pr-6">
           <motion.div 
             initial={{ scale: 0 }} animate={{ scale: 1 }}
             className="w-40 h-40 rounded-full border-2 border-green-500/50 p-1 mb-6"
           >
             <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
           </motion.div>
           
           <h1 className="text-2xl font-bold text-white mb-2"><span className="text-blue-400">const</span> {member.name}</h1>
           <p className="text-green-400 mb-6 text-sm flex items-center gap-2">
             <FaTerminal size={12} /> {member.role}
           </p>

           <div className="w-full bg-[#161b22] p-4 rounded-lg text-sm mb-6">
             <p className="text-gray-500 mb-2">// Contact Info</p>
             <p><span className="text-purple-400">email:</span> "{member.email}"</p>
             <p><span className="text-purple-400">location:</span> "{member.location || 'Remote'}"</p>
           </div>
           
           <div className="flex flex-wrap gap-2">
              {member.techStack && member.techStack.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded border border-blue-900/50">
                  {tech}
                </span>
              ))}
           </div>
        </div>

        {/* Main Code Area */}
        <div className="lg:col-span-8">
           <div className="mb-8">
             <h2 className="text-xl text-white mb-4 flex items-center gap-2">
               <span className="text-yellow-500">function</span> <span className="text-purple-400">AboutMe</span>() {'{'}
             </h2>
             <p className="pl-6 text-gray-400 leading-relaxed border-l-2 border-gray-800 ml-2">
               {member.bio}
             </p>
             <p className="mt-2 text-white">{'}'}</p>
           </div>

           {member.projects && (
             <div>
               <h2 className="text-xl text-white mb-6 flex items-center gap-2">
                 <span className="text-yellow-500">const</span> <span className="text-blue-400">SelectedWorks</span> = [
               </h2>
               
               <div className="space-y-4 pl-4">
                 {member.projects.map((project, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ x: 20, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ delay: idx * 0.1 }}
                     className="group bg-[#161b22] p-4 rounded-md border border-gray-800 hover:border-green-500/50 transition-colors cursor-pointer relative overflow-hidden"
                   >
                     <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaExternalLinkAlt className="text-green-400" />
                     </div>
                     <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-xs text-blue-400 mb-2">{project.category}</p>
                     <p className="text-sm text-gray-400 mb-3">{project.desc}</p>
                     <div className="flex gap-2 text-xs font-mono text-gray-500">
                       {project.stack && project.stack.map(s => <span key={s}>#{s}</span>)}
                     </div>
                   </motion.div>
                 ))}
               </div>
               <p className="mt-4 text-white">];</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CoderProfile;
