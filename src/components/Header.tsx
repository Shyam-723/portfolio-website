import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollPosition from '../hooks/useScrollPosition';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';


const Header = () => {
  const scrollPosition = useScrollPosition();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isVisible = !isHomePage || scrollPosition > window.innerHeight * 0.7;
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ease-out-expo ${
        isVisible 
        ? 'bg-[#1e1e2f]/80 backdrop-blur-md shadow-md'
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
        {/* Left icons */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/Shyam-723" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 invert" />
          </a>
          <a 
            href="https://www.linkedin.com/in/shyam-gupta-626252260/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>

        {/* Site title and nav */}
        <div className="flex-1 flex justify-between items-center ml-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Shyam's Website
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/projects" className="text-white hover:text-teal-400 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-white hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link to="/resume" className="text-white hover:text-teal-400 transition-colors">
              Resume
            </Link>
          </nav>

          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

    </motion.header>
  );
};

export default Header;