import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Om Raj – B.Tech CSE",
  "Full Stack Developer | MERN",
  "Creative Head – Startup Society",
  "Projects in Python, JS, and AI"
];

const Ticker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40 py-3">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse" />
              <span className="text-lg font-medium text-gray-400">
                {messages[currentIndex]}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Ticker;