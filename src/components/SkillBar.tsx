import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        />
      </div>
    </div>
  );
};

export default SkillBar;