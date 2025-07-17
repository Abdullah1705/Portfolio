import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdawan1705@gmail.com',
      href: 'mailto:abdawan1705@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+92 XXX XXXXXXX',
      href: 'https://wa.me/92XXXXXXXXX',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: ExternalLink,
      label: 'Upwork',
      href: '#',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
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
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6" />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors ${
                        darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors ${
                        darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors ${
                      darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors resize-none ${
                      darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-400/10 rounded-lg p-3"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 rounded-lg p-3"
                  >
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get in touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all group"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className={`font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.label}
                      </div>
                      <div className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow me
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-400/30 transition-all ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
          </motion.div>
        </div>

        {/* Call to Action */}
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
              Ready to start your project?
            </h3>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.a
              href="https://wa.me/92XXXXXXXXX"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Me</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;