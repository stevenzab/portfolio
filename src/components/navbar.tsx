import React from 'react';
import '../styles/navbar.css';
import { image } from '../constants';

function Navbar() {
  return (
    <div>
      <div className='app__navbar'>
        <div className='navbar__logo'>
          <img src={image.steven} alt='logo' />
        </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Contact', 'Work', 'Skills'].map((item) => (
          <li key={item}>
            <a href={item}>{item}</a>
          </li>
          ))}
      </ul>
      </div>
    </div>
  );
}

export default Navbar;