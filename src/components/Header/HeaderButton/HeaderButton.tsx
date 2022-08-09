import React from 'react';
import styled from 'styled-components';
import profile from '../../../assets/images/User_profile_white.svg';
import heart from '../../../assets/images/Heart.svg'
import cart from '../../../assets/images/Cart.svg'

const HeaderButton:React.FC = () => {
  const isAuth = localStorage.getItem('token');
  if (!isAuth) {
    return (
      <a href="/login"><button className="header_button">Log In/ Sing Up</button></a>
    )
  }

  const StyledButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: auto 0px;
    .headers_button {
      width: 48px;
      height: 48px;
      margin: auto 0px;
      border-radius: 50%;
      background-color: #344966;
      background-size: 26px 26px;
      background-repeat: no-repeat;
      background-position:  center;
    }
    .profile {
      background-image: url(${profile});
    }
    .heart {
      background-image: url(${heart});
    }
    .cart {
      background-image: url(${cart});
    }
  `
  return (
    <StyledButtonBar>
      <a href="/"><div className='headers_button cart'></div></a>
      <a href="/"><div className='headers_button heart'></div></a>
      <a href="/profile"><div className='headers_button profile'></div></a>
    </StyledButtonBar>
  )
};

export default HeaderButton;