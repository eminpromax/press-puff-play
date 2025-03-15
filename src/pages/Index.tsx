
import React, { useState, useRef } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import WorkShowcase from "@/components/WorkShowcase";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Menu, X } from "lucide-react";

const Index = () => {
  const [clickCount, setClickCount] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const portfolioSections = [
    {
      title: "Design",
      description: "Crafting intuitive user experiences with meticulous attention to detail"
    },
    {
      title: "Development",
      description: "Building performant applications with modern technologies"
    },
    {
      title: "Strategy",
      description: "Creating thoughtful solutions that align with business goals"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background Animation Elements */}
      <motion.div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 blur-3xl opacity-50"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '20%', left: '15%', zIndex: 0 }}
      />
      
      <motion.div 
        className="fixed w-80 h-80 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 blur-3xl opacity-40"
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 70, -70, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '15%', right: '10%', zIndex: 0 }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("hero")} className="text-gray-800 hover:text-black transition-colors">Home</button>
            <button onClick={() => scrollToSection("work")} className="text-gray-800 hover:text-black transition-colors">Work</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-800 hover:text-black transition-colors">Contact</button>
            <AnimatedButton onClick={() => scrollToSection("contact")} className="ml-4">
              Get in Touch
            </AnimatedButton>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection("hero")} className="text-left py-2 text-gray-800 hover:text-black transition-colors">Home</button>
              <button onClick={() => scrollToSection("work")} className="text-left py-2 text-gray-800 hover:text-black transition-colors">Work</button>
              <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-gray-800 hover:text-black transition-colors">Contact</button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 relative z-10">
        <div className="max-w-5xl w-full px-6 md:px-10 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-24 space-y-6"
          >
            <span className="inline-block text-sm font-medium text-gray-500 tracking-wide uppercase">
              Portfolio
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Beautifully <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                crafted experiences
              </span>
            </h1>
          </motion.div>
          
          {/* Portfolio Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {portfolioSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeSection === index 
                    ? "bg-black text-white" 
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(index)}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className={`text-sm ${activeSection === index ? "text-gray-300" : "text-gray-500"}`}>
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Interactive Element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center space-y-10"
          >
            <div className="flex flex-col items-center justify-center space-y-8">
              <AnimatedButton 
                onClick={() => {
                  handleClick();
                  scrollToSection("work");
                }} 
                className="bg-black hover:bg-gray-800 text-white"
              >
                <span>Explore Projects</span>
                <ArrowRight className="ml-1" />
              </AnimatedButton>
              
              {clickCount > 0 && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-gray-500"
                >
                  You've pressed the button {clickCount} time{clickCount !== 1 ? 's' : ''}
                </motion.p>
              )}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-16"
            >
              <button 
                onClick={() => scrollToSection("work")} 
                className="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <span className="text-sm mb-2">Scroll to discover</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Showcase Section */}
      <WorkShowcase />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-gray-50 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
