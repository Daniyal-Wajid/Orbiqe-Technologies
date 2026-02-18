import React from 'react';
import './card.css';

const Card = ({ logo, altText }) => {
  return (
    <div className="card">
      <img src={logo} alt={altText} className="card-logo" />
    </div>
  );
};

export default Card;
