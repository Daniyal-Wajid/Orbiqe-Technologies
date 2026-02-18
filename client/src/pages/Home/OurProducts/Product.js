import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, img, alt, name }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4" onClick={() => navigate(`/service/${id}`)}>
      <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="h-56 w-full overflow-hidden relative">
          {/* Image with zoom effect */}
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="relative w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{name}</h3>
            <div className="h-1 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
