import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "https://img.shields.io/badge/Microsoft-Partner-blue?style=for-the-badge" },
    { name: "AWS", logo: "https://img.shields.io/badge/AWS-Certified-orange?style=for-the-badge" },
    { name: "Google Cloud", logo: "https://img.shields.io/badge/Google_Cloud-Partner-green?style=for-the-badge" },
    { name: "IBM", logo: "https://img.shields.io/badge/IBM-Partner-darkblue?style=for-the-badge" }
  ];

  return (
    <div className="partners">
      <div className="container">
        <div className="partners-header">
          <h2>Our Partners</h2>
          <p>Trusted by industry leaders</p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
