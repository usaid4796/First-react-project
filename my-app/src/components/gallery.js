import React from 'react';

import Gallery1 from '../images/Gallery-1.png';
import Gallery2 from '../images/Gallery-2.png';
import Gallery3 from '../images/Gallery-3.png';
import Gallery4 from '../images/Gallery-4.png';
import Gallery5 from '../images/Gallery-5.png';
import Gallery6 from '../images/Gallery-6.png';

const Gallery = () => {
  return (
    <div>
      <section className="gallery-section" id="gallery">
        <h2 className="section-title">Gallery</h2>
        <div className="section-content">
          <ul className="gallery-list">
            <li className="gallery-item">
              <img src={Gallery1} alt="Gallery Image" className="gallery-image" />
            </li>
            <li className="gallery-item">
              <img src={Gallery2} alt="Gallery Image" className="gallery-image" />
            </li>
            <li className="gallery-item">
              <img src={Gallery3} alt="Gallery Image" className="gallery-image" />
            </li>
            <li className="gallery-item">
              <img src={Gallery4} alt="Gallery Image" className="gallery-image" />
            </li>
            <li className="gallery-item">
              <img src={Gallery5} alt="Gallery Image" className="gallery-image" />
            </li>
            <li className="gallery-item">
              <img src={Gallery6} alt="Gallery Image" className="gallery-image" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
