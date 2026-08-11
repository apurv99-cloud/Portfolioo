import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/apurv99-cloud",
      label: "GitHub",
      color: "hover:bg-gray-900"
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/apurva-sinha-b1b259306/",
      label: "LinkedIn",
      color: "hover:bg-[#0077B5]"
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/the_knockturnal/",
      label: "Instagram",
      color: "hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:sinhaapurv99@gmail.com",
      label: "Email",
      color: "hover:bg-[#DC2626]"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const technologies = [
    { name: "Full Stack", icon: <FaCode className="text-sm" /> },
    { name: "DevOps", icon: <FaServer className="text-sm" /> },
    { name: "React.js", icon: <FaCode className="text-sm" /> },
    { name: "Spring frameworks", icon: <FaServer className="text-sm" /> },
    { name: "Microservices", icon: <FaCode className="text-sm" /> },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="text-white">Apu</span>
                <span className="text-[#DC2626]">rva</span>
                <span className="text-white"> Sinha</span>
              </h3>
              <p className="text-[#CCCCCC] mb-4 max-w-md leading-relaxed">
                Passionate Full Stack Developer & DevOps Engineer crafting innovative solutions 
                and optimizing development workflows with modern technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`group w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#CCCCCC] opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3 text-[#CCCCCC] uppercase tracking-wider">
                Focus Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2a2a] rounded-lg text-sm text-[#CCCCCC]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center text-[#CCCCCC] hover:text-[#DC2626] transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full opacity-0 group-hover:opacity-100 mr-3 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[#CCCCCC] mb-2">Have a project in mind?</p>
                <p className="text-sm text-[#999999]">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="mailto:sinhaapurv99@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#DC2626] text-white rounded-lg hover:bg-[#B91C1C] hover:shadow-lg transition-all duration-300"
                >
                  <FaEnvelope />
                  <span className="font-medium">Send Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#CCCCCC] text-center md:text-left">
              © {currentYear} <span className="text-[#DC2626] font-medium">Apurva</span>. All rights reserved.
            </p>
            <p className="text-sm text-[#999999] mt-2 text-center md:text-left">
              Last updated: {lastUpdated}
            </p>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.p
              className="flex items-center gap-2 text-[#CCCCCC] text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Made with 
              <FaHeart className="text-[#DC2626] animate-pulse" /> 
              by Apurva
            </motion.p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
