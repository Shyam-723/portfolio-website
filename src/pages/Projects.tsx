import React, { useState } from 'react';
import Header from '../components/Header';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React and Tailwind CSS to showcase my work.',
    tags: ['React', 'Frontend', 'TypeScript', 'Vite', 'Docker'],
    link: 'https://github.com/Shyam-723/portfolio-website'
  },
  {
    title: 'Image Classifier',
    description: 'A ResNet-based image classification project using PyTorch and OpenCV.',
    tags: ['AI/ML', 'PyTorch', 'OpenCV', 'ResNet'],
    link: 'https://github.com/Shyam-723/SpotIt_Model'
  },
  {
    title: 'HackMerced',
    description: 'Event platform for hackathons with Firebase backend.',
    tags: ['Node.js', 'Fullstack', 'FireBase'],
    link: 'https://github.com/HackMerced/HackMerced-XI'
  },
  // Add more projects here...
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white px-4 pt-32 pb-12">
      <Header />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

        <input
          type="text"
          placeholder="Search by title or tag..."
          className="w-full mb-8 p-3 rounded-lg bg-[#2a2a40] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2a2a40] rounded-lg p-6 shadow-lg border border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-gray-400">
              No projects found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
