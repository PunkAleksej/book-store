import React from 'react';
import ButtonComponent from '../elements/Button';
import { BannerContainer, ImgContainer } from './MainBanner.styles';
import book from '../../assets/images/empty-cart.png';
import BannerImg from '../../assets/images/banner1.png';

const Banner:React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner_background">
        <div className="banner_book">
          <img className="banner_book_img" src={book} />
        </div>
        <div className="banner_info">
          <h1 className="banner_info_title">Build your library with us</h1>
          <p className="banner_info_text">Buy two books and <br /> get one for free</p>
          <div className="banner_info_button">
            <ButtonComponent
            text="Choose a book"
            />
          </div>
        </div>
        <ImgContainer>
          <img className="top-banner_img" src={BannerImg} />
        </ImgContainer>
      </div>
    </BannerContainer>
  );
};

export default Banner;
