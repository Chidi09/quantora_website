import React from 'react';

const ContactForm = ({ formspreeEndpoint }) => (
  <div className="bg-black/10 dark:bg-black/20 p-6 rounded-xl border border-white/10">
    <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
      Contact Me Directly
    </h3>
    <form action={formspreeEndpoint} method="POST">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          required 
        />
      </div>
      <textarea 
        name="message" 
        placeholder="Your Message" 
        rows="4" 
        className="w-full p-3 mb-4 rounded-lg bg-gray-200 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        required
      />
      <button 
        type="submit" 
        className="w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default ContactForm;