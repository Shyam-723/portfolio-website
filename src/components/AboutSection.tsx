import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContentBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  reversed = false 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 py-16`}
    >
      <div className="flex-1">
        <div className="rounded-lg overflow-hidden shadow-xl h-full">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4 text-primary-800">{title}</h3>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-teal-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Learn more about my journey, skills, and passion for creating amazing web experiences.
          </motion.p>
        </div>
        
        <div className="space-y-8">
          <ContentBlock 
            title="My Journey"
            description="I started my journey as a developer with a passion for creating beautiful, functional websites. Over the years, I've honed my skills in various technologies and frameworks, always striving to deliver exceptional user experiences. My background in design and development allows me to approach projects holistically, ensuring both aesthetics and functionality are perfectly balanced."
            imageUrl="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            imageAlt="Developer journey"
          />
          
          <ContentBlock 
            title="My Skills"
            description="I specialize in front-end development with expertise in React, TypeScript, and modern CSS frameworks. I'm passionate about creating responsive, accessible web applications with smooth animations and intuitive user interfaces. Additionally, I have experience with back-end technologies and database management, allowing me to develop full-stack applications when needed."
            imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            imageAlt="Developer skills"
            reversed={true}
          />
          
          <ContentBlock 
            title="My Approach"
            description="I believe in a user-centered approach to development, prioritizing accessibility, performance, and intuitive design. Every project begins with understanding the needs of users and stakeholders, followed by thoughtful planning and execution. I'm a firm believer in clean, maintainable code and staying updated with the latest industry standards and best practices."
            imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            imageAlt="Development approach"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;