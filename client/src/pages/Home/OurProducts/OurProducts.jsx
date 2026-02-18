import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

import service1 from '../../../assets/service/MV LV.jpeg';
import service2 from '../../../assets/service/Termination Kits.jpeg';
import service3 from '../../../assets/service/Testing.jpeg';
import service4 from '../../../assets/service/Air Cooler.jpeg';
import service5 from '../../../assets/service/Solar.jpeg';
import service6 from '../../../assets/service/Oil Transformer.JPG';
import service7 from '../../../assets/service/Dry Transformer.jpg';
import service8 from '../../../assets/service/Ducts.jpeg';
import service9 from '../../../assets/service/Earthing.jpeg';
import service10 from '../../../assets/service/Cable Tray Ladder.jpeg';
import service11 from '../../../assets/service/LPS.jpeg';
import service12 from '../../../assets/service/Axel Fans.jpeg';
import service13 from '../../../assets/service/Technical.jpeg';
import service14 from '../../../assets/service/CCTV.jpeg';
import service15 from '../../../assets/service/Fire Alarm.jpeg';
import service16 from '../../../assets/service/Industrial Fans.jpeg';
import service17 from '../../../assets/service/Busway.jpg';
import service18 from '../../../assets/service/CAD.jpeg';
import service19 from '../../../assets/service/Fence.jpeg';
import service20 from '../../../assets/service/Power Fan.jpeg';
import service21 from '../../../assets/service/Complete.jpeg';

import servicesData from '../../Services/ServiceData';

const images = {
  1: service1, 2: service2, 3: service3, 4: service4, 5: service5,
  6: service6, 7: service7, 8: service8, 9: service9, 10: service10,
  11: service11, 12: service12, 13: service13, 14: service14, 15: service15,
  16: service16, 17: service17, 18: service18, 19: service19, 20: service20,
  21: service21,
};

const WeOffer = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: '20px' } },
    ],
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300'>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className='text-sm md:text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase'>Our Products</h2>
        <p className='mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
          Our Products
        </p>
        <p className='mt-4 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto'>
          Discover our diverse range of products designed to meet various industrial needs. Our offerings combine quality and reliability.
        </p>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Slider {...settings} className="pb-8">
          {servicesData.map((service) => (
            <Product
              key={service.id}
              id={service.id}
              img={images[service.id]}
              alt={`Image of ${service.name}`}
              name={service.name}
            />
          ))}
        </Slider>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-md hover:shadow-xl transition-all"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default WeOffer;
