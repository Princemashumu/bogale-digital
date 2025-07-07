import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const companyInfo = {
    founded: 2023,
    mission: "Committed to empowering clients with reliable IT services and future-forward digital tools",
    description: "Dependable, efficient, and scalable technical solutions that drive digital transformation and empower our clients",
    values: [
      {
        id: 1,
        title: "Innovation",
        description: "Embracing cutting-edge technology"
      },
      {
        id: 2,
        title: "Excellence",
        description: "Delivering outstanding results"
      },
      {
        id: 3,
        title: "Customer Focus",
        description: "Putting clients first"
      },
      {
        id: 4,
        title: "Integrity",
        description: "Operating with transparency"
      }
    ]
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <p className="mission-statement">
          <span>Empowering Future Success</span>
          {companyInfo.mission}
        </p>
       
      </div>

      

      <div className="values-grid">
        {companyInfo.values.map(value => (
          <div key={value.id} className={`value-card gradient-${value.id}`}>
            <div className="value-content">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>

       <p className="description">{companyInfo.description}</p>
<div className="stats-grid">
        <div className="stat-card gradient-stat-1">
          <div className="stat-content">
            <h2>{companyInfo.founded}</h2>
            <p>Founded</p>
          </div>
        </div>
        <div className="stat-card gradient-stat-2">
          <div className="stat-content">
            <h2>100+</h2>
            <p>Projects</p>
          </div>
        </div>
        <div className="stat-card gradient-stat-3">
          <div className="stat-content">
            <h2>50+</h2>
            <p>Clients</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutUs;