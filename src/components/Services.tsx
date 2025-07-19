import React, { useState } from 'react';
import { Globe, Smartphone, Database, TrendingUp, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      gradient: "from-blue-600 to-cyan-600",
      accentColor: "blue",
      code: "WEB_DEV",
      status: "ACTIVE",
      complexity: "ADVANCED"
    },
    {
      icon: Smartphone,
      title: "Web App Development",
      description: "Scalable web applications with cutting-edge frameworks and cloud-native architecture.",
      features: ["Progressive Web Apps", "Real-time Features", "Cloud Integration", "API Development"],
      gradient: "from-purple-600 to-pink-600",
      accentColor: "purple",
      code: "APP_DEV",
      status: "ACTIVE",
      complexity: "EXPERT"
    },
    {
      icon: Database,
      title: "Data Science Solutions",
      description: "Transform your data into actionable insights with AI and machine learning technologies.",
      features: ["Predictive Analytics", "Data Visualization", "Machine Learning", "Business Intelligence"],
      gradient: "from-indigo-600 to-blue-600",
      accentColor: "indigo",
      code: "DATA_SCI",
      status: "ACTIVE",
      complexity: "EXPERT"
    },
    {
      icon: TrendingUp,
      title: "Corporate Solutions",
      description: "Enterprise-grade systems for lead generation and data pipeline automation.",
      features: ["Lead Generation", "Data Pipelines", "Process Automation", "CRM Integration"],
      gradient: "from-emerald-600 to-teal-600",
      accentColor: "emerald",
      code: "CORP_SOL",
      status: "ACTIVE",
      complexity: "ADVANCED"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-20 overflow-hidden relative bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full opacity-60 animate-pulse bg-cyan-400"></div>
        <div className="absolute top-40 right-32 w-1 h-1 rounded-full opacity-40 animate-bounce bg-cyan-400"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 rounded-full opacity-50 animate-pulse bg-cyan-400"></div>
        <div className="absolute top-60 right-60 w-2 h-2 rounded-full opacity-60 animate-bounce bg-cyan-400"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-xl animate-pulse bg-cyan-500/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full filter blur-xl animate-pulse animation-delay-2000 bg-cyan-500/15"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full filter blur-xl animate-pulse animation-delay-4000 bg-cyan-500/20"></div>

        {/* Additional background elements for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl bg-cyan-500/20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full filter blur-3xl bg-cyan-500/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tagline-font text-white">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 text-gray-300">
            Advanced IT solutions powered by cutting-edge technology and innovative thinking
          </p>
          
          {/* System Status Bar */}
          <div className="mt-8 inline-flex items-center space-x-2 sm:space-x-4 backdrop-blur-sm border rounded-full px-4 sm:px-6 py-3 bg-dark-secondary/50 border-cyan-400/40">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs sm:text-sm text-green-400">SYSTEM_ONLINE</span>
            </div>
            <div className="w-px h-4 bg-cyan-400/30"></div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs sm:text-sm text-cyan-400 hidden sm:inline">04_MODULES_ACTIVE</span>
              <span className="font-mono text-xs text-cyan-400 sm:hidden">04_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative max-w-4xl mx-auto"
            >
              {/* Holographic Glow Effect - Static for mobile, subtle for desktop */}
              <div className="absolute -inset-1 rounded-3xl transition-all duration-700 blur-xl bg-gradient-to-r from-cyan-400/30 to-cyan-600/30 opacity-20 md:opacity-10 md:group-hover:opacity-30"></div>
              
              {/* Main Futuristic Card */}
              <div className="relative h-full rounded-3xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-dark-secondary/80 to-dark-tertiary/80 backdrop-blur-lg border border-cyan-400/30 md:border-cyan-400/20 shadow-lg shadow-cyan-400/20 md:shadow-none md:hover:border-cyan-400/40 md:hover:shadow-lg md:hover:shadow-cyan-400/20">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10 md:opacity-5 md:group-hover:opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
                      linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)
                    `,
                    backgroundSize: '20px 20px',
                    animation: 'shimmer 6s ease-in-out infinite'
                  }}></div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan opacity-30 md:opacity-0 md:group-hover:opacity-100"></div>
                </div>

                <div className="relative p-6 sm:p-8 h-full">
                  {/* Header with Service Code and Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-gradient-to-r from-cyan-500/70 to-cyan-600/70 md:bg-dark-accent/50 text-dark-primary md:text-gray-400 shadow-sm md:shadow-none md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-500 md:group-hover:to-cyan-600 md:group-hover:text-dark-primary md:group-hover:shadow-lg transition-all duration-500">
                        {service.code}
                      </div>
                      <div className="px-2 py-1 rounded text-xs font-mono bg-green-500/30 md:bg-dark-accent/30 text-green-400 md:text-gray-500 md:group-hover:bg-green-500/20 md:group-hover:text-green-400 transition-all duration-500">
                        {service.status}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-cyan-400/80 md:text-gray-500 md:group-hover:text-cyan-400 transition-colors duration-500" />
                      <span className="text-xs font-mono text-cyan-400/80 md:text-gray-500 md:group-hover:text-cyan-400 transition-colors duration-500">
                        {service.complexity}
                      </span>
                    </div>
                  </div>

                  {/* Main Content Layout */}
                  <div className="md:flex md:items-start md:justify-between md:space-x-8">
                    {/* Left Content */}
                    <div className="md:flex-1">
                      {/* Icon and Title Section */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-r from-cyan-500/80 to-cyan-600/80 md:bg-dark-accent/50 shadow-md shadow-cyan-500/20 md:shadow-none md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-500 md:group-hover:to-cyan-600 md:group-hover:shadow-lg md:group-hover:shadow-cyan-500/25 transition-all duration-500">
                          <service.icon className="w-8 h-8 text-dark-primary md:text-gray-400 md:group-hover:text-dark-primary transition-colors duration-500" />
                          <div className="absolute inset-0 rounded-2xl bg-white/10 md:bg-transparent animate-pulse md:animate-none md:group-hover:bg-white/20 md:group-hover:animate-pulse transition-opacity duration-500"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white md:text-gray-300 md:group-hover:text-white transition-colors duration-500 mb-2">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-green-400/80 md:bg-gray-600 animate-pulse md:animate-none md:group-hover:bg-green-400 md:group-hover:animate-pulse transition-all duration-500"></div>
                            <span className="text-sm font-mono text-green-400/80 md:text-gray-500 md:group-hover:text-green-400 transition-colors duration-500">
                              MODULE_INITIALIZED
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - View Specs Button (Always Visible) */}
                    <div className="md:flex-shrink-0 mb-6 md:mb-0">
                      <button 
                        onClick={() => toggleExpanded(index)}
                        className="w-full md:w-auto py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 bg-cyan-400/20 md:bg-cyan-400/10 text-cyan-400 border border-cyan-400/40 md:border-cyan-400/30 hover:bg-cyan-400/30 md:hover:bg-cyan-400/20 shadow-sm shadow-cyan-400/20 md:shadow-none md:hover:shadow-sm md:hover:shadow-cyan-400/20"
                      >
                        <Zap className="w-4 h-4" />
                        <span>{expandedCard === index ? 'Hide Specs' : 'View Specs'}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${expandedCard === index ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  {expandedCard === index && (
                    <div className="mt-6 space-y-6 animate-in slide-in-from-top duration-300">
                      {/* Description */}
                      <p className="leading-relaxed text-gray-200 md:text-gray-400 md:group-hover:text-gray-200 transition-colors duration-500">
                        {service.description}
                      </p>
                      
                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center p-3 rounded-lg bg-cyan-400/10 md:bg-dark-accent/30 border border-cyan-400/30 md:border-0 md:group-hover:bg-cyan-400/5 md:group-hover:border md:group-hover:border-cyan-400/20 transition-all duration-300">
                            <div className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-cyan-400/90 to-cyan-500/90 md:bg-cyan-400/40 shadow-sm md:shadow-none animate-pulse md:animate-none md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-400 md:group-hover:to-cyan-500 md:group-hover:shadow-sm md:group-hover:animate-pulse transition-all duration-300"></div>
                            <span className="text-sm font-medium text-gray-200 md:text-gray-400 md:group-hover:text-gray-200 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400/80 md:bg-cyan-400/40 animate-pulse md:animate-none md:group-hover:bg-green-400 md:group-hover:animate-pulse transition-all duration-500"></div>
                      <span className="text-xs font-mono text-green-400/80 md:text-cyan-400/60 md:group-hover:text-green-400 transition-colors duration-500">
                        OPERATIONAL
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-cyan-400/90 md:text-cyan-400/60 md:group-hover:text-cyan-400 transition-colors duration-500">
                        v2.0.{index + 1}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-cyan-400/80 md:bg-cyan-400/40 animate-pulse md:animate-none md:group-hover:bg-cyan-400 md:group-hover:animate-pulse transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/30">
            <div className="text-3xl font-bold mb-2 text-cyan-400">04</div>
            <div className="font-mono text-sm text-gray-300">ACTIVE_MODULES</div>
          </div>
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/20">
            <div className="text-3xl font-bold mb-2 text-cyan-400">24/7</div>
            <div className="font-mono text-sm text-gray-300">SYSTEM_UPTIME</div>
          </div>
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/20">
            <div className="text-3xl font-bold mb-2 text-cyan-400">100%</div>
            <div className="font-mono text-sm text-gray-300">SUCCESS_RATE</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;