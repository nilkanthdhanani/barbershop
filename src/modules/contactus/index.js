import React from 'react'
import './contactus.scss';
import contact from '../../assets/images/jpg/contact.jpg';

export default function Contactus() {
  return (
    <div>
      <div className="contact">
        <div className="container2">
          <div className="contact-grid">
            <div className="contact-grid1">
              <img src={contact} alt="contact" />
            </div>
            <div className="contact-grid2">
              <div className="contact-grid2-content">
                <h2 data-aos="fade-up" data-aos-duration="1000">Contact Us!</h2>
                <input type="text" placeholder='Enter your Name'/>
                <input type="email" placeholder='Enter your Email'/>
                <textarea placeholder='Enter your message'></textarea>
                <div className="contact-grid2-button">
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
