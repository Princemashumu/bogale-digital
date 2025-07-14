import React, { useState } from 'react';
import './FlipCard.css';
import cardImage from '../assets/image.png';

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cardImage} alt="Nana Card" className="flip-card-image" />
        </div>
        <div className="flip-card-back">
          <h2>Empowering Families, Ensuring Every Child's Needs Are Met.</h2>
          <p>A secure financial platform ensuring funds are used solely for children's essential needs.</p>
          <ul className="flip-card-features">
            <li><strong>Account Setup:</strong> Create specific accounts for different needs (nutrition, medical, clothing, school, baby care, etc.).</li>
            <li><strong>Funding Mechanism:</strong> Deposit via bank transfer, card, or direct deposit from organizations.</li>
            <li><strong>Spending Controls:</strong> Funds can only be spent on approved categories and merchants.</li>
            <li><strong>Tracking & Reporting:</strong> Track spending and generate reports for transparency and accountability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
