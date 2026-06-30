
// Footer jsx
import './Footer.modules.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";





function Footer() {
  return (
    <div className="footer-container-start">

      <div className="footer-container">

        <div className="footer-col">
          <h3>Get In Touch</h3>
          <p>At Medix Hospital, your health is our priority. Contact us for expert medical care, personalized treatment, and compassionate support you can trust.
          </p>
          <div className='location-holder'>
            <FaMapMarkerAlt className='loc-icon' />
            <p>
              1254 Balaganj, Lucknow, Uttar Pradesh
            </p>
          </div>
          <div className="location-holder">
            <IoIosMail className='loc-icon' />
            <p>
              medixhospital@gmail.com
            </p>
          </div>
          <div className="location-holder">
            <IoCall className='loc-icon' />
            <p>+91 97345 67890</p>
          </div>

        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Home</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>About Us</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon"/>
            <p>Our Services</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Meet The Team</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Latest Blog</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Contact Us</p>
          </div>
        </div>

        <div className="footer-col">
          <h3>Popular Links</h3>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Home</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>About Us</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Our Services</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Meet The Team</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Latest Blog</p>
          </div>
          <div className="location-holder">
            <IoIosArrowForward id="arrow_icon" />
            <p>Contact Us</p>
          </div>
        </div>

        <div className="footer-col footer-col-newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-box">
            <input type="email"
              placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
          <div className="footer-col">
            <div className="follow-header">
              <h3 className="follow-us">Follow Us</h3>
              <div className="contact-icon-holder">
                <div className="fb-holder">
                  <FaFacebook className='contact-icon' />
                </div>
                <div className="fb-holder">
                  <AiFillTwitterCircle className='contact-icon' />
                </div>
                <div className="fb-holder">
                  <FaLinkedin className='contact-icon' />
                </div>
                <div className="fb-holder">
                  <AiFillInstagram className='contact-icon' />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="last-footer-holder">
        <div className="last-msg-holder-left">
          <span className="copy-icon">&copy;</span>
          <span className="mid-msg">Medix Hospital</span>
          <span className="last-msg">. All Rights Reserved.</span>
        </div>
        <div className="last-msg-holder-right">
          <span className="last-msg">Designed by</span>
          <span className="mid-msg">Medix Developer</span>
        </div>
      </div>

    </div>
  );
};

export default Footer;