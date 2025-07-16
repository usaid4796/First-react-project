import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <i className="fa-solid fa-location-crosshairs"></i>
              <p>1089 U.S. Hwy 40, Vernal, UT 84078</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-envelope"></i>
              <p>info@coffeeshop.com</p>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-phone"></i>
              <p>+14844760206</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-clock"></i>
              <p>Sunday - Friday: 9:00 AM - 5:00 PM</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-clock"></i>
              <p>Saturday : Closed</p>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-globe"></i>
              <p> <a target='blank' href='https://usaidahmed.netlify.app/'>usaidahmed.com</a> </p>
            </li>
          </ul>

          <form action="#" className="contact-form">
            <input type="text" placeholder="Your name" className="form-input" required />
            <input type="email" placeholder="Your email" className="form-input" required />
            <textarea placeholder="Your message" className="form-input" required></textarea>
            <button type="submit" className="button submit-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
