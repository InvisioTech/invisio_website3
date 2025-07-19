import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">Invisio</span>
            </div>
            <p className="mb-6 max-w-md text-gray-400">
              Transforming businesses through innovative IT solutions. 
              We build the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg transition-colors duration-300 bg-cyan-400/10 hover:bg-cyan-400/20 hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg transition-colors duration-300 bg-cyan-400/10 hover:bg-cyan-400/20 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg transition-colors duration-300 bg-cyan-400/10 hover:bg-cyan-400/20 hover:text-cyan-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:hello.invisio@gmail.com" className="p-2 rounded-lg transition-colors duration-300 bg-cyan-400/10 hover:bg-cyan-400/20 hover:text-cyan-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="transition-colors hover:text-cyan-400">Web Development</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Web Applications</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Data Science</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Corporate Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="transition-colors hover:text-cyan-400">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Portfolio</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center border-cyan-400/20 text-gray-400">
          <p>&copy; 2024 Invisio. All rights reserved. Built with passion and cutting-edge technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;