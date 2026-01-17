import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { FaBars, FaTimes, FaUserShield } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

const Navbar = ({ links, isBlurred, onAdminClick }) => {
  const [nav, setNav] = useState(false);
  const { currentUser } = useAuth();
  
  const handleNav = () => setNav(!nav);
  
  const handleLogout = async () => {
    try { await signOut(auth); } catch (error) { console.error('Logout Error:', error); }
  };

  return (
    <nav className={`fixed w-full h-24 flex justify-between items-center px-8 md:px-16 z-40 transition-all duration-500 ${isBlurred ? 'blur-md pointer-events-none' : ''}`}>
      {/* Logo */}
      <a href="#" className="text-3xl font-black tracking-tighter text-white mix-blend-difference z-50">
        QUANTORA<span className="text-gray-500">.</span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-12 bg-black/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.path} className="text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="h-4 w-[1px] bg-gray-700 mx-4"></div>
        {currentUser ? (
          <button onClick={handleLogout} className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest">Logout</button>
        ) : (
          <button onClick={onAdminClick} className="text-gray-400 hover:text-white transition-colors">
            <FaUserShield size={16} />
          </button>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div onClick={handleNav} className="md:hidden z-50 cursor-pointer text-white mix-blend-difference">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
      
      {/* Mobile Menu Overlay */}
      {nav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-40">
          <ul className="space-y-8 text-center">
            {links.map((link) => (
              <li key={link.id}>
                <a onClick={handleNav} href={link.path} className="text-4xl font-black text-white hover:text-gray-500 transition-colors uppercase tracking-tighter">
                  {link.text}
                </a>
              </li>
            ))}
            <li className="pt-8">
              {currentUser ? (
                <button onClick={handleLogout} className="text-xl text-red-500 font-bold">LOGOUT</button>
              ) : (
                <button onClick={() => { handleNav(); onAdminClick(); }} className="text-xl text-gray-500 hover:text-white">ADMIN LOGIN</button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
