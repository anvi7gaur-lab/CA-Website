import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { services, testimonials } from '../data/services';
import { saveSubscriber } from '../utils/db';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subMessage, setSubMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    const result = await saveSubscriber(email);
    
    if (result.success) {
      setSubMessage('✅ Successfully subscribed!');
      setEmail('');
    } else {
      setSubMessage(`❌ ${result.error}`);
    }
    
    setSubscribing(false);
    setTimeout(() => setSubMessage(''), 3000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-br from-blue-600 to-teal-600 text-white flex items-center pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Smart Tax Solutions for Your Financial Growth
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                GST, Income Tax, Compliance & Advisory Services for business success
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                  Get Consultation
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                  View Services
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10,000+</p>
                      <p className="text-blue-100">Happy Clients</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">15 Years</p>
                      <p className="text-blue-100">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Explore All Services <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose TaxForecast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                desc: 'Certified CA professionals with decades of combined experience',
                icon: '👨‍💼',
              },
              {
                title: 'Fast & Reliable',
                desc: 'Quick turnaround times and consistent, high-quality service delivery',
                icon: '⚡',
              },
              {
                title: 'Client-Focused',
                desc: 'Personalized solutions tailored to your specific business needs',
                icon: '🎯',
              },
              {
                title: 'Affordable Pricing',
                desc: 'Competitive rates without compromising on service quality',
                icon: '💰',
              },
              {
                title: 'Latest Technology',
                desc: 'Digital tools and automation for efficient service delivery',
                icon: '🚀',
              },
              {
                title: '24/7 Support',
                desc: 'Always available when you need expert tax and compliance advice',
                icon: '📞',
              },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Tax Tips</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for expert advice and latest tax updates
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={subscribing}
              className="px-8 py-3 bg-yellow-400 text-blue-600 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              {subscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subMessage && <p className="mt-4 text-sm">{subMessage}</p>}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let TaxForecast be your trusted financial partner for growth and compliance
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
