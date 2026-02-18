import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from './ServiceData';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(service => service.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-24">
        <p className="text-xl text-gray-500 dark:text-gray-400">Service not found.</p>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/services');
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Banner for Service */}
      <div className="relative bg-indigo-800 text-white py-32 px-4 overflow-hidden pt-32 md:pt-60">
        <div className="absolute inset-0">
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{service.name}</h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">{service.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Service Details</h2>
              <div className="prose prose-indigo dark:prose-invert text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {/* If detailedDescription contains line breaks, split them */}
                {service.detailedDescription ?
                  service.detailedDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  )) :
                  <p>No detailed description available.</p>
                }
              </div>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-r-lg transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Why Choose Us?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our specialized approach ensures that {service.name} is handled with the utmost precision and adherence to international standards.
              </p>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="mt-8 lg:mt-0 lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-24 transition-colors">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interested in this service?</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Contact us today to discuss your requirements and get a quote.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all"
                >
                  Get a Quote
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleBack}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
