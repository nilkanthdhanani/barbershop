import React from 'react'
import './ourteam.scss';
import ourteamHB from '../../assets/images/jpg/ourteamHB.jpg';
import team1 from '../../assets/images/jpg/team1.jpg';
import team2 from '../../assets/images/jpg/team2.jpg';
import team3 from '../../assets/images/jpg/team3.jpg';
import team4 from '../../assets/images/jpg/team4.jpg';
import team5 from '../../assets/images/jpg/team5.jpg';
import team6 from '../../assets/images/jpg/team6.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Ourteam() {
  return (
    <div>
      <div className="brbers">
        <div className="brbers-grid">
          <div className="brbers-grid1" data-aos="fade-right" data-aos-duration="5000">
            <div className="bg1">
              <span>ABOUT US</span>
              <h1>Licensed <br />
                Professional <br />
                Barbers</h1>
              <div className="hbg1-button">
                <button>BOOK AN APPOINTMENT</button>
              </div>
            </div>
          </div>
          <div className="brbers-grid2" data-aos="zoom-in-left" data-aos-duration="2000">
            <img src={ourteamHB} alt="ourteamHB" />
          </div>
        </div>
      </div>

      <div className="team">
        <div className="container">
          <div className="team-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Barbers</h2>
          </div>
          <div className="team-grid">
            <div className="team-grid-div">
              <img src={team1} alt="team1" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>MARK BROWN</h3>
                  <span>Owner</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-grid-div">
              <img src={team2} alt="team2" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>DAVID VILLEGAS</h3>
                  <span>Barber</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-grid-div">
              <img src={team3} alt="team3" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>CLAYTON LANE</h3>
                  <span>Barber</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-grid-div">
              <img src={team4} alt="team4" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>ROBERT FIFIELD</h3>
                  <span>Barber</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-grid-div">
              <img src={team5} alt="team5" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>DAN SPINELLO</h3>
                  <span>Barber</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-grid-div">
              <img src={team6} alt="team6" />
              <div className="team-grid-content">
                <div className="tgc-box">
                  <h3>DWIGHT ATKINS</h3>
                  <span>Stylist</span>
                  <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                  <div className="tgc-box-media">
                    <FaFacebookF className='media-img' />
                    <FaXTwitter className='media-img' />
                    <FaInstagram className='media-img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="groom">
        <div className="groom-div">
          <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="1000">Full service barber shop & men’s grooming studio</h2>
            <div className="groom-div-pera" data-aos="fade-up" data-aos-duration="1000">
              <p>Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.</p>
            </div>
            <div className="groom-div-button">
              <button data-aos="fade-right" data-aos-duration="1000">VIEW PRICING</button>
              <button data-aos="fade-left" data-aos-duration="1000">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
