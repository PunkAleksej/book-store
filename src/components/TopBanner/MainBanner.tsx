import React from 'react';
import ButtonComponent from '../Elements/Button';
import { BannerContainer } from './MainBanner.styles';

const Banner:React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner_info">
        <h1 className="banner_info_title">Build your library with us</h1>
        <p className="banner_info_text">Buy two books and <br /> get one for free</p>
        <ButtonComponent
        text="Choose a book"
        />
      </div>
      <div className="banner_img" />
    </BannerContainer>
  );
};

export default Banner;
