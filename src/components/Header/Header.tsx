import React from 'react';
import HeaderButton from './HeaderButton/HeaderButton';
import {
  HeaderContainer,
  HeaderInput,
  InputIconStyle,
} from './HeaderStyles';

const Header:React.FC = () => {

  return (
    <HeaderContainer>
        <a href="/"><div className="header_logo" /></a>
        <p className="header_text">Catalog</p>
        <div>
          <InputIconStyle />
          <HeaderInput placeholder="Search" />
        </div>
        <HeaderButton></HeaderButton>
    </HeaderContainer>

  );
}

export default Header;
