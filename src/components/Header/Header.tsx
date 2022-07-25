import React from 'react';
import {  
  HeaderContainer, 
  HeaderInput, 
  InputIconStyle
} from './HeaderStyles';



function Header() {
  return (
    <HeaderContainer>
        <div className='header_logo'></div>
        <p className='header_text'>Catalog</p>
        <div>
          <InputIconStyle></InputIconStyle>          
          <HeaderInput placeholder='Search'></HeaderInput>
        </div>
        <button className='header_button'>Log In/ Sing Up</button>
    </HeaderContainer>

  );
}

export default Header;
