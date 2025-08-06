import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Calculator.scss';

const Calculator = () => {
  const [amount, setAmount] = useState(100000);
  const [duration, setDuration] = useState(12);
  const [result, setResult] = useState(null);

  const calculateReturns = () => {
    // Simple calculation for demonstration
    const monthlyInvestment = amount / duration;
    const totalReturns = amount * 1.2; // 20% returns for demo
    const profit = totalReturns - amount;
    
    setResult({
      monthlyInvestment,
      totalInvestment: amount,
      totalReturns,
      profit
    });
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Chit Fund Calculator
        </motion.h2>
        
        <div className="calculator-content">
          <motion.div 
            className="calculator-form glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <label>Chit Amount (₹)</label>
              <input 
                type="range" 
                min="10000" 
                max="1000000" 
                step="10000"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
              <div className="value-display">₹{amount.toLocaleString()}</div>
            </div>
            
            <div className="form-group">
              <label>Duration (Months)</label>
              <input 
                type="range" 
                min="6" 
                max="60" 
                step="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
              />
              <div className="value-display">{duration} Months</div>
            </div>
            
            <motion.button 
              className="btn btn-primary"
              onClick={calculateReturns}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate Returns
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="calculator-results glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Your Investment Plan</h3>
            
            {result ? (
              <div className="results-container">
                <div className="result-item">
                  <div className="label">Monthly Payment</div>
                  <div className="value">₹{result.monthlyInvestment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
                
                <div className="result-item">
                  <div className="label">Total Investment</div>
                  <div className="value">₹{result.totalInvestment.toLocaleString()}</div>
                </div>
                
                <div className="result-item">
                  <div className="label">Estimated Returns</div>
                  <div className="value">₹{result.totalReturns.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
                
                <div className="result-item highlight">
                  <div className="label">Profit</div>
                  <div className="value">₹{result.profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
            ) : (
              <div className="placeholder">
                Enter values and click "Calculate Returns" to see your potential earnings
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;