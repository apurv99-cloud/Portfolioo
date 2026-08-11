import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaEnvelope,
  FaAward,
  FaLightbulb,
  FaUser,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  FaChartLine,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#F5E6CC]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6CC] via-transparent to-[#FDF5E6] opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
            About <span className="text-[#DC2626]">Me</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed mb-8">
            A passionate and dedicated Computer Science student specializing in
            Full Stack Development and DevOps, with a strong foundation in
            building scalable, efficient, and user-friendly applications.
          </p>

          <div className="inline-flex items-center gap-4 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md text-sm sm:text-base">
            <FaUser className="text-[#DC2626]" />
            <span className="text-black font-medium">
              Open to Internship Opportunities
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Personal Intro Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                    My Journey
                  </h3>
                  <p className="text-sm sm:text-base text-[#666666]">
                    Currently pursuing my Bachelor's degree while actively
                    building real-world projects and contributing to open
                    source. I believe in continuous learning and applying
                    theoretical knowledge to practical solutions.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#FEF3C7] p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-[#DC2626] rounded-lg flex items-center justify-center mr-3">
                      <FaBriefcase className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Focus Areas</h4>
                      <p className="text-sm text-[#666666]">
                        MERN Stack, AI & Backend Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#666666] mt-2">
                    Specializing in Spring Boot and Generative AI, with a keen
                    interest in building robust backend systems and scalable web
                    applications.
                  </p>
                </div>

                <div className="bg-[#DCFCE7] p-4 rounded-xl">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                      <FaChartLine className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">Approach</h4>
                      <p className="text-sm text-[#666666]">
                        Problem Solving First
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#666666] mt-2">
                    Focus on building efficient, scalable solutions that solve
                    real-world problems.
                  </p>
                </div>
              </div>

              {/* Social Links Section - Moved outside the grid */}
              <div className="mt-8 pt-6 border-t border-[#F5E6CC]">
                <h4 className="text-xl font-bold text-black mb-6">
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0A66C2] w-10 h-10 rounded-lg flex items-center justify-center">
                      <FaLinkedin className="text-[#fdfeff] text-3xl" />
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/apurv-sinha-99/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#DC2626] transition-colors font-semibold"
                      >
                        LinkedIn
                      </a>
                      <p className="text-xs text-[#666666]">
                        Professional Network
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center">
                      <FaGithub className="text-white text-3xl" />
                    </div>
                    <div>
                      <a
                        href="https://github.com/apurv99-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#DC2626] transition-colors font-semibold"
                      >
                        GitHub
                      </a>
                      <p className="text-xs text-[#666666]">Projects & Code</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFA116] rounded-lg flex items-center justify-center">
                      <FaCode className="text-black text-3xl" />
                    </div>
                    <div>
                      <a
                        href="https://leetcode.com/u/v53poaT0E0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#DC2626] transition-colors font-semibold"
                      >
                        LeetCode
                      </a>
                      <p className="text-xs text-[#666666]">Problem Solving</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#16A34A] rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white text-3xl" />
                    </div>
                    <div>
                      <a
                        href="mailto:sinhaapurv99@gmail.com"
                        className="text-black hover:text-[#DC2626] transition-colors font-semibold"
                      >
                        Email Me
                      </a>
                      <p className="text-xs text-[#666666]">Get in touch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DBEAFE] rounded-xl flex items-center justify-center mr-4">
                  <img
                    src="/VIPS_Logo.png"
                    alt="VIPS_Logo"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black ml-auto">
                  Education
                </h3>
                <div className="ml-auto w-16 h-16 flex items-center justify-center">
                  <img
                    src="/GGSIPU_Logo.png"
                    alt="GGSIPU_Logo"
                    className="w-16 h-16"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="pb-6 border-b border-[#F5E6CC]">
                  <h4 className="font-bold text-lg text-black mb-1">
                    B.Tech in Computer Science & Applied Mathematics
                  </h4>
                  <a
                    href="https://www.vips.edu/"
                    className="text-[#333333] hover:text-[#DC2626] hover:underline transition-colors font-medium mb-2 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vivekananda Institute of Professional Studies
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#DC2626] bg-[#FEE2E2] px-3 py-1 rounded-full">
                      2024 - 2028
                    </span>
                    <span className="text-sm font-medium text-[#089113] bg-[#FEE2E2] px-3 py-1 rounded-full">
                      8.62 CGPA
                    </span>
                    <span className="text-sm text-[#666666]">
                      New Delhi, India
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-black mb-3">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Data Structures
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Algorithms
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Database Systems
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Cloud Computing
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                      Operating Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Ask Me About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                  <FaEnvelope className="text-lg text-[#DC2626]" />
                </div>
                <h3 className="text-xl font-bold text-black">Ask Me About</h3>
              </div>

              <ul className="space-y-4 flex-1">
                {[
                  "MERN Stack Development",
                  "Backend Architecture",
                  "API Design & Development",
                  "Cloud Infrastructure (AWS)",
                  "Java Backend Development",
                  "Spring Boot & Spring Security",
                  "REST API Design & Development",
                  "PostgreSQL & Database Design",
                  "Docker & Containerization",
                  "AI & LLM Integration",
                  "Retrieval-Augmented Generation (RAG)",
                  "System Design",
                  "Design Patterns",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#F0FDF4] text-[#DC2626] p-1.5 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                      <HiOutlineLightBulb className="text-sm w-5 h-5" />
                    </span>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-3">
                  <FaCode className="text-lg text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Currently Learning
                </h3>
              </div>

              <ul className="space-y-4 flex-1">
                {[
                  "AWS Cloud Services",
                  "Kubernetes & Container Orchestration",
                  "Microservices Architecture",
                  "CI/CD & DevOps Automation",
                  "Spring AI & GenAI Integration",
                  "Cloud-Native Architecture",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-[#F3E8FF] text-gray-600 p-1.5 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                      <FaChartLine className="text-sm w-5 h-5" />
                    </span>
                    <span className="text-[#333333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-[#F5E6CC] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mr-3">
                  <FaAward className="text-lg text-amber-600  " />
                </div>
                <h3 className="text-xl font-bold text-black">Certifications</h3>
              </div>

              <ul className="space-y-4 flex-1 overflow-y-auto pr-2">
                {[
                 
                  {
                    name: "Data Structures and Algorithms",
                    provider: "Apna College",
                    link: "https://www.linkedin.com/in/apurva-sinha-b1b259306/overlay/Certifications/1640384503/treasury/?profileId=ACoAAE390AcBtehtttAg13KAP8RG_3pDhkJ09dw",
                  },
                  {
                    name: "Spring Frameworks, Spring AI - Gen AI",
                    provider: "Udemy",
                    link: "https://www.linkedin.com/in/apurva-sinha-b1b259306/overlay/Certifications/155316688/treasury/?profileId=ACoAAE390AcBtehtttAg13KAP8RG_3pDhkJ09dw",
                  },
                  {
                    name: "Python Bootcamp",
                    provider: "VIPS",
                    link: "https://www.linkedin.com/in/apurva-sinha-b1b259306/overlay/Certifications/491528793/treasury/?profileId=ACoAAE390AcBtehtttAg13KAP8RG_3pDhkJ09dw",
                  },
                  {
                    name: "Introduction to Cyber Security",
                    provider: "Cisco",
                    link: "https://www.linkedin.com/in/apurva-sinha-b1b259306/overlay/Certifications/491465228/treasury/?profileId=ACoAAE390AcBtehtttAg13KAP8RG_3pDhkJ09dw",
                  },
                  
                  {
                    name: "Docker Certified Associate",
                    status: "ongoing",
                    link: null,
                  },
                ].map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start pb-3 border-b border-[#F5E6CC] last:border-0"
                  >
                    <span className="bg-[#FEF3C7] text-amber-600 p-1.5 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                      <FaAward className="text-sm w-5 h-5" />
                    </span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#333333] hover:text-[#DC2626] hover:underline transition-colors font-medium"
                          >
                            {cert.name}
                          </a>
                        ) : (
                          <span className="text-[#333333] font-medium">
                            {cert.name}
                          </span>
                        )}
                        {cert.status === "ongoing" && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full ml-2">
                            In Progress
                          </span>
                        )}
                      </div>
                      {cert.provider && (
                        <p className="text-sm text-[#666666] mt-1">
                          {cert.provider}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
