import React from 'react';
import { Globe, Database, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary">
      {/* GIF Background */}
      <div className="absolute inset-0">
        <img 
          src="/bgimg.png" 
          alt="Background animation" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-dark-primary/0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-8 sm:pb-16 min-h-screen flex flex-col">
        {/* Main Content - Left Aligned */}
        <div className="flex-1 flex items-center justify-center py-8 sm:py-0">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight font-orbitron text-white">
              Innovate . Integrate . Inspire
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Cards - Responsive Grid */}
        <div className="pb-4 sm:pb-8 mt-8 sm:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            <div className="backdrop-blur-lg border p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg bg-dark-tertiary/40 border-cyan-400/20 text-white hover:bg-dark-tertiary/60">
              <Globe className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2 text-sm sm:text-lg">Web Development</h3>
              <p className="text-xs sm:text-sm text-gray-300">Modern, responsive websites</p>
            </div>
            
            <div className="backdrop-blur-lg border p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg bg-dark-tertiary/40 border-cyan-400/20 text-white hover:bg-dark-tertiary/60">
              <Zap className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2 text-sm sm:text-lg">Web Apps</h3>
              <p className="text-xs sm:text-sm text-gray-300">Scalable applications</p>
            </div>
            
            <div className="backdrop-blur-lg border p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg bg-dark-tertiary/40 border-cyan-400/20 text-white hover:bg-dark-tertiary/60">
              <Database className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2 text-sm sm:text-lg">Data Science</h3>
              <p className="text-xs sm:text-sm text-gray-300">AI-powered insights</p>
            </div>
            
            <div className="backdrop-blur-lg border p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg bg-dark-tertiary/40 border-cyan-400/20 text-white hover:bg-dark-tertiary/60">
              <ArrowRight className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2 text-sm sm:text-lg">Corporate Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-300">Enterprise-grade systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;