import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-dark-primary/90 backdrop-blur-md shadow-lg shadow-dark-primary/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/invisio_difflogo.png"
              alt="Invisio" 
              className="h-6 sm:h-8 w-auto" 
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Services</a>
            <a href="#tech-stack" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Tech Stack</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </nav>

          <button
            className="md:hidden text-gray-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden rounded-lg mt-2 p-4 backdrop-blur-md border transition-all duration-300 mx-4 bg-dark-primary/95 border-gray-700/30">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Services</a>
              <a href="#tech-stack" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Tech Stack</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;