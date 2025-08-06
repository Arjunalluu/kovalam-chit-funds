import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    if (calculator) {
      window.scrollTo({
        top: calculator.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title">
              Secure Your Future with <span>Smart Investments</span>
            </h1>
            
            <p className="subtitle">
              Trusted Chit Fund Solutions with 30+ Years of Financial Excellence 
              and ₹500+ Crores Disbursed to 50,000+ Customers
            </p>
            
            <div className="cta-container">
              <motion.button 
                className="primary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Investing
              </motion.button>
              
              <motion.button 
                className="secondary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCalculator}
              >
                Calculate Returns
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card main-card">
              <div className="investment-chart"></div>
            </div>
            
            <div className="stats-container">
              <motion.div 
                className="glass-card stats-card"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              >
                <h3>9.8%</h3>
                <p>Avg. Annual Returns</p>
              </motion.div>
              
              <motion.div 
                className="glass-card stats-card"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <h3>₹500Cr+</h3>
                <p>Funds Disbursed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;