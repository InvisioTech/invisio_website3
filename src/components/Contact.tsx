import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send to Netlify Function
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setStatus('error');
      
      // Fallback to mailto as backup
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'Not provided'}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from Invisio Contact Form`
      );
      
      setTimeout(() => window.location.href = `mailto:hello.invisio@gmail.com?subject=${subject}&body=${body}`, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-dark-primary text-white">
      {/* Technology Grid Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-dark-primary">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-40 left-40 w-2 h-2 rounded-full opacity-30 animate-bounce bg-cyan-400/50"></div>
        <div className="absolute top-60 left-60 w-3 h-3 rounded-full opacity-35 animate-pulse bg-cyan-400/40"></div>
        <div className="absolute top-32 right-32 w-2 h-2 rounded-full opacity-40 animate-bounce bg-cyan-400/60"></div>
        <div className="absolute top-52 right-52 w-4 h-4 rounded-full opacity-30 animate-pulse bg-cyan-400/50"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 rounded-full opacity-35 animate-bounce bg-cyan-400/40"></div>
        <div className="absolute bottom-60 right-40 w-2 h-2 rounded-full opacity-40 animate-pulse bg-cyan-400/60"></div>
        
        {/* Circuit-like Lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-px rotate-45 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-px -rotate-45 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        
        {/* Hexagonal Tech Shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 border border-cyan-400/30 transform rotate-45 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border border-cyan-400/25 transform rotate-12 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-cyan-400/30 transform -rotate-45 opacity-35"></div>

        {/* Additional background elements for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full filter blur-3xl bg-cyan-500/20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full filter blur-3xl bg-cyan-500/15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tagline-font text-white">
            Let's Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300 px-4">
            Ready to transform your business? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Email</div>
                    <a href="mailto:hello.invisio@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      hello.invisio@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Phone</div>
                    <div className="text-gray-300">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Location</div>
                    <div className="text-gray-300">Global Remote Services</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm rounded-2xl p-6 border bg-cyan-400/5 border-cyan-400/20">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Why Choose Invisio?</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">Cutting-edge technology solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">24/7 dedicated support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">Scalable and future-proof systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300 text-sm sm:text-base">Transparent pricing and timelines</span>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 border bg-dark-secondary/30 border-cyan-400/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/10 border-white/20 text-white"
                    placeholder="Your name"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/10 border-white/20 text-white"
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 bg-dark-tertiary/50 border-cyan-400/30 text-white"
                  placeholder="Your company"
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none bg-dark-tertiary/50 border-cyan-400/30 text-white"
                  placeholder="Tell us about your project..."
                  required
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || status === 'loading'}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  !isFormValid || status === 'loading'
                    ? 'bg-dark-accent text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-dark-primary hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Preparing Email...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Email Ready!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-xs text-gray-400">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;