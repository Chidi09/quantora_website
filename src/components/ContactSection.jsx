import React from 'react';
import { siteConfig } from '../data/siteConfig';

const ContactSection = () => (
  <footer id="contact" className="p-8 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center text-sm">
    <p>&copy; {new Date().getFullYear()} Quantora. All rights reserved.</p>
    <p>
      Contact us at: {' '}
      <a 
        href={`mailto:${siteConfig.companyEmail}`} 
        className="text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        {siteConfig.companyEmail}
      </a>
    </p>
  </footer>
);

export default ContactSection;