import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Web Application Development',
    'Cloud Migration & Infrastructure',
    'AI & Machine Learning Solutions',
    'Digital Transformation Consulting',
    'Enterprise Software Integration',
    'DevOps & Automation'
  ];

  const budgetRanges = [
    'R50,000 - R100,000',
    'R100,000 - R250,000',
    'R250,000 - R500,000',
    'R500,000 - R1,000,000',
    'R1,000,000+'
  ];

  const timelines = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <i className="fas fa-comments"></i>
            <span>Get In Touch</span>
          </div>
          <h2>Let's Build Something Amazing Together</h2>
          <p>Ready to transform your business with cutting-edge technology? Our team of experts is here to turn your vision into reality.</p>

        <div className="contact-content">
          <div className="contact-info">
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Start Your Project</h3>
              <p>Tell us about your project and we'll get back to you with a customized solution.</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Thank You!</h4>
                <p>Your message has been received. Our team will contact you within 2 hours.</p>
                <div className="success-details">
                  <p><i className="fas fa-calendar"></i> Expected response: Today</p>
                  <p><i className="fas fa-user-tie"></i> Assigned consultant: Senior Project Manager</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      <i className="fas fa-building"></i>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fas fa-phone"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <i className="fas fa-cogs"></i>
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">
                      <i className="fas fa-dollar-sign"></i>
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">
                      <i className="fas fa-calendar"></i>
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">
                      <i className="fas fa-comment"></i>
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      rows="6"
                      required
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <div className="privacy-note">
                    <i className="fas fa-shield-alt"></i>
                    <p>Your information is secure and will never be shared with third parties. We respect your privacy.</p>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="contact-footer">
          <div className="quick-stats">
            <div className="stat">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-content">
                <h4>24Hours</h4>
                <p>Average Response Time</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="stat-content">
                <h4>500+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="stat-content">
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <h4>50+</h4>
                <p>Expert Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUs;