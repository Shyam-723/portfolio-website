import React, { useRef, useEffect } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Only apply parallax when section is in view
      if (
        scrollPosition + window.innerHeight >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        const yPos = (scrollPosition - sectionTop) * 0.5;
        section.style.backgroundPositionY = `${yPos}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/2277128/pexels-photo-2277128.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      <div className="relative z-10 container mx-auto h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;