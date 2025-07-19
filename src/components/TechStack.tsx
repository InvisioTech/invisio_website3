import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Django', icon: '🎸' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Express', icon: '🚂' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Figma', icon: '🎯' }
  ];

  return (
    <section id="tech-stack" className="py-20 overflow-hidden bg-gradient-to-br from-dark-primary to-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Our Tech Stack
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4 text-gray-300">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-4 sm:space-x-8 animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 backdrop-blur-sm border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-w-[150px] sm:min-w-[200px] bg-dark-secondary/80 border-cyan-400/20 hover:bg-dark-tertiary/60 hover:border-cyan-400/40"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{tech.icon}</div>
                  <h3 className="text-sm sm:text-lg font-semibold text-white">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/20">
            <div className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-400">20+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/20">
            <div className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-400">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 backdrop-blur-sm rounded-2xl border bg-dark-secondary/50 border-cyan-400/20">
            <div className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-400">99%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;