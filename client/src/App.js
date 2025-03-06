// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/login';
import Verify from './components/verify/verify';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/verify" element={<Verify />} />
          {/* Redirect or default route */}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;