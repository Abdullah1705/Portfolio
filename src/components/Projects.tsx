import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Smartphone, Brain, Globe, Bot } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Gaze',
      category: 'AI/ML',
      description: 'Final Year Project - An intelligent gaze tracking system using computer vision and machine learning.',
      longDescription: 'Smart Gaze is my final year project that combines computer vision with machine learning to create an intelligent gaze tracking system. The project uses advanced algorithms to detect and track eye movements in real-time, with applications in accessibility technology, user interface design, and human-computer interaction research.',
      image: '/smartgaze.jpg',

      tech: [
  'Python',
  'OpenCV',
  'TensorFlow',
  'NumPy',
  'Pandas',
  'Computer Vision',
  'Machine Learning',
  'MongoDB',
  'Express.js',
  'React.js',
  'Next.js',
  'Node.js',
  'MERN Stack',
  'Kaggle (Datasets)',
  'REST API',
  'JavaScript',
  'Redux',
  'Tailwind CSS'
],

      github: 'https://github.com/Abdullah1705/SmartGaza_frontend',
      demo: 'https://github.com/Abdullah1705/SmartGaza_frontend',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI Prompt Engineering Projects',
      category: 'Prompt Engineering',
      description: 'Collection of innovative prompt engineering solutions and AI automation projects.',
      longDescription: 'A comprehensive collection of prompt engineering projects developed during my work with OpenAI technologies. These projects showcase advanced prompt design, AI automation workflows, and creative applications of large language models for various business and technical use cases.',
      image: '/AI.jpg',
      tech: ['OpenAI API', 'Prompt Engineering', 'Python', 'AI Automation', 'LLMs'],
      github: '#',
      demo: '#',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Mausam Weather App',
      category: 'Flutter',
      description: 'Beautiful weather application with real-time forecasts and intuitive UI design.',
      longDescription: 'Mausam is a comprehensive weather application built with Flutter, featuring real-time weather data, 7-day forecasts, and beautiful animations. The app includes location-based weather updates, weather alerts, and a clean, intuitive interface that makes checking the weather a delightful experience.',
      image: '/weather.jpg',
      tech: ['Flutter', 'Dart', 'Weather API', 'Animations', 'Material Design'],
      github: '#',
      demo: '#',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Smart Sprouts',
      category: 'Flutter',
      description: 'Educational app for kids with interactive learning modules and gamification.',
      longDescription: 'Smart Sprouts is an innovative educational platform designed specifically for children. The app features interactive learning modules, gamified experiences, and progress tracking to make learning fun and engaging. Built with Flutter for cross-platform compatibility.',
      image: '/smartsprouts.jpg',
      tech: ['Flutter', 'Firebase', 'Animations', 'Gamification', 'Child-friendly UI'],
      github: '#',
      demo: '#',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'WhatsApp Bot',
      category: 'Flutter',
      description: 'Automated WhatsApp bot built with Flutter for business communication.',
      longDescription: 'An intelligent WhatsApp bot developed using Flutter that automates business communications. The bot can handle customer inquiries, provide automated responses, and integrate with business systems to streamline communication workflows.',
      image: '/whatsapp.jpg',
      tech: ['Flutter', 'WhatsApp API', 'Automation', 'Business Logic', 'Integration'],
      github: '#',
      demo: '#',
      icon: Bot,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Tumor Detection System',
      category: 'AI/ML',
      description: 'Machine learning model for medical image analysis and tumor detection.',
      longDescription: 'A sophisticated machine learning system designed for medical image analysis, specifically for tumor detection in medical scans. The project uses deep learning techniques to analyze medical images and provide accurate detection results to assist healthcare professionals.',
      image: '/venereologist_3.jpg',
      tech: ['Python', 'TensorFlow', 'Medical Imaging', 'Deep Learning', 'Healthcare'],
      github: '#',
      demo: '#',
      icon: Brain,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'Web',
      description: 'Modern portfolio website with glassmorphism design and smooth animations.',
      longDescription: 'A modern, responsive portfolio website featuring glassmorphism design principles, smooth animations, and interactive elements. Built with React and Tailwind CSS, showcasing modern web development techniques and best practices.',
      image: '/portfolio.jpg',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: '#',
      demo: '#',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = ['All', 'Flutter', 'AI/ML', 'Prompt Engineering', 'Web'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
           
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8" />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : darkMode
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-black/10 text-gray-600 hover:bg-black/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r ${project.color}`}>
                      <project.icon className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-gray-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project.id);
                        }}
                      >
                        <Eye size={16} />
                        <span className="text-sm">View</span>
                      </motion.button>
                      
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-1 transition-colors ${
                          darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"

              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[85vh] mt-14 transform translate-y-16 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"



                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${project.color}`}>
                            <project.icon className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {project.title}
                            </h3>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedProject(null)}
                          className={`p-2 rounded-full ${
                            darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                          }`}
                        >
                          <X size={24} />
                        </motion.button>
                      </div>

                      {/* Image */}
                      <div className="mb-6 rounded-xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-80 object-cover"
                        />
                      </div>

                      {/* Description */}
                      <p className={`text-lg mb-6 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.longDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-cyan-400 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                       
                        
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold border-2 transition-all ${
                            darkMode 
                              ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' 
                              : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                          }`}
                        >
                          <Github size={20} />
                          <span>View Code</span>
                        </motion.a>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;