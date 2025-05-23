import React, { useEffect } from 'react';
import Header from '../components/Header';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Shyam Gupta';
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
          
          <div className="text-center">
            <p className="text-xl text-gray-600">
              This page is coming soon. Check back later to see my projects!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;