import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='container'>
      <div className='footer'>
        <div className='footer_info'>
          <div className='footer_info_logo'></div>
          <p className='footer_text'>tranthuy.nute@gmail.com</p>
          <p className='footer_text'>(480) 555-0103</p>
        </div>
        <div className='footer_menu'>
          <p className='footer_text'>Catalog</p>
          <p className='footer_text'>My Account</p>
          <p className='footer_text'>Cart</p>
          <p className='footer_text'>Home Page</p>
        </div>
        <div className='footer_map'>
          <p className='footer_text'>6391 Elgin St. Celina, Delaware 10299</p>
          <div className='footer_map_img'></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
