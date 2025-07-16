import React from 'react';

// Import images from src/images folder
import AboutImage from '../images/About-us.png';
const Navbar = () => {
  return (
    <div>
      {/* <nav className="navbar">
        <a href="#" className="nav-logo">
          <h2 className="logo-text">Coffee<span>Shop</span></h2>
        </a>

        <ul className="nav-menu">
          <button id="menu-close-button" className="fas fa-times"></button>

          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#menu" className="nav-link">Menu</a></li>
          <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <button id="menu-open-button" className="fas fa-bars"></button>
      </nav> */}

      <section className="hero-section">
        <div className="section-content">
          <div className="hero-details">
            <h2 className="title">Exceptional Coffee</h2>
            <h3 className="subtitle">Where Every Cup Tells a Story</h3>
            <p className="description">Our coffee is brewed to perfection, giving you a sip of love in every cup</p>
            <div className="buttons">
              <a href="#" className="button order-now">Order Now</a>
              <a href="#contact" className="button contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-content">
          <div className="about-image-wrapper">
            <img src={AboutImage} alt="About" className="about-image" />
          </div>
          <div className="about-details">
            <h2 className="section-title">About Us</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus necessitatibus dicta
              reiciendis assumenda ea, doloribus quibusdam error ullam modi labore.
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Navbar;

