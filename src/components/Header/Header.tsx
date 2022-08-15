import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton/HeaderButton';
import {
  HeaderContainer,
  HeaderInput,
  InputIconStyle,
} from './Header.Styles';

const Header:React.FC = () => {
  return (
    <HeaderContainer>
        <Link to="/"><div className="header_logo" /></Link>
        <p className="header_text">Catalog</p>
        <div>
          <InputIconStyle />
          <HeaderInput placeholder="Search" />
        </div>
        <HeaderButton />
    </HeaderContainer>

  );
};

export default Header;
