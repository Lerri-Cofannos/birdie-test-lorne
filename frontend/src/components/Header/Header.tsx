import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <img
        className='Header-logo'
        src='https://assets.website-files.com/5d80c03f1edd7bd68fcdb623/5d80c151ddf52828d3cff080_Birdie%20-%20Logo%20-%20Blue%20%2B%20Green.svg'
        alt='logo'
      />
      <p className='Header-text'>Test web application</p>
    </div>
  );
}
