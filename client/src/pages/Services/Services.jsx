import React from 'react';
import { Link } from 'react-router-dom';
import services from './ServiceData';

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen pt-32 md:pt-60 transition-colors duration-300">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">What We Do</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our Services
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          Explore our range of high-quality services designed to meet your electrification needs with precision and expertise.
        </p>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={service.img} alt={service.name} />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.name}
                </p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium">
                  Learn more &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
