import React from 'react';

const About = () => {
  return (
    <div className='bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300'>
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className='text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase'>Who We Are</h2>
        <p className='mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
          About Us
        </p>
        <p className='mt-4 max-w-2xl text-lg md:text-xl text-gray-500 dark:text-gray-300 mx-auto'>
          We are a leading provider of innovative electrical solutions, specializing in high-quality installations and services.
        </p>
      </div>
      <div className="mt-10 max-w-4xl mx-auto">
        <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center'>
          Our team of experts is dedicated to delivering exceptional results, ensuring safety, efficiency, and reliability in every project.
          With years of experience and a commitment to excellence, we handle everything from residential to commercial electrical needs.
          Our goal is to exceed your expectations and power your future with state-of-the-art solutions.
        </p>
      </div>
    </div>
  )
}

export default About;
