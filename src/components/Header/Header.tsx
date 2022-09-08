import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton/HeaderButton';
import {
  HeaderContainer,
  HeaderInput,
  InputIconStyle,
} from './Header.styles';

const Header:React.FC = () => {
  return (
    <HeaderContainer>
        <div className="header_container">
          <Link to="/"><div className="header_logo" /></Link>
          <p className="header_text">Catalog</p>
        </div>
        <div className="header_input">
          <InputIconStyle />
          <HeaderInput placeholder="Search" />
        </div>
        <div className="header_buttons">
          <HeaderButton />
        </div>
    </HeaderContainer>

  );
};

export default Header;
