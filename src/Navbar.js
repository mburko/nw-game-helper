import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">Lion's Kingdom</NavLink>
      </div>
      <div className="menu">
        <NavLink to="/" activeClassName="active">Gold Farm Checklist</NavLink>
        <NavLink to="/page1" activeClassName="active">Page 1</NavLink>
        <NavLink to="/page2" activeClassName="active">Page 2</NavLink>
        {/* Add more nav links as needed */}
      </div>
    </div>
  );
};

export default Navbar;
