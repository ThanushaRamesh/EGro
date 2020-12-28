import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebase.utils';

import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown'

import { connect } from 'react-redux';

import logo from '../Images/Logo.JPG';

import '../Styles/header.scss';

const Header = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
       <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
