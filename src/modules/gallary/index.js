import React from 'react'
import './gallary.scss';
import haircut from '../../assets/images/jpg/haircut.jpg';
import gallary1 from '../../assets/images/jpg/gallary1.jpg';
import gallary2 from '../../assets/images/jpg/gallary2.jpg';
import gallary3 from '../../assets/images/jpg/gallary3.jpg';
import gallary4 from '../../assets/images/jpg/gallary4.jpg';
import cutting1 from '../../assets/images/jpg/cutting1.jpg';
import cutting2 from '../../assets/images/jpg/cutting2.jpg';
import cutting3 from '../../assets/images/jpg/cutting3.jpg';
import cutting4 from '../../assets/images/jpg/cutting4.jpg';
import cutting5 from '../../assets/images/jpg/cutting5.jpg';
import cutting6 from '../../assets/images/jpg/cutting6.jpg';

export default function Gallary() {
  return (
    <div>

      <div className="gallary">
        <img src={haircut} alt="haircut" />
        <div className="gallary-content">
          <div className="container">
            <div className="gallary-head">
              <h2>Our Services</h2>
            </div>
            <div className="gallary-grid">
              <div className="gallary-grid-box">
                <img src={gallary1} alt="gallary1" />
                <div className="gallary-grid-abso">
                  <h3>Haircuts</h3>
                </div>
              </div>
              <div className="gallary-grid-box">
                <img src={gallary2} alt="gallary2" />
                <div className="gallary-grid-abso">
                  <h3>Beard</h3>
                </div>
              </div>
              <div className="gallary-grid-box">
                <img src={gallary3} alt="gallary3" />
                <div className="gallary-grid-abso">
                  <h3>Shaving</h3>
                </div>
              </div>
              <div className="gallary-grid-box">
                <img src={gallary4} alt="gallary4" />
                <div className="gallary-grid-abso">
                  <h3>Razor Blade</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="container">
          <div className="experience-head">
            <h2>Experience the Best Haircut & Shave Services</h2>
          </div>
        </div>
      </div>

      <div className="margin-gallary">
        <div className="margin-div">
          <div className="container">
            <div className="margin-grid">
              <div className="margin-grid-img">
                <img src={cutting1} alt="cutting1" />
              </div>
              <div className="margin-grid-img">
                <img src={cutting2} alt="cutting2" />
              </div>
              <div className="margin-grid-img">
                <img src={cutting3} alt="cutting3" />
              </div>
              <div className="margin-grid-img">
                <img src={cutting4} alt="cutting4" />
              </div>
              <div className="margin-grid-img">
                <img src={cutting5} alt="cutting5" />
              </div>
              <div className="margin-grid-img">
                <img src={cutting6} alt="cutting6" />
              </div>
            </div>
          </div>
        </div>
        <div className="margin-price">
          <div className="container">
            <div className="pricing-head">
              <h2>Our Pricing</h2>
            </div>
            <div className="pricing-head-grid">
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Regular haircut</h3>
                  <span>$34+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Haircut + Royal Shave</h3>
                  <span>$60+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Beard Trim Machine</h3>
                  <span>$23+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Haircut and Facial</h3>
                  <span>$50+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Royal Shave</h3>
                  <span>$35+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Haircut + Beard Trim</h3>
                  <span>$65+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Beard + Facial</h3>
                  <span>$55+</span>
                </div>
              </div>
              <div className="pricing-head-grid1-box">
                <div className="phgb-flex">
                  <h3>Men’s Facial </h3>
                  <span>$25+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
