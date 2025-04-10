import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;