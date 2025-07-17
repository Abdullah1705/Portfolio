import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'ML Engineering Intern',
      company: 'Arch Technologies',
      location: 'Islamabad, Pakistan / Remote',
      period: 'June 2025 - Present',
      type: 'Internship',
      description: 'Currently gaining hands-on experience in machine learning model development, data preprocessing, and deployment.',
      skills: [
  'Machine Learning',
  'Data Science',
  'Python',
  'Scikit-learn',
  'OpenCV',
  'Kaggle',
  'Deep Learning',
  'TensorFlow',
  'Natural Language Processing'
],

      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Remote Freelancer',
      company: 'Open AI',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      type: 'White Label Service',
      description: 'Working on AI Model Traning Tasks and contributing to innovative projects in the artificial intelligence space.',
      skills: ['AI/ML', 'Python', 'TensorFlow', 'API Development', 'Prompt Engineering'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Freelance Developer',
      company: 'Upwork',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Delivering high-quality Flutter and MERN stack solutions to international clients.',
      skills: ['Flutter', 'React', 'Node.js', 'MongoDB', 'MERN Stack'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Python Programming Tutor',
      company: 'Preply',
      location: 'Remote',
      period: '2023 - 2024',
      type: 'Part-time',
      description: 'Teaching Python programming concepts to students worldwide, helping them master programming fundamentals.',
      skills: ['Python', 'Teaching', 'Mentoring', 'Problem Solving', 'Online Coaching'],
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
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
           
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className={`text-xl font-bold mb-1 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/10 border border-white/20 text-cyan-400"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Experience;