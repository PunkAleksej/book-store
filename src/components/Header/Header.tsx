import React from 'react';
import {
  HeaderContainer,
  HeaderInput,
  InputIconStyle,
} from './HeaderStyles';

const Header:React.FC = () => {
  return (
    <HeaderContainer>
        <div className="header_logo" />
        <p className="header_text">Catalog</p>
        <div>
          <InputIconStyle />
          <HeaderInput placeholder="Search" />
        </div>
        <button className="header_button">Log In/ Sing Up</button>
    </HeaderContainer>

  );
}

export default Header;
