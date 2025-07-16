import React from 'react'
import Menu1 from '../images/Menu-1.png';
import Menu2 from '../images/Menu-2.png';
import Menu3 from '../images/Menu-3.png';
import Menu4 from '../images/Menu-4.png';
import Menu5 from '../images/Menu-5.png';
import Menu6 from '../images/Menu-6.png';
const menu = () => {
  return (
    <div>
          <section className="menu-section" id="menu">
        <h2 className="section-title">Our Menu</h2>
        <div className="section-content">
          <ul className="menu-list">
            <li className="menu-item">
              <img src={Menu1} alt="Espresso" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Espresso</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>

            <li className="menu-item">
              <img src={Menu2} alt="Cappuccino" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Cappuccino</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>

            <li className="menu-item">
              <img src={Menu3} alt="Latte" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Latte</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>

            <li className="menu-item">
              <img src={Menu4} alt="Americano" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Americano</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>

            <li className="menu-item">
              <img src={Menu5} alt="Mocha" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Mocha</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>

            <li className="menu-item">
              <img src={Menu6} alt="Macchiato" className="menu-image" />
              <div className="menu-details">
                <h3 className="name">Macchiato</h3>
                <p className="text">$5.00</p>
              </div>
              <div className="buttons">
                <a href="#" className="button order-now">Order Now</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default menu