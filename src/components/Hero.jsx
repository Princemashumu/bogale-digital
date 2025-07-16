import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const backgroundImages = [
    {
      id: 1,
      url: 'https://cdn.pixabay.com/animation/2023/10/04/10/45/10-45-38-963_512.gif', // Vibrant neon tech circuit
      title: 'Digital Innovation',
      subtitle: 'Transforming businesses with cutting-edge technology solutions',
      category: 'Technology Solutions'
    },
    {
      id: 2,
      url: 'https://cdn.pixabay.com/animation/2023/10/04/10/45/10-45-38-962_512.gif', // Vibrant animated robot/AI
      title: 'Creative Design',
      subtitle: 'Beautiful, functional designs that capture your brand essence',
      category: 'Design & Development'
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/animation/2023/10/04/10/45/10-45-38-961_512.gif', // Vibrant data/analytics animation
      title: 'Strategic Growth',
      subtitle: 'Data-driven strategies that accelerate your business success',
      category: 'Business Strategy'
    }
  ];

  const achievements = [
 
    { 
      number: '50+', 
      label: 'Projects ', 
      icon: (
        <svg className="achievement-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12A10 10 0 1 1 5.93 7.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      number: '100%', 
      label: 'Uptime Rate', 
      icon: (
        <svg className="achievement-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      number: '24/7', 
      label: 'Support', 
      icon: (
        <svg className="achievement-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`hero ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Swiper */}
      <div className="hero-background-swiper">
        <Swiper
          modules={[Pagination, Navigation, EffectFade, Autoplay, Parallax]}
          effect="fade"
          parallax={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'background-bullet',
            bulletActiveClass: 'background-bullet-active',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className="background-swiper"
        >
          {backgroundImages.map((bg) => (
            <SwiperSlide key={bg.id}>
              <div className="background-slide" data-swiper-parallax="-23%">
                <img src={bg.url} alt={bg.title} className="background-image" />
                <div className="background-overlay"></div>
                <div className="background-gradient"></div>
                <div className="background-particles"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Award-Winning Digital Agency</span>
            </div>
            
            <h1 className="hero-title" data-swiper-parallax="-300">
              <span className="title-line">Crafting Excellence in</span>
              <span className="title-gradient">{backgroundImages[currentSlide]?.title}</span>
            </h1>
            
            <p className="hero-subtitle" data-swiper-parallax="-200">
              {backgroundImages[currentSlide]?.subtitle}. We combine creativity with technology 
              to deliver exceptional digital experiences that drive results and inspire growth.
            </p>
            
            <div className="hero-achievements">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <div className="achievement-number">{achievement.number}</div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="hero-actions" data-swiper-parallax="-100">
              <button className="btn btn-primary">
                <span>Get Started Today</span>
                
              </button>
              <button className="btn btn-secondary">
                <span>View Our Work</span>
  
              </button>
            </div>
            
            <div className="hero-tech-stack">
              <div className="tech-logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="tech-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
