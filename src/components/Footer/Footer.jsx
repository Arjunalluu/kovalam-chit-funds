import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiLocationMarker, 
  HiPhone, 
  HiMail,
  HiOutlineArrowUp
} from 'react-icons/hi';
import './Footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">
              <div className="logo-main">Kovalam<span>Chits</span></div>
              <div className="logo-sub">Financial Trust Since 1995</div>
            </div>
            
            <p className="description">
              Providing secure and reliable chit fund services with transparency 
              and integrity for over three decades.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <HiLocationMarker className="icon" />
                <span>No. 123, Finance Street, Chennai, TN - 600001</span>
              </div>
              <div className="contact-item">
                <HiPhone className="icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <HiMail className="icon" />
                <span>invest@kovalamchits.com</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="links-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Investment Plans</a>
              <a href="#calculator">Calculator</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Kovalam Chit Funds Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
      
      <motion.button 
        className="scroll-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <HiOutlineArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;