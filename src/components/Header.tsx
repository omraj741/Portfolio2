import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from '../types';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 shadow-md' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold"
          >
            <span className="text-primary-500">Om</span> Raj
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * navLinks.indexOf(link) }}
                >
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-medium hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 font-medium hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;