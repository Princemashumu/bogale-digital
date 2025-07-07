import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  const contactCards = [
    {
      icon: 'fas fa-rocket',
      title: 'Start Your Project',
      description: 'Ready to bring your vision to life? Let\'s discuss your next big idea and create something extraordinary together.',
      action: 'Launch Project',
      link: '#project'
    },
    {
      icon: 'fas fa-comments',
      title: 'Schedule a Call',
      description: 'Book a free consultation with our experts to explore solutions tailored specifically for your business needs.',
      action: 'Book Call',
      link: 'tel:+27123456789'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Send Message',
      description: 'Have questions or need more information? Drop us a message and we\'ll get back to you within 24 hours.',
      action: 'Send Email',
      link: 'mailto:hello@bogaledigital.com'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '5★', label: 'Client Rating' }
  ];

  const handleCardClick = (link) => {
    if (link === '#project') {
      setShowModal(true);
    } else {
      window.open(link, '_blank');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container">
        {/* Creative Header */}
        <div className="contact-header">
          <div className="section-badge">
            <i className="fas fa-sparkles"></i>
            <span>Let's Connect</span>
          </div>
          <h2>Ready to Transform Your Vision?</h2>
          <p>
            Choose your preferred way to connect with our team of digital innovators. 
            We're here to turn your boldest ideas into reality with cutting-edge technology and creative solutions.
          </p>
        </div>

        {/* Interactive Contact Cards */}
        <div className="contact-content">
          {contactCards.map((card, index) => (
            <div 
              key={index}
              className="contact-card"
              onClick={() => handleCardClick(card.link)}
            >
              <div className="card-icon">
                <i className={card.icon}></i>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <button className="card-action">
                <span>{card.action}</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Creative Stats Section */}
        <div className="contact-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className={`success-modal ${showModal ? 'active' : ''}`}>
          <div className="success-content">
            <div className="success-icon">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="success-title">Let's Get Started!</h3>
            <p className="success-message">
              We're excited to work with you! Our team will reach out within 24 hours to discuss your project in detail.
            </p>
            <button className="close-modal" onClick={closeModal}>
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;