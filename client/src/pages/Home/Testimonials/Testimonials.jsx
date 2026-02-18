import React from 'react';
import Slider from 'react-slick';
import testimonials from './TestimonialData';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="bg-indigo-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">What Our Clients Say</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="px-2 md:px-4 py-8">
              <div className="bg-white rounded-lg p-8 shadow-xl text-center">
                <p className="text-xl text-gray-700 italic mb-6">"{testimonial.message}"</p>
                <h3 className="text-lg font-bold text-indigo-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
