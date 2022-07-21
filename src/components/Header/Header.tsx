import React from 'react';
import {  
  HeaderButton, 
  HeaderContainer, 
  HeaderInput, 
  HeaderLogo, 
  HeaderText 
} from './HeaderStyles';



function Header() {
  return (
    <HeaderContainer>
        <HeaderLogo></HeaderLogo>
        <HeaderText>Catalog</HeaderText>
        <HeaderInput placeholder='Search'></HeaderInput>
        <HeaderButton>Log In/ Sing Up</HeaderButton>
    </HeaderContainer>

  );
}

export default Header;
