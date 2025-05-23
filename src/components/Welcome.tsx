import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/70 z-10"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          transform: 'translateZ(-10px) scale(2)',
          zIndex: 0 
        }}
      />
      
      <div className="container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-white"
        >
          <h1 className="font-bold mb-6">Welcome to My Website!</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            I'm a full-stack developer branching into AI/ML in Computer Vision!
          </p>
          <p> 
            {/* Spaces are needed to seperate the link text */}
            Scroll down to learn more about me, or click {' '}
            <Link
            to="/projects">
            <b>here</b>
            </Link>
            {' '}to see some of my projects!
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="animate-bounce mt-16 text-white/80">
              <p className="text-sm uppercase tracking-wider mb-2">Scroll Down</p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mx-auto" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;