import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
  FaArrowDown,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoMdInfinite } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener for resize
      window.addEventListener("resize", checkMobile);

      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrollIndicator(false);
        } else {
          setScrollIndicator(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("resize", checkMobile);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5E6CC]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] "></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 mb-10 lg:mb-0 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 leading-tight"
            variants={itemVariants}
          >
            Apurva{" "}
            <motion.span
              className="text-[#DC2626] relative"
              transition={{ duration: 2, repeat: Infinity }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#333333] mb-6 h-12 flex items-center"
            variants={itemVariants}
          >
            <span className="mr-2 font-medium">I build </span>
            <span className="text-[#DC2626] font-semibold">
              <Typewriter
                words={[
                  "Scalable Backend Systems",
                  "Spring Boot Microservices",
                  "AI & RAG Applications",
                  "Cloud Deployments",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#666666] mb-8 max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            Passionate Computer Science student specializing in Full Stack
            Development and DevOps. I create efficient, scalable digital
            solutions that deliver exceptional user experiences.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group relative bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="group-hover:animate-bounce" />
              <span>Get In Touch</span>
              <FaExternalLinkAlt className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#projects"
              className="group bg-white border-2 border-[#DC2626] text-[#DC2626] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-[#FEF2F2] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCode className="group-hover:rotate-12 transition-transform" />
              <span>View Projects</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links & Stats */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/Rohit03022006",
                    color: "bg-gray-900",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/rohitxten",
                    color: "bg-[#0077B5]",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://instagram.com/_rohit_xten",
                    color:
                      "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`relative ${social.color} text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <motion.span
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#666666] opacity-0 group-hover:opacity-100 whitespace-nowrap"
                      initial={{ y: -10 }}
                      whileHover={{ y: 0 }}
                    >
                      {social.label}
                    </motion.span>
                  </motion.a>
                ))}
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#F5E6CC]"></div>

              <motion.div
                className="flex items-center text-xs sm:text-sm text-[#666666] bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="font-medium">Open to Opportunities</span>
                <motion.span
                  className="ml-3 w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#F5E6CC]">
              {[
                { label: "Projects", value: "6+" },
                { label: "Technologies", value: "15+" },
                { label: "Experience", value: "1.5+ Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <div className="text-lg sm:text-2xl font-bold text-[#DC2626]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#666666]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        {!isMobile && (
          <motion.div
            className="lg:w-1/2 flex justify-center items-center px-4"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-1"
                whileHover={{ scale: 1.0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/10 to-transparent z-10"></div>
                <img
                  src="https://camo.githubusercontent.com/3b525d0f323831680479343ef045164f95afb6911f066dc4af2070ece4dd7dc7/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f373858434642474f6c53366b65593142696c2f67697068792e676966"
                  alt="Programmer GIF"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
