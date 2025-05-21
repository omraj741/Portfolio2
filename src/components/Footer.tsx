import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full cursor-pointer shadow-md transition-colors"
            >
              <ChevronUp size={24} />
            </Link>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            <span className="text-primary-500">Om</span> Raj
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-8"
          >
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:rajom741@gmail.com" 
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 text-sm"
          >
            &copy; {currentYear} Om Raj. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;