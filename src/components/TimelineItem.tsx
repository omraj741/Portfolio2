import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-0.5 bg-primary-200 dark:bg-primary-900"></div>
      )}
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-900"></div>
      </div>
      <div className="relative">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{item.subtitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
        {item.description && (
          <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;