import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Flutter Developer',
    'Full Stack Engineer', 
    'AI & ML Explorer',
    'Python Developer',
    'Freelance Developer',
    'Prompt Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="relative mx-auto mb-8 w-48 h-48 md:w-56 md:h-56"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
            <div className={`w-full h-full rounded-full ${darkMode ? 'bg-slate-900' : 'bg-white'} p-2`}>
             <img
  src="/profile-picture.png"
  alt="Muhammad Abdullah Awan"
  className="w-full h-full rounded-full object-cover"
/>

            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-400/30"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Muhammad Abdullah Awan
          </span>
        </motion.h1>

        {/* Dynamic Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8 h-16 flex items-center justify-center"
        >
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-xl md:text-2xl lg:text-3xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Passionate Software Engineer specializing in Full-Stack Development (MERN Stack) and AI/ML innovations (Python).
Experienced in building high-performance mobile apps using Flutter, delivering seamless user experiences across Android.


        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="/Abdullah Awan CV (Software Engineer).pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold border-2 transition-all ${
              darkMode 
                ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' 
                : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            }`}
          >
            <MessageCircle size={20} />
            <span>Let's Talk</span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Abdullah1705', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/abdullah-awan-ba7b43273/', label: 'LinkedIn' },
            {
  icon: Mail,
  href: 'https://mail.google.com/mail/?view=cm&to=abdawan1705@gmail.com',
  label: 'Email'
}


          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full backdrop-blur-md transition-all ${
                darkMode 
                  ? 'bg-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/20' 
                  : 'bg-black/10 text-gray-600 hover:text-purple-600 hover:bg-black/20'
              }`}
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              darkMode ? 'border-gray-400' : 'border-gray-600'
            }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-3 rounded-full mt-2 ${
                darkMode ? 'bg-gray-400' : 'bg-gray-600'
              }`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;