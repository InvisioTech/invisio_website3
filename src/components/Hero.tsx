import React from 'react';
import { Globe, Database, Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/bganimation.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/bgimg.png" 
            alt="Background animation fallback" 
            className="w-full h-full object-cover opacity-70"
          />
        </video>
        <div className="absolute inset-0 bg-dark-primary/0"></div>
      </div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/20 via-transparent to-dark-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/30 via-transparent to-dark-primary/30"></div>
      </div>

      {/* Subtle animated overlay for tech aesthetic */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        {/* Floating tech particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-400/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-cyan-400/40 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-cyan-400/20 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-cyan-400/30 animate-bounce"></div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-8 sm:pb-16 min-h-screen flex flex-col">
        {/* Main Content - Left Aligned */}
        <div className="flex-1 flex items-center justify-center py-8 sm:py-0">
          <div className="text-left sm:text-center space-y-6 sm:space-y-8 w-full">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight hero-font text-white drop-shadow-lg">
                <span className="block sm:inline">Innovate</span>
                <span className="hidden sm:inline"> . </span>
                <span className="block sm:inline">Integrate</span>
                <span className="hidden sm:inline"> . </span>
                <span className="block sm:inline">Inspire</span>
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
