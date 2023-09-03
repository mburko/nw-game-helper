import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home_page/HomePage';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';

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
        <a href='https://borowka.tech'>borowka.tech</a>
      </div>
    </Router>
  );
}


export default App;
