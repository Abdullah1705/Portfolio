import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-white/10 border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <span className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent`}>
              Abdullah Awan
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    darkMode 
                      ? 'text-gray-300 hover:text-cyan-400' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full backdrop-blur-md ${
                darkMode 
                  ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
                  : 'bg-black/10 text-gray-700 hover:bg-black/20'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.a
              href="/Abdullah Awan CV (Software Engineer).pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <Download size={16} />
              <span>CV</span>
            </motion.a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-md bg-white/10 border-b border-white/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  darkMode 
                    ? 'text-gray-300 hover:text-cyan-400' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              href="/Abdullah Awan CV (Software Engineer).pdf"
              download
              whileHover={{ x: 10 }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-cyan-400"
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;