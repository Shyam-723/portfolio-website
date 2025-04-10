import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Briefcase, GraduationCap } from 'lucide-react';

const Home = () => {
  const sections = [
    {
      id: 'hero',
      content: (
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-800 mb-6"
            >
              Shyam Gupta
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Full Stack Developer
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <a href="https://github.com/Shyam-723" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shyam-gupta-626252260/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shyam.gupta0723@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <ChevronDown className="mx-auto animate-bounce" size={24} />
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      content: (
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="../"
                  alt="Profile"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies.
                  Currently in my 3rd year as a Computer Science student at UC Merced, I have a robust interest in Software, Machine Learning
                  and Artificial Intelligence. See some of my work over at Projects!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Code className="text-blue-600 mr-3" />
                    <span>Full Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="text-blue-600 mr-3" />
                    <span>2 Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="text-blue-600 mr-3" />
                    <span>Computer Science Degree</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      content: (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL',
              ].map((skill) => (
                <div key={skill} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-gray-800">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {sections.map((section) => (
        <div key={section.id} className="snap-start">
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default Home;