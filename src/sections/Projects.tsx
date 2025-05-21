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
    repoUrl: 'https://github.com/omraj741/project',
    image: '/assets/1708485116660.jpg'
  },
  {
    id: 'project-2',
    title: 'Weather Forecasting',
    description: 'I developed a comprehensive weather forecasting application. This project involved creating an interactive and user-friendly interface that provides real-time weather updates, forecasts, and alerts.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/omraj741/Prodigy-Infotech/tree/main/PI5_WeatherForecast',
    image: '/assets/1721931685566.jpg'
  },
  {
    id: 'project-3',
    title: 'Internship Management System',
    description: 'I developed an Internship Management System using Maven and Spring Boot, enabling efficient internship tracking, mentor feedback, and task management with a seamless and user-friendly interface.',
    technologies: ['Java', 'JavaScript', 'Spring Boot',  'MySQL', 'HTML5', 'Cascading Style Sheets (CSS)', 'Maven'],
    repoUrl: 'https://github.com/omraj741/Admin',
    image: '/assets/1744608949011.jpg'
  },
  {
    id: 'project-4',
    title: 'Behavior-Driven Testing of an Economic Website using Cucumber',
    description: 'This project focuses on automating software testing for an economic/statistical website using the Cucumber tool.',
    technologies: ['Cucumber' ,  'Selenium WebDriver' , 'Java' , 'Maven' , 'JUnit' ,  'Gherkin'],
    repoUrl: 'https://github.com/omraj741/Cucumber-Software-Testing',
    image: '/assets/1746765929033.jpg'
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