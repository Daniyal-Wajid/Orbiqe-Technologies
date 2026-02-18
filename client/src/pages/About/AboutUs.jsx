import React from 'react';
import Photo from "../../assets/Wajid.jpg";

const ceo = {
  name: 'Wajid Hussain',
  title: 'Chief Executive Officer',
  qualifications: [
    'University Of Engineering and Technology (U.E.T), Lahore.',
    '10 Years at AEG, Germany.',
    'Experience at Siemens-Pakistan & PEL.',
    'Led Transformer Business at Validus Engineering.',
  ],
  message: `As the CEO of Orbiqe Technologies, I am delighted to welcome you to our organization. We stand at the forefront of the industry with a passion for excellence. Our multidisciplinary approach enables us to address complex challenges with precision. We believe in collaboration, innovation, and integrity.`,
};

const AboutUs = () => {
  return (
    <div className='bg-white dark:bg-gray-900 transition-colors duration-300 pt-32 md:pt-60'>

      {/* Hero Header */}
      <div className="relative bg-indigo-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
            About Orbiqe
          </h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto font-light">
            Driving innovation and setting new standards in the industry through engineering excellence.
          </p>
        </div>
      </div>

      {/* CEO Section - Premium Card */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img src={Photo} alt={ceo.name} className="absolute inset-0 w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
              <div className="absolute bottom-4 left-4 text-white lg:hidden">
                <h2 className="text-2xl font-bold">{ceo.name}</h2>
                <p className="text-sm opacity-90">{ceo.title}</p>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Leadership</div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 hidden lg:block">Message from the CEO</h2>
              <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic border-l-4 border-indigo-500 pl-6 mb-8">
                "{ceo.message}"
              </blockquote>

              <div className="mt-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Key Qualifications</h3>
                <ul className="space-y-2">
                  {ceo.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {qual}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 hidden lg:block">
                <p className="text-gray-900 dark:text-white font-bold text-lg">{ceo.name}</p>
                <p className="text-indigo-600 dark:text-indigo-400">{ceo.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8 skew-y-1">
        <div className="-skew-y-1 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Our Culture</h2>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Core Values</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honesty and transparency in all dealings.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Customer Focus", desc: "We prioritize our client's success above all.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "Innovation", desc: "Always exploring new technologies.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Excellence", desc: "Delivering nothing but the best quality.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
            ].map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-indigo-500">
                <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={val.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className='bg-indigo-600 dark:bg-indigo-800 py-20 px-4 text-center'>
        <h2 className='text-3xl font-extrabold text-white'>Ready to work with us?</h2>
        <p className='mt-4 text-lg text-indigo-100 mb-8 max-w-2xl mx-auto'>
          Join our list of satisfied clients and experience engineering at its finest.
        </p>
        <a href='/contact' className='inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all transform hover:scale-105'>
          Contact Us Today
        </a>
      </section>

    </div>
  );
};

export default AboutUs;