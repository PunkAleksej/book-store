import React from 'react';
import { BannerContainer } from './MainBannerStyles';

const Banner:React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner_info">
        <h1 className="banner_info_title">Build your library with us</h1>
        <p className="banner_info_text">Buy two books and <br /> get one for free</p>
        <button className="banner_info_button">Choose a book</button>
      </div>
      <div className="banner_img" />
    </BannerContainer>
  );
}

export default Banner;
