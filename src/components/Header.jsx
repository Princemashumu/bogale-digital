"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import logoImage from "../assets/Business LOgo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false) // Initially hidden
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50)
      
      // Show header when user starts scrolling
      if (currentScrollY > 0) {
        setIsVisible(true)
        
        // Hide/show header based on scroll direction after initial scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsVisible(false)
        } else {
          // Scrolling up - show header
          setIsVisible(true)
        }
      } else {
        // At the top of the page - hide header
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
      
      // Update active section based on scroll position
      const sections = ['home', 'portfolio', 'team', 'testimonials', 'partners', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>

      {/* Main header */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <img
                src={logoImage}
                alt="Bogale Digital Solutions"
                className="logo-image"
              />
            
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
              <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
                <i className="fas fa-briefcase"></i>
                <span>Portfolio</span>
              </a>
              <a href="#team" className={activeSection === 'team' ? 'active' : ''}>
                <i className="fas fa-users"></i>
                <span>Team</span>
              </a>
              <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>
                <i className="fas fa-star"></i>
                <span>Testimonials</span>
              </a>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </div>


            {/* Mobile menu button */}
            <button
              className="menu-toggle"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-nav-header">
              <h3>Navigation</h3>
              <button className="close-mobile" onClick={closeMenu}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="mobile-nav-links">
              <a href="#home" onClick={closeMenu}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
              <a href="#portfolio" onClick={closeMenu}>
                <i className="fas fa-briefcase"></i>
                <span>Portfolio</span>
              </a>
              <a href="#team" onClick={closeMenu}>
                <i className="fas fa-users"></i>
                <span>Our Team</span>
              </a>
              <a href="#testimonials" onClick={closeMenu}>
                <i className="fas fa-star"></i>
                <span>Testimonials</span>
              </a>
              <a href="#partners" onClick={closeMenu}>
                <i className="fas fa-handshake"></i>
                <span>Partners</span>
              </a>
              <a href="#contact" onClick={closeMenu}>
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
            
            <div className="mobile-nav-footer">
              <div className="mobile-contact">
                <p><i className="fas fa-phone"></i> +27 68 260 6328</p>
                <p><i className="fas fa-envelope"></i> info@bogaledigital.co.za</p>
              </div>
              <div className="mobile-social">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              </div>
              <button className="mobile-cta">
                <i className="fas fa-rocket"></i>
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
