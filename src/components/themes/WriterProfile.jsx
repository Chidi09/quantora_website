import React from 'react';
import { motion } from 'framer-motion';

const WriterProfile = ({ member }) => {
  return (
    <div className="min-h-full bg-[#F5F5F4] text-[#1C1917] font-serif">
      <div className="max-w-4xl mx-auto p-12 md:p-20">
        <div className="text-center border-b-2 border-black pb-8 mb-12">
          <p className="uppercase tracking-widest text-xs text-gray-500 mb-4">The Creative Portfolio</p>
          <h1 className="text-6xl md:text-8xl font-black mb-4">{member.name}</h1>
          <p className="text-xl italic text-gray-600">{member.role}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="flex-1 text-lg leading-loose text-justify">
             <span className="float-left text-7xl font-bold mr-3 mt-[-10px]">{member.bio.charAt(0)}</span>
             {member.bio.substring(1)}
          </div>
          <div className="w-full md:w-1/3">
             <div className="bg-white p-3 shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
               <img src={member.avatar} alt="Profile" className="w-full grayscale contrast-125" />
             </div>
          </div>
        </div>

        <div className="space-y-12">
           <h2 className="text-3xl font-bold text-center italic mb-8">Selected Narratives</h2>
           {member.projects && member.projects.length > 0 ? (
             member.projects.map((project, i) => (
               <div key={i} className="group border-t border-gray-300 pt-8 hover:bg-white transition-colors p-4">
                 <div className="flex justify-between items-baseline mb-2">
                   <h3 className="text-2xl font-bold group-hover:text-red-800 transition-colors">{project.title}</h3>
                   <span className="text-sm uppercase tracking-widest text-gray-500">{project.category}</span>
                 </div>
                 <p className="text-gray-600 italic max-w-2xl">{project.desc}</p>
               </div>
             ))
           ) : (
             <p className="italic text-gray-500 text-center">Portfolio pieces coming soon to this edition...</p>
           )}
        </div>
      </div>
    </div>
  );
};
export default WriterProfile;
