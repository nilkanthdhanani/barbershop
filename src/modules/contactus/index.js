import React, { useState } from 'react';
import './contactus.scss';
import contact from '../../assets/images/jpg/contact.jpg';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

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
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" required />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required></textarea>
                  <div className="contact-grid2-button">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
