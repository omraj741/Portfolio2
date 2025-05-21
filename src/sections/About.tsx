import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import TimelineItem from '../components/TimelineItem';
import { TimelineItem as TimelineItemType } from '../types';

const educationTimeline: TimelineItemType[] = [
  {
    title: 'B.Tech Computer Science Engineering',
    subtitle: 'K.L University',
    date: '2023 - 2026',
    description: 'CGPA: 9.01'
  },
  {
    title: 'Diploma in Computer Science',
    subtitle: 'Galgotias University',
    date: '2020 - 2023',
    description: 'CGPA: 8.49'
  },
  {
    title: 'Class 10',
    subtitle: 'Delhi Public School, Darbhanga',
    date: '2010 - 2020'
  }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Who Am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Om Raj, a Computer Science Engineering student passionate about creating elegant solutions to complex problems. 
              My journey in tech has equipped me with a strong foundation in both front-end and back-end development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in building responsive and user-friendly applications using modern technologies. 
              My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enhancing my skills through online courses and challenges.
            </p>
          </motion.div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">
              Education
            </h3>
            <div className="mt-4">
              {educationTimeline.map((item, index) => (
                <TimelineItem 
                  key={index}
                  item={item}
                  index={index}
                  isLast={index === educationTimeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;