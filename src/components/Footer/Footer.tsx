import React from 'react';
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
          <FooterText>Catalog</FooterText>
          <FooterText>My Account</FooterText>
          <FooterText>Cart</FooterText>
          <FooterText>Home Page</FooterText>
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
