import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Partners from './components/Partners'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import logoImage from './assets/Business LOgo.png'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for professional feel
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <img 
              src={logoImage} 
              alt="Bogale Digital Solutions" 
              className="loading-logo-image"
            />
          </div>
          <div className="loading-spinner"></div>
          <p>Initializing Digital Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="section">
          <Hero />
        </section>


        {/* Services Section */}
        <section id="services" className="section">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <Portfolio />
        </section>




        {/* Contact Section */}
        <section id="contact" className="section">
          <ContactUs />
        </section>
        
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
