import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Student Course Management System',
    description: 'A comprehensive system for managing student courses, allowing admins to manage courses and students to enroll in them.',
    technologies: ['Python', 'Tkinter', 'SQLite'],
    repoUrl: 'https://github.com/omraj741/project'
  },
  {
    id: 'project-2',
    title: 'Stopwatch App',
    description: 'A feature-rich stopwatch application with lap timing, reset, and play/pause functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website to showcase skills, projects, and experience.',
    technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://demo.com'
  },
  {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with filtering capabilities.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
    repoUrl: 'https://github.com'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="What I've built" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;