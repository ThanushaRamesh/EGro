import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Images/Logo.JPG';

import '../Styles/header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    <img className='logo' src={logo} alt="Logo" />
     {/*  <Logo className='logo' /> */}
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
