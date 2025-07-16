import React from 'react';

import Hayley from '../images/Hayley Phillips.png';
import James from '../images/James Rodry.png';
import Jaw from '../images/Jaw-Long.png';
import Michael from '../images/Michael Rasmussen.png';
import Shannon from '../images/Shannon Howarth.png';
import Warren from '../images/Warren Bailey.png';

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="section-content">
        <div className="slider-container swiper">
          <div className="slider-wrapper">
            <ul className="testimonials-list swiper-wrapper">
              <li className="testimonial swiper-slide">
                <img src={Hayley} alt="Hayley Phillips" className="user-image" />
                <h3 className="name">Hayley Phillips</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
              <li className="testimonial swiper-slide">
                <img src={James} alt="James Rodry" className="user-image" />
                <h3 className="name">James Rodry</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
              <li className="testimonial swiper-slide">
                <img src={Jaw} alt="Jaw Long" className="user-image" />
                <h3 className="name">Jaw Long</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
              <li className="testimonial swiper-slide">
                <img src={Michael} alt="Michael Rasmussen" className="user-image" />
                <h3 className="name">Michael Rasmussen</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
              <li className="testimonial swiper-slide">
                <img src={Shannon} alt="Shannon Howarth" className="user-image" />
                <h3 className="name">Shannon Howarth</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
              <li className="testimonial swiper-slide">
                <img src={Warren} alt="Warren Bailey" className="user-image" />
                <h3 className="name">Warren Bailey</h3>
                <i className="feedback">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                </i>
              </li>
            </ul>

            <div className="swiper-pagination"></div>
            <div className="swiper-slide-button swiper-button-prev"></div>
            <div className="swiper-slide-button swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
