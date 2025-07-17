import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'COMSATS University Islamabad',
      location: 'Islamabad, Pakistan',
      period: '2021 - 2025',
      status: 'Current',
      description: 'Pursuing comprehensive education in software engineering with focus on modern development practices, algorithms, and system design.',
      highlights: [
        'Final Year Project: Smart Gaze (Gaze Tracking System)',
        'Relevant Coursework: Data Structures, Algorithms, Database Systems',
        'Software Engineering Principles and Practices',
        'Web Development and Mobile App Development'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Pre-Medical (FSc)',
      institution: 'Government College University',
      location: 'Lahore, Pakistan',
      period: '2018 - 2020',
      status: 'Completed',
      description: 'Completed pre-medical education with strong foundation in sciences before transitioning to software engineering.',
      highlights: [
        'Strong analytical and problem-solving skills',
        'Mathematics and Physics foundation',
        'Research methodology and scientific approach',
        'Critical thinking and logical reasoning'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];


  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            Education &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className={`text-xl font-bold mb-1 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                          <GraduationCap size={16} />
                          <span>{edu.institution}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${edu.color} text-white`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Highlights:
                      </h4>
                      <ul className={`space-y-1 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;