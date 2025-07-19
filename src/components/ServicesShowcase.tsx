import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, Zap, BarChart3, TrendingUp, Shield, Cpu } from 'lucide-react';

const ServicesShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Web Development Excellence",
      subtitle: "Building Digital Experiences That Convert",
      description: "Transform your business with modern, responsive websites that engage customers and drive growth. Our cutting-edge web solutions ensure your brand stands out in the digital landscape.",
      image: "webdev.jpg",
      icon: Globe,
      stats: [
        { label: "Faster Load Times", value: "3x" },
        { label: "Mobile Responsive", value: "100%" },
        { label: "SEO Optimized", value: "Always" }
      ],
      gradient: "from-blue-600 to-cyan-600",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Business Automation",
      subtitle: "Streamline Operations, Maximize Efficiency",
      description: "Automate repetitive tasks and optimize workflows with intelligent systems. Our automation solutions reduce costs, eliminate errors, and free your team to focus on strategic growth.",
      image: "busaut.jpg",
      icon: Zap,
      stats: [
        { label: "Time Saved", value: "80%" },
        { label: "Error Reduction", value: "95%" },
        { label: "Cost Efficiency", value: "60%" }
      ],
      gradient: "from-purple-600 to-pink-600",
      accentColor: "purple"
    },
    {
      id: 3,
      title: "Data Insights & Analytics",
      subtitle: "Turn Data Into Strategic Advantage",
      description: "Unlock the power of your data with advanced analytics and AI-driven insights. Make informed decisions, predict trends, and stay ahead of the competition with our data science solutions.",
      image: "datainsights.jpg",
      icon: BarChart3,
      stats: [
        { label: "Data Accuracy", value: "99%" },
        { label: "Insights Generated", value: "24/7" },
        { label: "ROI Improvement", value: "150%" }
      ],
      gradient: "from-emerald-600 to-teal-600",
      accentColor: "emerald"
    },
    {
      id: 4,
      title: "Corporate Solutions",
      subtitle: "Enterprise-Grade Systems for Growth",
      description: "Scale your business with robust corporate solutions designed for enterprise needs. From CRM integration to data pipelines, we build systems that grow with your success.",
      image: "corsol.jpg",
      icon: TrendingUp,
      stats: [
        { label: "Scalability", value: "∞" },
        { label: "Uptime", value: "99.9%" },
        { label: "Security", value: "Enterprise" }
      ],
      gradient: "from-indigo-600 to-blue-600",
      accentColor: "indigo"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full filter blur-3xl bg-cyan-500/10"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full filter blur-3xl bg-purple-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl max-w-3xl mx-auto font-bold px-4 text-cyan-300">
            "Discover how our innovative solutions transform businesses and drive measurable results"
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative">
          {/* Slider Window */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-lg border shadow-2xl border-cyan-400/20 shadow-cyan-400/10">
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105 sm:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-dark-primary/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex items-center">
              <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Service Icon and Badge */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} shadow-lg`}>
                        <currentSlideData.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-400/20 border border-cyan-400/40">
                        <span className="text-cyan-400 font-mono text-xs sm:text-sm">SERVICE_ACTIVE</span>
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-lg sm:text-xl lg:text-2xl text-cyan-400 font-medium">
                        {currentSlideData.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                      {currentSlideData.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4">
                      {currentSlideData.stats.map((stat, index) => (
                        <div key={index} className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-dark-secondary/50 border border-cyan-400/20 backdrop-blur-sm">
                          <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300 font-medium leading-tight break-words px-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Additional Visual Elements */}
                  <div className="hidden lg:flex flex-col space-y-6">
                    {/* Tech Indicators */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 lg:p-4 rounded-xl bg-dark-secondary/30 border border-cyan-400/20 backdrop-blur-sm">
                        <Shield className="w-6 h-6 text-green-400" />
                        <div>
                          <div className="text-white font-semibold">Enterprise Security</div>
                          <div className="text-gray-400 text-sm">Bank-level encryption</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 lg:p-4 rounded-xl bg-dark-secondary/30 border border-cyan-400/20 backdrop-blur-sm">
                        <Cpu className="w-6 h-6 text-cyan-400" />
                        <div>
                          <div className="text-white font-semibold">AI-Powered Solutions</div>
                          <div className="text-gray-400 text-sm">Machine learning integration</div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Performance</span>
                        <span className="text-cyan-400">98%</span>
                      </div>
                      <div className="w-full bg-dark-accent rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full w-[98%] transition-all duration-1000"></div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Reliability</span>
                        <span className="text-green-400">99.9%</span>
                      </div>
                      <div className="w-full bg-dark-accent rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-[99.9%] transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-dark-secondary/80 border border-cyan-400/30 text-white hover:bg-dark-secondary hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-dark-secondary/80 border border-cyan-400/30 text-white hover:bg-dark-secondary hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 sm:px-4 py-2 rounded-full bg-dark-secondary/50 border border-cyan-400/30 text-cyan-400 hover:bg-dark-secondary hover:border-cyan-400/50 transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;