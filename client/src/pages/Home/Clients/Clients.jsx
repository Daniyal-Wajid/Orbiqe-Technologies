import React from 'react';
import ClientsData from './ClientsData';

const Clients = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className='text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase'>Partners</h2>
        <p className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Trusted Clients</p>
        <p className="mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          We are proud to work with a diverse range of clients who trust us for our exceptional services.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-5 place-items-center">
        {ClientsData.map((client, index) => (
          <div key={index} className="col-span-1 w-full flex justify-center items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group aspect-square md:aspect-auto">
            <img
              className="max-h-16 w-auto object-contain filter grayscale dark:grayscale-0 dark:brightness-200 lg:grayscale lg:opacity-60 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 transition-all duration-500"
              src={client.logo}
              alt={client.name}
              title={client.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
