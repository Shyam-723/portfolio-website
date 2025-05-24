interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, backgroundImage }) => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
