import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillsData = {
  languages: {
    Python: 90,
    C: 85,
    'HTML/CSS': 80,
    JavaScript: 75,
    SQL: 70
  },
  tools: {
    'VS Code': 95,
    GitHub: 85,
    Azure: 70,
    'Google Collab': 80,
    Figma: 65
  },
  technologies: {
    'MERN Stack': 85,
    'RESTful APIs': 80,
    'Responsive Design': 90,
    'Data Analysis': 75,
    'UI/UX Design': 70
  }
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chartData = {
    labels: ['Development', 'Tools', 'Design', 'Backend', 'Frontend', 'Data'],
    datasets: [
      {
        label: 'Skills',
        data: [85, 80, 75, 85, 90, 75],
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 255, 255, 1)'
      }
    ]
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            family: 'Inter'
          }
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="What I can do" 
        />
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900 p-8 rounded-lg shadow-xl"
          >
            <div className="h-[400px]">
              <Radar data={chartData} options={chartOptions} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {Object.entries(skillsData).map(([category, skills], index) => (
              <div key={category} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-200 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(skills).map(([skill, level]) => (
                    <div key={skill} className="text-gray-300">
                      <span className="font-medium">{skill}</span>
                      <span className="text-sm text-gray-400 ml-2">
                        {level}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;