import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { saveAppointment } from '../utils/db';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookAppointment = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      setMessage('❌ Please fill all fields');
      return;
    }

    setLoading(true);
    const result = await saveAppointment({
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      service: service.title,
    });

    if (result.success) {
      setMessage('✅ Appointment booked successfully! We will contact you soon.');
      setFormData({ name: '', phone: '', date: '' });
    } else {
      setMessage(`❌ ${result.error}`);
    }
    setLoading(false);
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="text-blue-100 hover:text-white mb-4 inline-flex items-center">
            ← Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-4 flex items-center">
            <span className="text-6xl mr-4">{service.icon}</span>
            {service.title}
          </h1>
          <p className="text-xl text-blue-100">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Service</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-gray-700 font-semibold">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How long does the process take?',
                      a: 'The timeline varies based on complexity, but we typically complete standard services within 5-10 business days.',
                    },
                    {
                      q: 'What documents do I need?',
                      a: 'We provide a detailed checklist during the consultation. Our team will guide you through gathering required documents.',
                    },
                    {
                      q: 'What is your pricing?',
                      a: 'Pricing depends on service complexity and your business size. We offer customized quotes after assessment.',
                    },
                    {
                      q: 'Do you offer after-sales support?',
                      a: 'Yes, we provide comprehensive follow-up support and assistance even after service completion.',
                    },
                  ].map((item, i) => (
                    <details key={i} className="card cursor-pointer">
                      <summary className="font-bold text-gray-900 hover:text-blue-600">
                        {item.q}
                      </summary>
                      <p className="text-gray-600 mt-3">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Form */}
            <div>
              <div className="card sticky top-20 bg-blue-50 border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Book an Appointment</h3>
                <form onSubmit={handleBookAppointment} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50"
                  >
                    {loading ? 'Booking...' : 'Book Appointment'}
                  </button>

                  {message && (
                    <p className={`text-sm p-3 rounded-lg ${
                      message.includes('✅') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {message}
                    </p>
                  )}
                </form>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <h4 className="font-bold mb-4 text-gray-900">Quick Info</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>✓ Free Consultation Available</p>
                    <p>✓ Expert Professionals</p>
                    <p>✓ Fast Implementation</p>
                    <p>✓ 24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">
            Let our experts help you with {service.title}. Contact us today!
          </p>
          <Link to="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Started Now <ArrowRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
