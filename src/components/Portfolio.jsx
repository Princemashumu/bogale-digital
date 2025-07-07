import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "NextGen Digital Banking Platform",
      category: "fintech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Revolutionary digital banking ecosystem with AI-powered fraud detection, real-time analytics, and seamless multi-currency support serving over 2.5 million active users.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS Lambda", "Docker", "Kubernetes"],
      client: "Standard Bank Group",
      year: "2024",
      duration: "18 months",
      team: "12 specialists",
      features: [
        "AI-Powered Fraud Detection",
        "Real-time Transaction Processing",
        "Multi-currency Support",
        "Advanced Analytics Dashboard",
        "Mobile-first Design",
        "99.9% Uptime SLA"
      ],
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
    { key: 'fintech', label: 'FinTech', icon: 'fas fa-university', featured: true },
    { key: 'ecommerce', label: 'E-commerce', icon: 'fas fa-shopping-cart' },
    { key: 'healthcare', label: 'Healthcare', icon: 'fas fa-heartbeat' },
    { key: 'iot', label: 'IoT & Smart Cities', icon: 'fas fa-microchip' },
    { key: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { key: 'logistics', label: 'Logistics', icon: 'fas fa-truck' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2>Our Portfolio</h2>
          <p>Showcasing successful digital transformations across industries</p>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''} ${category.featured ? 'featured' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
              {category.featured && <span className="featured-badge">Featured</span>}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`portfolio-card ${project.category === 'fintech' ? 'featured-card' : ''}`}>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="overlay-content">
                    {project.status && (
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    )}
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    {project.features && (
                      <div className="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.metrics && (
                      <div className="project-metrics">
                        <div className="metric">
                          <span className="metric-value">{project.metrics.users}</span>
                        </div>
                        <div className="metric">
                          <span className="metric-value">{project.metrics.transactions}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h4>{project.title}</h4>
                  {project.awards && (
                    <div className="awards">
                      <i className="fas fa-trophy"></i>
                      <span>{project.awards.length} Awards</span>
                    </div>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {project.complexity && (
                  <div className="project-info">
                    <span className="complexity">{project.complexity}</span>
                    {project.duration && <span className="duration">{project.duration}</span>}
                    {project.team && <span className="team">{project.team}</span>}
                  </div>
                )}
                
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="card-footer">
                  <div className="client-info">
                    <span className="client-name">{project.client}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <button className="view-btn">
                    <i className="fas fa-external-link-alt"></i>
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Transform Your Business?</h3>
              <p>Join industry leaders like Standard Bank, Takealot, and Netcare who trust us with their digital transformation journey.</p>
              <div className="cta-features">
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Enterprise-grade solutions</span>
                </div>
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>99.9% uptime guarantee</span>
                </div>
                <div className="cta-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Start Your Project
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-calendar"></i>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
