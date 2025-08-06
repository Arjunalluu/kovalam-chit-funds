import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Financial Legacy
        </motion.h2>
        
        <div className="content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>30+ Years of Trusted Financial Services</h3>
            <p>
              Founded in 1995, Kovalam Chit Funds has been a cornerstone of financial security 
              for over 50,000 customers across South India. Our commitment to transparency and 
              customer-centric services has made us the fastest growing chit fund company in the region.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">50,000+</div>
                <div className="stat-label">Satisfied Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">₹500Cr+</div>
                <div className="stat-label">Funds Disbursed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">98%</div>
                <div className="stat-label">Claim Settlement</div>
              </div>
            </div>
            
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Our Story
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="main-visual glass-card">
              <div className="timeline">
                <div className="timeline-marker">1995</div>
                <div className="timeline-line"></div>
                <div className="timeline-marker">2025</div>
              </div>
            </div>
            
            <div className="floating-cards">
              <motion.div 
                className="glass-card card-1"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <h4>ISO 9001 Certified</h4>
                <p>Quality Management System</p>
              </motion.div>
              
              <motion.div 
                className="glass-card card-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              >
                <h4>RBI Registered</h4>
                <p>Chit Fund Act 1982</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;