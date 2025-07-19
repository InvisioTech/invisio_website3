import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesShowcase />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;