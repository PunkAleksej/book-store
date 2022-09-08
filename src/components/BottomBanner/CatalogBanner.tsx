import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Elements/Button';
import { BannerContainer } from './CatalogBanner.styles';
import custle from '../../assets/images/catalogBanner1.png';
import fairy from '../../assets/images/catalogBanner2.png';

const CatalogBanner:React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner_background">
        <div className="banner_custle_container">
          <img className="banner_custle_img" src={custle} />
        </div>
        <div className="banner_fairy_container">
          <img className="banner_fairy_img" src={fairy} />
        </div>
        <div className="banner_text-block">
          <h2 className="banner_text-block_title">Authorize now</h2>
          <p className="banner_text-block__text">Authorize now and discover the fabulous world of books</p>
          <Link to="/login"><ButtonComponent text="Log In/ Sing Up" /></Link>
        </div>
      </div>
    </BannerContainer>
  );
};

export default CatalogBanner;
