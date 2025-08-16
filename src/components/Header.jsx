import React from 'react';

const Header = ({ title, subtitle }) => (
  <header className="p-8 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
    <div className="w-48 h-48 mb-8 rounded-full bg-indigo-600 flex items-center justify-center">
      <span className="text-5xl font-bold text-white">Q</span>
    </div>
    <h1 className="text-6xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
      {title}
    </h1>
    <p className="text-xl text-center max-w-2xl text-gray-600 dark:text-gray-300">
      {subtitle}
    </p>
  </header>
);

export default Header;