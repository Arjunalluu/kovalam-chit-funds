import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Connect With Our Financial Advisors</h3>
            <p>
              Have questions about our investment plans? Our expert team is ready to 
              guide you to the best financial solutions tailored to your needs.
            </p>
            
            <div className="info-cards">
              <div className="glass-card info-card">
                <div className="icon">
                  <HiLocationMarker />
                </div>
                <div>
                  <h4>Corporate Office</h4>
                  <p>No. 123, Finance Street, Chennai, Tamil Nadu - 600001</p>
                </div>
              </div>
              
              <div className="glass-card info-card">
                <div className="icon">
                  <HiPhone />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="glass-card info-card">
                <div className="icon">
                  <HiMail />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>invest@kovalamchits.com</p>
                </div>
              </div>
              
              <div className="glass-card info-card">
                <div className="icon">
                  <HiClock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon-Sat: 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-container glass-card">
              <h3>Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;