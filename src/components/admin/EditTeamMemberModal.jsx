import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FaTimes } from 'react-icons/fa';
import { db } from '../../firebase';

const EditTeamMemberModal = ({ member, serviceId, onClose, onSave }) => {
  const { ...editableMemberData } = member;
  const [formData, setFormData] = useState(editableMemberData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError('');
    
    try {
      const serviceDocRef = doc(db, 'services', serviceId);
      const serviceSnap = await getDoc(serviceDocRef);
      
      if (!serviceSnap.exists()) {
        throw new Error("Service document not found!");
      }
      
      const serviceData = serviceSnap.data();
      const team = serviceData.team.map(m => m.id === member.id ? { ...formData } : m);
      
      await updateDoc(serviceDocRef, { team });
      onSave();
      onClose();
    } catch (err) {
      setError('Failed to save changes. Please try again.');
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.9, opacity: 0 }} 
        onClick={(e) => e.stopPropagation()} 
        className="relative bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close edit modal"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-6">Edit Team Member</h2>
        
        {error && (
          <p className="bg-red-500/20 text-red-400 p-3 rounded-lg mb-4">
            {error}
          </p>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name || ''} 
              onChange={handleChange} 
              placeholder="Name" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <input 
              type="text" 
              name="role" 
              value={formData.role || ''} 
              onChange={handleChange} 
              placeholder="Role" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <input 
              type="text" 
              name="avatar" 
              value={formData.avatar || ''} 
              onChange={handleChange} 
              placeholder="Avatar URL" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <textarea 
              name="bio" 
              value={formData.bio || ''} 
              onChange={handleChange} 
              placeholder="Bio" 
              rows="4" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email || ''} 
              onChange={handleChange} 
              placeholder="Email" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
            <input 
              type="text" 
              name="linkedin" 
              value={formData.linkedin || ''} 
              onChange={handleChange} 
              placeholder="LinkedIn URL" 
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-6 py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors disabled:bg-gray-500"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditTeamMemberModal;