import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Smartphone, Globe } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Globe,
      title: 'Full Stack Engineering',
      description: 'MERN stack expertise for creating scalable web applications from frontend to backend.'
    },
    {
      icon: Brain,
      title: 'AI & ML Innovation',
      description: 'Developing intelligent solutions using Python, TensorFlow, and modern ML frameworks.'
      
    },
    {
       icon: Smartphone,
      title: 'Flutter Development',
      description: 'Building cross-platform mobile applications with beautiful UIs and seamless performance.'
    },
    {
      icon: Code,
      title: 'Remote Collaboration',
      description: 'Successfully working with international clients and delivering projects remotely.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
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
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl" />
               <img
  src="/cyber-security-expert-working-with-technology-neon-lights.jpg"
  alt="Working on projects"
  className="w-full h-180 object-cover rounded-2xl"
/>

              </motion.div>
              
              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">30+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Projects Completed
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -left-6 backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p className="mb-4">
                I’m a Software Engineer with a strong passion for Full-Stack Development (MERN stack) and AI/ML. My core interests include training machine learning models, working with generative AI, and applying advanced techniques in prompt engineering using Python.

I’ve developed multiple Android apps using Flutter and also provide white-label services for OpenAI-related projects, particularly focused on prompt engineering and AI integration. 
              </p>
              <p className="mb-4">
                Currently, I'm providing white label service remotely as a freelancer for a  <span className="text-cyan-400 font-semibold">Open AI</span> Job, 
                collaborating with international clients. Also, I have taught multiple students and shared my knowledge as a Python tutor on <span className="text-cyan-400 font-semibold">Preply</span>. 
                Also, doing AI / ML internship at <span className="text-cyan-400 font-semibold">Arch Technologies</span> which has further strengthened my expertise in artificial intelligence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <item.icon className="text-cyan-400 mb-2" size={24} />
                  <h4 className={`font-semibold mb-1 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;