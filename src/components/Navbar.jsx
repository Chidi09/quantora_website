import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { FaBars, FaTimes, FaUserShield, FaSun, FaMoon } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { auth } from '../firebase';

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-gray-300 dark:text-yellow-300 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

const Navbar = ({ links, isBlurred, onAdminClick }) => {
  const [nav, setNav] = useState(false);
  const { currentUser } = useAuth();
  
  const handleNav = () => setNav(!nav);
  
  const handleLogout = async () => {
    try { 
      await signOut(auth); 
    } catch (error) { 
      console.error('Logout Error:', error); 
    }
  };

  return (
    <nav className={`fixed w-full h-20 flex justify-between items-center px-4 bg-white/80 dark:bg-gray-950/50 text-gray-800 dark:text-gray-300 z-30 transition-all duration-500 backdrop-blur-sm ${isBlurred ? 'dark:backdrop-blur-xl' : ''}`}>
      <div className="flex items-center">
        <a href="#" className="text-4xl font-extrabold text-gray-900 dark:text-white">Q</a>
        <ul className="hidden md:flex ml-10 space-x-8">
          {links.map((link) => (
            <li key={link.id} className="py-6 text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              <a href={link.path}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {currentUser ? (
          <button 
            onClick={handleLogout} 
            className="hidden md:flex items-center gap-2 bg-red-500/80 px-3 py-2 rounded-lg text-white hover:bg-red-600/90 transition-colors"
          >
            <FaUserShield /><span>Logout</span>
          </button>
        ) : (
          <button 
            onClick={onAdminClick} 
            className="hidden md:flex items-center gap-2 bg-indigo-600/80 px-3 py-2 rounded-lg text-white hover:bg-indigo-600/90 transition-colors"
          >
            <FaUserShield /><span>Admin</span>
          </button>
        )}
        <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-950/90 flex flex-col justify-center items-center backdrop-blur-xl'}>
        {links.map((link) => (
          <li key={link.id} className="py-6 text-3xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
            <a onClick={handleNav} href={link.path}>{link.text}</a>
          </li>
        ))}
        <li className="py-6 text-3xl">
          {currentUser ? (
            <button onClick={handleLogout} className="flex items-center gap-2">Logout</button>
          ) : (
            <button onClick={() => { handleNav(); onAdminClick(); }} className="flex items-center gap-2">Admin Login</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;