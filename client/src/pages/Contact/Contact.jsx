import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center pt-32 md:pt-60 transition-colors duration-300">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
        {/* Contact Info Side */}
        <div className="bg-indigo-600 dark:bg-indigo-800 w-full md:w-1/3 p-8 text-white transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4 text-indigo-200">
            We'd love to hear from you. Fill out the form or reach us via:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@orbiqetech.com</span>
            </div>
            <div className="flex items-center">
              <span>+92 3024356793</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Madina Heights 5th floor, Apartment 43, Johar Town, Lahore</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
