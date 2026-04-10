import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.shortDesc}</p>
      <Link
        to={`/services/${service.id}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
      >
        Learn More <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
