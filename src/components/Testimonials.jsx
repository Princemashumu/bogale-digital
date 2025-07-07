import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, First National Bank",
      company: "FNB",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150",
      content: "Bogale Digital transformed our legacy banking system into a modern, secure platform. Their expertise in fintech solutions is unmatched. The project was delivered on time and exceeded our expectations.",
      rating: 5,
      project: "Digital Banking Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, TechStart Innovations",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      content: "Working with Bogale Digital was a game-changer for our startup. They developed our mobile app from concept to launch in just 3 months. The quality of work and attention to detail is exceptional.",
      rating: 5,
      project: "Mobile Application Development"
    },
    {
      id: 3,
      name: "Dr. Amanda Williams",
      position: "Director of IT, Netcare Group",
      company: "Netcare",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150",
      content: "The healthcare management system developed by Bogale Digital has revolutionized our patient care process. The telemedicine features have been particularly valuable during the pandemic.",
      rating: 5,
      project: "Healthcare Management System"
    },
    {
      id: 4,
      name: "James Mthembu",
      position: "IT Manager, City of Johannesburg",
      company: "COJ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "The smart city IoT dashboard has given us unprecedented visibility into our infrastructure. Bogale Digital's innovative approach to urban technology solutions is impressive.",
      rating: 5,
      project: "Smart City IoT Dashboard"
    },
    {
      id: 5,
      name: "Prof. Linda Sibeko",
      position: "Dean of Computer Science, Wits University",
      company: "Wits University",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      content: "The learning platform has enhanced our online education capabilities significantly. Students love the interactive features and the seamless user experience.",
      rating: 5,
      project: "Educational Learning Platform"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from real clients who trust us with their digital transformation</p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].content}
              </p>
              
              <div className="rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <div className="project-tag">
                Project: {testimonials[currentTestimonial].project}
              </div>
            </div>
            
            <div className="testimonial-author">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="author-image"
              />
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].position}</p>
                <span className="company">{testimonials[currentTestimonial].company}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <span className="stat-number">98.7%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat">
            <span className="stat-number">150+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Repeat Business</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
