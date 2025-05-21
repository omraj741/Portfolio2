import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Codepen, Linkedin } from 'lucide-react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {loaded && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute top-0 left-0 right-0 bottom-0 -z-10"
        />
      )}

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-primary-400">Om</span> Raj
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-medium mb-8">
                Full Stack Developer | Data Analyst
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300 cursor-pointer"
              >
                View Projects
              </Link>
              
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-md transition-colors duration-300 flex items-center"
                download="Om_Raj_Resume.pdf"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 mt-8"
            >
              <a 
                href="https://github.com/omraj741" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-primary-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              {/* <a 
                href="https://codepen.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-primary-400 transition-colors duration-300"
              >
                <Codepen size={24} />
              </a> */}
              <a 
                href="https://www.linkedin.com/in/om-raj-01b63b227" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-primary-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-400">
              <img
                src="./src/assets/new.jpg"
                alt="Om Raj"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="animate-bounce p-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;