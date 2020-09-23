import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <ul id="links">
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
      <li><NavLink to="/my-profile" activeClassName="active">My Profile</NavLink></li>
      <li><NavLink to="/about-us" activeClassName="active">About Us</NavLink></li>
    </ul>
  </header>
);

export default Header;
