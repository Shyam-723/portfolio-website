import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollPosition from '../hooks/useScrollPosition';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > window.innerHeight * 0.7;
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ease-out-expo ${
        isVisible 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-700">
          Shyam's Website
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/projects" 
            className="text-gray-800 hover:text-primary-600 transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-800 hover:text-primary-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
        
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;