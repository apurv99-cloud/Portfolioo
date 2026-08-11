import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navigation = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Lower threshold for glass effect
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        // Check if the click is not on the menu button or inside the dropdown
        const menuButton = mobileMenuRef.current?.querySelector('button');
        if (!menuButton?.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome size={18} />, href: "#home" },
    { id: "about", label: "About", icon: <FaUser size={18} />, href: "#about" },
    { id: "skills", label: "Skills", icon: <FaCode size={18} />, href: "#skills" },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram size={18} />, href: "#projects" },
    { id: "contact", label: "Contact", icon: <FaEnvelope size={18} />, href: "#contact" },
  ];

  const socialItems = [
    { icon: FaGithub, href: "https://github.com/apurv99-cloud", color: "bg-gray-900", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/apurva-sinha-b1b259306/", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/the_knockturnal/", color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]", label: "Instagram" },
  ];

  const handleItemClick = (itemId, e) => {
    if (e) e.preventDefault();
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(itemId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation with Glass Effect */}
      <nav 
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20" 
            : "py-4 bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold"
            onClick={(e) => handleItemClick("home", e)}
          >
            <span className="text-black">Apu</span>
            <span className="text-[#DC2626]">rva</span>
          </a>

          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeItem === item.id 
                    ? "bg-[#DC2626] text-white shadow-lg" 
                    : "text-[#666666] hover:text-black hover:bg-[#F5E6CC]"
                }`}
                onClick={(e) => handleItemClick(item.id, e)}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialItems.map((social, index) => {
              const IconComponent = social.icon;
              return (
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
                  <IconComponent className="w-5 h-5" />
                  <motion.span
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#666666] opacity-0 group-hover:opacity-100 whitespace-nowrap"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation with Glass Effect */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden"
      >
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? "py-3 bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20" 
              : "py-4 bg-white/80 backdrop-blur-md"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <a 
              href="#home" 
              className="text-xl font-bold"
              onClick={(e) => handleItemClick("home", e)}
            >
              <span className="text-black">Apu</span>
              <span className="text-[#DC2626]">rva</span>
            </a>

            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F5E6CC] text-[#666666] hover:text-[#DC2626] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="fixed top-[64px] left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-[#F5E6CC] z-40"
          >
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-120px)]">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`flex items-center py-4 px-4 rounded-xl transition-all duration-300 ${
                      activeItem === item.id 
                        ? "bg-[#DC2626] text-white shadow-lg" 
                        : "text-[#666666] hover:text-black hover:bg-[#F5E6CC]"
                    }`}
                    onClick={(e) => handleItemClick(item.id, e)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {activeItem === item.id && (
                      <div className="w-2 h-2 bg-white rounded-full ml-auto"></div>
                    )}
                  </a>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-[#F5E6CC]">
                <p className="text-sm text-[#666666] mb-4 text-center">Connect with me</p>
                <div className="flex justify-center gap-4">
                  {socialItems.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
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
                        <IconComponent className="w-5 h-5" />
                        <motion.span
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#666666] opacity-0 group-hover:opacity-100 whitespace-nowrap"
                          initial={{ y: -10 }}
                          whileHover={{ y: 0 }}
                        >
                          {social.label}
                        </motion.span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add padding to body to account for fixed navbar */}
      <style jsx global>{`
        body {
          padding-top: 0;
        }
        
        @media (min-width: 768px) {
          body {
            padding-top: ${isScrolled ? '64px' : '72px'};
          }
        }
        
        @media (max-width: 767px) {
          body {
            padding-top: ${isScrolled ? '60px' : '64px'};
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
