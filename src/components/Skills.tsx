import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Globe, 
  Settings,
  Monitor,
  Server,
  Cpu,
  Wrench
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const skillCategories = {
    Frontend: {
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Flutter', level: 95, icon: '📱' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'JavaScript', level: 90, icon: '⚡' }
      ]
    },
    Backend: {
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'REST APIs', level: 90, icon: '🔗' }
      ]
    },
    'AI/ML': {
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 80, icon: '🧠' },
        { name: 'Scikit-learn', level: 85, icon: '📊' },
        { name: 'OpenCV', level: 75, icon: '👁️' },
        { name: 'Pandas', level: 85, icon: '🐼' },
        { name: 'NumPy', level: 90, icon: '🔢' },
        { name: 'Data Analysis', level: 80, icon: '📈' }
      ]
    },
    Tools: {
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 90, icon: '📝' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Android Studio', level: 85, icon: '🤖' },
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' }
      ]
    }
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 px-4">
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
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const category = skillCategories[tab as keyof typeof skillCategories];
            const IconComponent = category.icon;
            
            return (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : darkMode
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-black/10 text-gray-600 hover:bg-black/20'
                }`}
              >
                <IconComponent size={20} />
                <span>{tab}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </h3>
                </div>
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className={`w-full h-2 rounded-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      skillCategories[activeTab as keyof typeof skillCategories].color
                    }`}
                  />
                </div>
                
                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`absolute top-0 h-2 rounded-full bg-gradient-to-r ${
                    skillCategories[activeTab as keyof typeof skillCategories].color
                  } opacity-50 blur-sm`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Always Learning, Always Growing
            </h3>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of software development. 
              My passion for learning drives me to tackle challenging projects and deliver 
              innovative solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { label: 'Languages', value: '6+' },
                { label: 'Frameworks', value: '10+' },
                { label: 'Projects', value: '50+' },
                { label: 'Experience', value: '3+ Years' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;