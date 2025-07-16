import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa recusandae adipisci delectus aliquid numquam ut aperiam vel quibusdam porro ullam, magnam eligendi exercitationem ipsa nostrum. Totam laborum neque molestias nulla?
            </p>
            <ul className="social-icon">
              <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            </ul>
          </div>

          <div className="sec useful-links">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="sec shop">
            <h2>Shop</h2>
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Espresso</a></li>
              <li><a href="#">Cappuccino</a></li>
              <li><a href="#">Latte</a></li>
              <li><a href="#">Americano</a></li>
            </ul>
          </div>

          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span><i className='bx bxs-map'></i></span>
                <span>288 Bishopsgate,<br />London, EC2M 4QP</span>
              </li>
              <li className="contact-span">
                <span><i className='bx bxs-phone'></i></span>
                <p><a href="tel:+12345677890">+1 234 567 7890</a></p>
              </li>
              <li className="contact-span">
                <span><i className='bx bxs-envelope'></i></span>
                <p><a href="mailto:info@example.com">info@example.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <p>Copyright© 2024 CoffeeShop | All Rights Reserved | Created by Usaid Ahmed</p>
      </div>
    </>
  );
};

export default Footer;
