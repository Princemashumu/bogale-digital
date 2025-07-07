import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-highlight">Transforming</span> Business Through
              <br />
              <span className="title-gradient">Digital Innovation</span>
            </h1>
            
            <p className="hero-subtitle">
              Enterprise-grade technology solutions that drive growth, enhance efficiency, 
              and position your business for the digital future. Trusted by 150+ companies across Africa.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">98.7%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn btn-primary">Start Your Project</button>
              <button className="btn btn-secondary">View Portfolio</button>
            </div>
            
            <div className="hero-badges">
              <div className="badge">Microsoft Partner</div>
              <div className="badge">AWS Certified</div>
              <div className="badge">ISO 27001</div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-cards">
              <div className="floating-card card-1">
                <div className="card-icon">💻</div>
                <h3>Web Development</h3>
                <p>Modern, responsive applications</p>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-icon">☁️</div>
                <h3>Cloud Solutions</h3>
                <p>Scalable infrastructure</p>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-icon">📱</div>
                <h3>Mobile Apps</h3>
                <p>Cross-platform development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
