import React, { useState, useEffect } from "react";
import bgPic from '../images/bg.png';
import cavePic from '../images/cavernous.png';

interface ParallaxSectionProps {
  children: React.ReactNode;
}

const ParallaxSection = ({ children }: ParallaxSectionProps) => {

  const [prefColorScheme, setPrefColorScheme] = useState("dark");
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setPrefColorScheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleColorSchemeChange);
    setPrefColorScheme(mediaQuery.matches ? "dark" : "light");

    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
      console.log("Cleanup listener");
    }

  }), [];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: (prefColorScheme === "dark") ? `url(${cavePic})` : `url(${bgPic})`,
        imageRendering: 'pixelated',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center h-screen">
        {children}  
      </div>
    </div>
  );
};

export default ParallaxSection;

