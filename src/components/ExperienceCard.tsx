import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
          <Briefcase size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">{experience.company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
        </div>
      </div>
      
      <ul className="mt-4 space-y-2">
        {experience.description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 mr-2"></span>
            <span className="text-gray-600 dark:text-gray-400">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;