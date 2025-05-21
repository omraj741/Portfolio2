import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check user preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Update HTML class when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-black text-neon-blue transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Ticker />
      </div>
    </AnimatePresence>
  );
}

export default App;