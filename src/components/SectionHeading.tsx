import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionHeading;