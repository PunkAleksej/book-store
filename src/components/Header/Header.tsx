import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className='header_container'>
      <div className='header'>
        <div className='header_logo'></div>
        <p className='header_text'>Catalog</p>
        <input placeholder='Search' className='header_input'></input>
        <button className='header_button'>Log In/ Sing Up</button>
      </div>
    </div>

  );
}

export default Header;
