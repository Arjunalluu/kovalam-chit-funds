import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiChartBar, HiCurrencyRupee, HiClock } from 'react-icons/hi';
import './Services.scss';

const Services = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  
  const schemes = {
    monthly: [
      { name: "Silver Plan", amount: "₹25,000", duration: "15 Months", returns: "9.2%" },
      { name: "Gold Plan", amount: "₹50,000", duration: "20 Months", returns: "9.8%" },
      { name: "Platinum Plan", amount: "₹1,00,000", duration: "25 Months", returns: "10.5%" }
    ],
    quarterly: [
      { name: "Business Starter", amount: "₹2,50,000", duration: "30 Months", returns: "10.8%" },
      { name: "Business Pro", amount: "₹5,00,000", duration: "40 Months", returns: "11.2%" }
    ],
    special: [
      { name: "Festival Bonanza", amount: "₹10,000", duration: "12 Months", returns: "8.5%", featured: true },
      { name: "New Year Special", amount: "₹75,000", duration: "18 Months", returns: "10.2%", featured: true }
    ]
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Investment Schemes
        </motion.h2>
        
        <motion.div 
          className="tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            className={`tab ${activeTab === 'monthly' ? 'active' : ''}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly Plans
          </button>
          <button 
            className={`tab ${activeTab === 'quarterly' ? 'active' : ''}`}
            onClick={() => setActiveTab('quarterly')}
          >
            Quarterly Plans
          </button>
          <button 
            className={`tab ${activeTab === 'special' ? 'active' : ''}`}
            onClick={() => setActiveTab('special')}
          >
            Special Schemes
          </button>
        </motion.div>
        
        <motion.div 
          className="schemes-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {schemes[activeTab].map((scheme, index) => (
            <motion.div 
              key={index}
              className={`glass-card scheme-card ${scheme.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {scheme.featured && <div className="featured-badge">Limited Time Offer</div>}
              
              <h3>{scheme.name}</h3>
              
              <div className="scheme-details">
                <div className="detail-item">
                  <div className="icon">
                    <HiCurrencyRupee />
                  </div>
                  <div>
                    <div className="label">Chit Amount</div>
                    <div className="value">{scheme.amount}</div>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="icon">
                    <HiClock />
                  </div>
                  <div>
                    <div className="label">Duration</div>
                    <div className="value">{scheme.duration}</div>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="icon">
                    <HiChartBar />
                  </div>
                  <div>
                    <div className="label">Returns</div>
                    <div className="value">{scheme.returns}</div>
                  </div>
                </div>
              </div>
              
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Invest Now <HiArrowRight className="arrow" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="disclaimer glass-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>
            * Returns are indicative and subject to market conditions. Past performance is not indicative of future results. 
            All investments carry risk. Please read the scheme documents carefully before investing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;