import React, { useEffect } from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import ParallaxSection from '../components/ParallaxSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Your Name | Personal Website';
    
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Welcome />
        
        <ParallaxSection>
          <div className="h-full flex items-center justify-center text-white">
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl font-bold mb-4">Passionate About Creating</h2>
              <p className="text-xl opacity-90">
                I'm dedicated to building exceptional digital experiences that combine
                beautiful design with powerful functionality.
              </p>
            </div>
          </div>
        </ParallaxSection>
        
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;