import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Elements/Button';
import { BannerContainer } from './CatalogBanner.styles';

const CatalogBanner:React.FC = () => {
  return (
    <BannerContainer>
      <div className="banner_custle-img" />
      <div className="banner_background" />
      <div className="banner_fairy-img" />
      <div className="banner_text-block">
        <h1>Authorize now</h1>
        <p className="banner_text-block__text">Authorize now and discover the fabulous world of books</p>
        <Link to="/login"><ButtonComponent text="Log In/ Sing Up" /></Link>
      </div>
    </BannerContainer>
  );
};

export default CatalogBanner;
