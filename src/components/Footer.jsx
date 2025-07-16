import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
            <div className="footer-section">
              <div className="company-info">
                <h3>Bogale Digital Solutions</h3>
                <p>Transforming businesses through innovative technology solutions across Africa and beyond. We deliver enterprise-grade digital solutions that drive growth and innovation.</p>
                <div className="contact-quick">
                  <p><i className="fas fa-envelope"></i> princengwakomashumu@gmail.com</p>
                  <p><i className="fas fa-phone"></i> +27 68 260 6328</p>
                  <p><i className="fas fa-map-marker-alt"></i> Johannesburg, South Africa</p>
                  <p><i className="fas fa-clock"></i> Mon-Fri: 8:00 AM - 6:00 PM SAST</p>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Custom Software Development</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">Cloud Migration & Infrastructure</a></li>
                <li><a href="#services">AI & Machine Learning</a></li>
                <li><a href="#services">Digital Transformation</a></li>
                <li><a href="#services">DevOps & Automation</a></li>
                <li><a href="#services">Enterprise Integration</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#home">About Us</a></li>
                <li><a href="#portfolio">Our Portfolio</a></li>
                <li><a href="#team">Leadership Team</a></li>
                <li><a href="#testimonials">Client Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Tech Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/bogale-digital" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                  LinkedIn
                </a>

                <a href="https://github.com/bogale-digital" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
            
              </div>
              
              <h4>Certifications & Partners</h4>
              <div className="certifications">
                <div className="cert-badge">Microsoft Azure</div>
                <div className="cert-badge">Qualified developers</div>
                <div className="cert-badge">React Certified</div>
                <div className="cert-badge">Google Cloud Partner</div>
                <div className="cert-badge">Agile Certified</div>
                <div className="cert-badge">Scrum Master Certified</div>
              </div>
            </div>
          </div>
        </div>
      
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>&copy; 2025 Bogale Digital Solutions (PTY) LTD. All rights reserved. | Reg: 2023/123456/07</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
