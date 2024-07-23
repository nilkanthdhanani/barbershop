import React, { useEffect, useRef } from 'react'
import './home.scss';
import heroBanner from '../../assets/images/jpg/heroBanner.jpg';
import location from '../../assets/images/png/location.png';
import phone from '../../assets/images/png/phone.png';
import hair from '../../assets/images/png/hair.png';
import scissors from '../../assets/images/png/scissors.png';
import beard from '../../assets/images/png/beard.png';
import trimmer from '../../assets/images/png/trimmer.png';
import haircut from '../../assets/images/jpg/haircut.jpg';
import studioYBG from '../../assets/images/png/studioYBG.png';
import studioGBG from '../../assets/images/png/studioGBG.png';
import studioMen from '../../assets/images/jpg/studioMen.jpg';
import consultYBG from '../../assets/images/png/consultYBG.png';
import consultGBG from '../../assets/images/png/consultGBG.png';
import consultMen from '../../assets/images/jpg/consultMen.jpg';
import serviceMen from '../../assets/images/jpg/serviceMen.jpg';
import servicePng1 from '../../assets/images/png/servicePng1.png';
import servicePng2 from '../../assets/images/png/servicePng2.png';
import servicePng3 from '../../assets/images/png/servicePng3.png';
import servicePng4 from '../../assets/images/png/servicePng4.png';
import cutting1 from '../../assets/images/jpg/cutting1.jpg';
import cutting2 from '../../assets/images/jpg/cutting2.jpg';
import cutting3 from '../../assets/images/jpg/cutting3.jpg';
import cutting4 from '../../assets/images/jpg/cutting4.jpg';
import cutting5 from '../../assets/images/jpg/cutting5.jpg';
import cutting6 from '../../assets/images/jpg/cutting6.jpg';
import slider1 from '../../assets/images/jpg/slider1.jpg';
import slider2 from '../../assets/images/jpg/slider2.jpg';
import slider3 from '../../assets/images/jpg/slider3.jpg';
import slider4 from '../../assets/images/jpg/slider4.jpg';
import slider5 from '../../assets/images/jpg/slider5.jpg';
import slider6 from '../../assets/images/jpg/slider6.jpg';
import qutes from '../../assets/images/png/qutes.png';
import { GiCheckMark } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hero-banner" ref={topRef}>
        <div className="container">
          <div className="hero-banner-grid">
            <div className="hero-banner-grid1" data-aos="fade-right" data-aos-duration="5000">
              <div className="hbg1">
                <span>WELCOME TO</span>
                <h1>Barbershop<br />
                  in Manhattan<br />
                  NEW YORK</h1>
                <div className="hbg1-location">
                  <img src={location} alt="location" />
                  <p>254 W 27ST ST, NEW YORK, NY 10011</p>
                </div>
                <div className="hbg1-location">
                  <img src={phone} alt="phone" />
                  <p>(212) 123-4567</p>
                </div>
                <div className="hbg1-location">
                  <img src={location} alt="location" />
                  <p>254 W 27ST ST, NEW YORK, NY 10011</p>
                </div>
                <div className="hbg1-location">
                  <img src={phone} alt="phone" />
                  <p>(212) 123-4567</p>
                </div>
              </div>
              <div className="hbg1-button">
                <button>BOOK ONLINE</button>
              </div>
            </div>
            <div className="hero-banner-grid2" data-aos="zoom-in-left" data-aos-duration="2000">
              <img src={heroBanner} alt="heroBanner" />
            </div>
          </div>
        </div>
      </div>

      <div className="option">
        <div className="container">
          <div className="option-grid">
            <div className="option-grid-box">
              <div className="ogb-img">
                <img src={scissors} alt="scissors" />
              </div>
              <div className="ogb-text">
                <h2>Regular Haircut</h2>
              </div>
              <div className="ogb-button">
                <button>MORE</button>
              </div>
            </div>
            <div className="option-grid-box">
              <div className="ogb-img">
                <img src={beard} alt="beard" />
              </div>
              <div className="ogb-text">
                <h2>Regular Haircut</h2>
              </div>
              <div className="ogb-button">
                <button>MORE</button>
              </div>
            </div>
            <div className="option-grid-box">
              <div className="ogb-img">
                <img src={trimmer} alt="trimmer" />
              </div>
              <div className="ogb-text">
                <h2>Regular Haircut</h2>
              </div>
              <div className="ogb-button">
                <button>MORE</button>
              </div>
            </div>
            <div className="option-grid-box">
              <div className="ogb-img">
                <img src={hair} alt="hair" />
              </div>
              <div className="ogb-text">
                <h2>Regular Haircut</h2>
              </div>
              <div className="ogb-button">
                <button>MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <img src={haircut} alt="haircut" />
        <div className="wcu-content">
          <div className="container">
            <div className="wcu-content-grid">
              <div className="wcu-content-grid1" data-aos="fade-right" data-aos-duration="1000">
                <h3>WORKING HOURSE</h3>
                <div className="wcu-content-grid1-list">
                  <span>SUNDAY 10 AM – 5 PM</span>
                  <span>MONDAY 9 AM – 7PM</span>
                  <span>TUESDAY 8AM – 8PM</span>
                  <span>WEDNESDAY 8AM – 8PM</span>
                  <span>THURSDAY 8AM – 8PM</span>
                  <span>FRIDAY 8AM – 7PM</span>
                  <span>SATURDAY 9AM – 6PM</span>
                </div>
                <div className="hbg1-button">
                  <button>BOOK ONLINE</button>
                </div>
              </div>
              <div className="wcu-content-grid2" data-aos="fade-left" data-aos-duration="1000">
                <h2>Why choose us?</h2>
                <p>In addition, there 5 more reasons why men prefer Manhattan Barbershop N.Y.C:</p>
                <div className="wcu-content-grid2-list">
                  <GiCheckMark className='check-png' />
                  <span>Always welcoming environment</span>
                </div>
                <div className="wcu-content-grid2-list">
                  <GiCheckMark className='check-png' />
                  <span>Our masters focus on the quality</span>
                </div>
                <div className="wcu-content-grid2-list">
                  <GiCheckMark className='check-png' />
                  <span>We value both the time and the money of our clients</span>
                </div>
                <div className="wcu-content-grid2-list">
                  <GiCheckMark className='check-png' />
                  <span>We work only with high-quality, hypoallergenic premium products</span>
                </div>
                <div className="wcu-content-grid2-list">
                  <GiCheckMark className='check-png' />
                  <span>All surfaces and tools are cleaned, disinfected before and after using</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing">
        <div className="container">
          <div className="pricing-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Pricing</h2>
          </div>
          <div className="pricing-head-grid">
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Regular haircut</h3>
                <span>$34+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Haircut + Royal Shave</h3>
                <span>$60+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Beard Trim Machine</h3>
                <span>$23+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Haircut and Facial</h3>
                <span>$50+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Royal Shave</h3>
                <span>$35+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Haircut + Beard Trim</h3>
                <span>$65+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Beard + Facial</h3>
                <span>$55+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
            <div className="pricing-head-grid1-box">
              <div className="phgb-flex">
                <h3>Men’s Facial </h3>
                <span>$25+</span>
              </div>
              <div className="phgb-flex-line"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="studio">
        <div className="container">
          <div className="studio-div">
            <img src={studioGBG} alt="studioGBG" data-aos="fade-right" data-aos-duration="1000" />
            <div className="studio-div-yallow">
              <img src={studioYBG} alt="studioYBG" data-aos="fade-left" data-aos-duration="2000" />
            </div>
            <div className="studio-div-men">
              <img src={studioMen} alt="studioMen" data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0" />
            </div>
            <div className="studio-div-content" data-aos="zoom-in-left" data-aos-duration="1000">
              <h2>Welcome to the upscale barber studio</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="hbg1-button">
                <button>BOOK ONLINE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="consult">
        <div className="container">
          <div className="consult-div">
            <img src={consultYBG} alt="consultYBG" data-aos="fade-right" data-aos-duration="1000" />
            <div className="consult-div-yallow">
              <img src={consultGBG} alt="consultGBG" data-aos="fade-left" data-aos-duration="2000" />
            </div>
            <div className="consult-div-men">
              <img src={consultMen} alt="consultMen" data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0" />
            </div>
            <div className="consult-div-content" data-aos="zoom-in-left" data-aos-duration="1000">
              <h2>Get in touch with our expert barbers for a FREE one-on-one consultation</h2>
              <div className="hbg1-button">
                <button>BOOK ONLINE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="container">
          <div className="service-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Barbershop Services</h2>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          </div>
          <div className="service-grid">
            <div className="service-grid1">
              <img src={serviceMen} alt="serviceMen" />
            </div>
            <div className="service-grid2">
              <div className="service-grid1-box">
                <div>
                  <div className="service-grid1-box-img">
                    <img src={servicePng1} alt="servicePng1" />
                  </div>
                  <h3>Hair Cut</h3>
                </div>
              </div>
              <div className="service-grid1-box">
                <div>
                  <div className="service-grid1-box-img">
                    <img src={servicePng2} alt="servicePng2" />
                  </div>
                  <h3>Shaving</h3>
                </div>
              </div>
              <div className="service-grid1-box">
                <div>
                  <div className="service-grid1-box-img">
                    <img src={servicePng3} alt="servicePng3" />
                  </div>
                  <h3>Beard Trim</h3>
                </div>
              </div>
              <div className="service-grid1-box">
                <div>
                  <div className="service-grid1-box-img">
                    <img src={servicePng4} alt="servicePng4" />
                  </div>
                  <h3>Kids Haircut</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="service-head2" data-aos="fade-up" data-aos-duration="1000">
            <h3>Experience the Best Haircut & Shave Services</h3>
          </div>
        </div>
      </div>

      <div className="margin">
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
        <div className="container">
          <div className="margin-text">
            <h2 data-aos="fade-up" data-aos-duration="1000">Testimonials</h2>
            <div className="margin-text-pera" data-aos="fade-up" data-aos-duration="1000">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="margin-text-slider">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Celia Almeda</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider1} alt="slider1" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Frank Kinney</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider2} alt="slider2" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Nick Jhonson</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider3} alt="slider3" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Smith Murphy</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider4} alt="slider4" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Lara Walker</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider5} alt="slider5" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                  <div className='slider-main-div'>
                    <div className="slider-box">
                      <div className="slider-box1">
                        <div className="slider-flex1">
                          <img src={qutes} alt="qutes" />
                          <h3>Jhones O'Kelly</h3>
                        </div>
                        <div className="slider-flex2">
                          <img src={slider6} alt="slider6" />
                        </div>
                      </div>
                      <div className="slider-box2">
                        <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
