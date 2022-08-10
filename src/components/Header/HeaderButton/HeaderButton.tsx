import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar, StyledLoginButton } from './HeaderButtonStyle';

const HeaderButton:React.FC = () => {
  const isAuth = localStorage.getItem('token');
  if (!isAuth) {
    return (
      <Link to="/login">
        <StyledLoginButton>Log In/ Sing Up</StyledLoginButton>
      </Link>
    )
  }
  return (
    <StyledButtonBar>
      <Link to="/"><div className='headers_button cart'></div></Link>
      <Link to="/"><div className='headers_button heart'></div></Link>
      <Link to="/profile"><div className='headers_button profile'></div></Link>
    </StyledButtonBar>
  )
};


export default HeaderButton;