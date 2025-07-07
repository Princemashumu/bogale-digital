import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const servicesList = [
    {
      id: 1,
      title: 'Enterprise Web Development',
      description: 'Scalable, secure web applications built with cutting-edge technologies',
      icon: 'fas fa-globe-americas',
      features: [
        'React, Vue.js, Angular Applications',
        'Node.js & Python Backend Systems',
        'Cloud-Native Architecture',
        'API Development & Integration',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      pricing: 'From R25,000',
      duration: '4-12 weeks',
      clients: '50+ Projects Delivered'
    },
    {
      id: 2,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      icon: 'fas fa-mobile-alt',
      features: [
        'iOS & Android Native Apps',
        'React Native Development',
        'Flutter Applications',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications & Analytics'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      pricing: 'From R35,000',
      duration: '6-16 weeks',
      clients: '30+ Apps Launched'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions and automated deployment pipelines',
      icon: 'fas fa-cloud',
      features: [
        'AWS, Azure, Google Cloud Setup',
        'Kubernetes & Docker Containerization',
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code (IaC)',
        'Monitoring & Logging Solutions',
        'Security & Compliance'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana'],
      pricing: 'From R15,000/month',
      duration: '2-8 weeks',
      clients: '4+ Infrastructures Managed'
    },
    {
      id: 4,
      title: 'Digital Transformation Support',
      description: 'Strategic technology consulting to modernize your business processes',
      icon: 'fas fa-rocket',
      features: [
        'Digital Strategy Development',
        'Legacy System Modernization',
        'Process Automation',
        'Technology Roadmap Planning',
        'Change Management Support',
        'ROI Assessment & Optimization'
      ],
      technologies: ['PowerBI', 'Salesforce', 'SAP', 'Microsoft 365', 'Automation Tools'],
      pricing: 'From R8,000/day',
      duration: '1-6 months',
      clients: '25+ Transformations Led'
    },
    // {
    //   id: 5,
    //   title: 'Data Analytics & AI Solutions',
    //   description: 'Intelligent data solutions and machine learning implementations',
    //   icon: 'fas fa-brain',
    //   features: [
    //     'Business Intelligence Dashboards',
    //     'Machine Learning Models',
    //     'Data Pipeline Development',
    //     'Predictive Analytics',
    //     'Natural Language Processing',
    //     'Computer Vision Solutions'
    //   ],
    //   technologies: ['Python', 'TensorFlow', 'PowerBI', 'Apache Spark', 'Elasticsearch'],
    //   pricing: 'From R45,000',
    //   duration: '8-20 weeks',
    //   clients: '15+ AI Solutions Deployed'
    // },
    // {
    //   id: 6,
    //   title: 'Cybersecurity & Compliance',
    //   description: 'Comprehensive security solutions and regulatory compliance',
    //   icon: 'fas fa-shield-alt',
    //   features: [
    //     'Security Audits & Assessments',
    //     'POPIA & GDPR Compliance',
    //     'Penetration Testing',
    //     'Security Monitoring Systems',
    //     'Incident Response Planning',
    //     'Staff Security Training'
    //   ],
    //   technologies: ['Splunk', 'Nessus', 'Wireshark', 'OWASP', 'ISO 27001'],
    //   pricing: 'From R12,000',
    //   duration: '2-12 weeks',
    //   clients: '20+ Security Audits Completed'
    // }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="services">
      <div className="services-moving-shapes">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-square"></div>
      </div>
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Comprehensive digital solutions designed to transform your business with cutting-edge technology
        </p>
      </div>
      
      <div className="services-grid">
        {servicesList.map(service => (
          <div 
            key={service.id} 
            className={`service-card gradient-${service.id} ${activeService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-header">
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
            
            <div className="service-stats">
              <div className="stat-item">
                <span className="stat-label">Starting at</span>
                <span className="stat-value">{service.pricing}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Timeline</span>
                <span className="stat-value">{service.duration}</span>
              </div>
            </div>

            <div className={`service-details ${activeService === service.id ? 'expanded' : ''}`}>
              <div className="features-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies-section">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="clients-section">
                <div className="clients-stat">
                  <span className="clients-number">{service.clients}</span>
                </div>
              </div>
            </div>

            <div className="service-action">
              <button className="expand-btn">
                {activeService === service.id ? 'Show Less' : 'Learn More'}
                <span className={`arrow ${activeService === service.id ? 'up' : 'down'}`}>
                  {activeService === service.id ? '▲' : '▼'}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta">
        {/* Floating shapes for CTA */}
        <div className="cta-moving-shapes">
          <div className="cta-shape cta-shape-circle"></div>
          <div className="cta-shape cta-shape-triangle"></div>
          <div className="cta-shape cta-shape-square"></div>
        </div>
        <h3>Ready to Transform Your Business?</h3>
        <p>Get a free consultation and custom quote for your project</p>
        <button className="cta-button">Get Free Consultation</button>
      </div>
    </div>
  );
};

export default Services;