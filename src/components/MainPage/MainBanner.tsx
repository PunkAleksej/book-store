import React from 'react';
import './mainBannerStyle.css';

function Banner() {
  return (
    <div className='banner'>
      <div className='banner_info'>
        <h1 className='banner_info_title'>Build your library with us</h1>
        <p className='banner_info_text'>Buy two books and <br></br> get one for free</p>
        <button className='banner_info_button'>Choose a book</button>
      </div>
      <div className='banner_img'></div>
    </div>
  );
}

export default Banner;