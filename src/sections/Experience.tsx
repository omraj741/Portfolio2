import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 'exp-1',
    role: 'Creative Head',
    company: 'Startup Society',
    duration: 'Jan 2024 - Present',
    description: [
      'Led branding and design efforts for the organization',
      'Created video posters and promotional materials',
      'Designed pitch visuals for startup presentations',
      'Collaborated with cross-functional teams to ensure design consistency',
      'Mentored junior designers in the society'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey" 
        />
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;