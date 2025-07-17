import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Users, Zap } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place - Connect Career Expo 2024',
      description: 'Won first place at the prestigious Connect Career Expo 2024 for presenting Smart Gaze project.',
      date: '2024',
      color: 'from-yellow-400 to-orange-500',
      highlight: true
    },
    {
      icon: Award,
      title: 'Smart Gaze - Final Year Project',
      description: 'Developed an innovative gaze tracking system using computer vision and machine learning.',
      date: '2024',
      color: 'from-purple-500 to-pink-500',
      highlight: true
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
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
            Achievements &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.filter(achievement => achievement.highlight).map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}>
                      <achievement.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;