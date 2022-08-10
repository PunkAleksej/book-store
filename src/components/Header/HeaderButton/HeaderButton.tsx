import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar } from './HeaderButtonStyle';

const HeaderButton:React.FC = () => {
  const isAuth = localStorage.getItem('token');
  if (!isAuth) {
    return (
      <Link to="/login"><button className="header_button">Log In/ Sing Up</button></Link>
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