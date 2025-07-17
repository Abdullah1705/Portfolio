import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-400 text-lg font-medium"
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-slate-100 via-purple-100 to-slate-100'
    }`}>
      <ParticleBackground />
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;