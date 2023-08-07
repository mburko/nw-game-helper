import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
