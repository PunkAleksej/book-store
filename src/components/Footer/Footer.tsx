import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  Footerf,
  FooterInfoLogo,
  FooterText,
  FooterMenu,
  FooterMapImg,
} from './FooterStyles';

function Footer() {
  return (
    <FooterContainer>
      <Footerf>
        <div>
          <FooterInfoLogo />
          <FooterText>tranthuy.nute@gmail.com</FooterText>
          <FooterText>(480) 555-0103</FooterText>
        </div>
        <FooterMenu>
          <Link to="/"><FooterText>Catalog</FooterText></Link>
          <Link to="/profile"><FooterText>My Account</FooterText></Link>
          <Link to="/"><FooterText>Cart</FooterText></Link>
          <Link to="/"><FooterText>Home Page</FooterText></Link>
        </FooterMenu>
        <div>
          <FooterText>6391 Elgin St. Celina, Delaware 10299</FooterText>
          <FooterMapImg />
        </div>
      </Footerf>
    </FooterContainer>
  );
}

export default Footer;
