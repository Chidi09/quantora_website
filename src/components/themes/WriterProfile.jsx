import React from 'react';
import { motion } from 'framer-motion';

const WriterProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-[#F5F5F4] text-[#1C1917] font-serif">
      <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-20">
        
        {/* Header */}
        <div className="text-center border-b-2 border-black pb-6 md:pb-8 mb-8 md:mb-12">
          <p className="uppercase tracking-widest text-[10px] md:text-xs text-gray-500 mb-2 md:mb-4">The Creative Portfolio</p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-4 break-words leading-tight">
            {member.name}
          </h1>
          <p className="text-base md:text-xl italic text-gray-600">{member.role}</p>
        </div>

        {/* Bio & Image Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div className="flex-1 text-base md:text-lg leading-loose text-justify">
             <span className="float-left text-5xl md:text-7xl font-bold mr-3 mt-[-5px] md:mt-[-10px]">
               {member.bio.charAt(0)}
             </span>
             {member.bio.substring(1)}
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center md:block">
             <div className="bg-white p-3 shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500 max-w-[250px] md:max-w-none">
               <img src={member.avatar} alt="Profile" className="w-full grayscale contrast-125" />
             </div>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-8 md:space-y-12">
           <h2 className="text-2xl md:text-3xl font-bold text-center italic mb-4 md:mb-8">Selected Narratives</h2>
           {member.projects?.map((project, i) => (
             <div key={i} className="group border-t border-gray-300 pt-6 md:pt-8 hover:bg-white transition-colors p-4 rounded-sm">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-2">
                 <h3 className="text-xl md:text-2xl font-bold group-hover:text-red-800 transition-colors mb-1 md:mb-0">
                   {project.title}
                 </h3>
                 <span className="text-xs text-gray-500 uppercase tracking-widest bg-gray-200 px-2 py-1 rounded md:bg-transparent md:p-0">
                   {project.category}
                 </span>
               </div>
               <p className="text-sm md:text-base text-gray-600 italic max-w-2xl leading-relaxed">
                 {project.desc}
               </p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
export default WriterProfile;
