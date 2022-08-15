import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar, StyledLoginButton } from './HeaderButton.Styles';
import { useAppSelector } from '../../../store/index';

const HeaderButton:React.FC = () => {
  const user = useAppSelector((store) => store.userState.user);
  if (!user) {
    return (
      <Link to="/login">
        <StyledLoginButton>Log In/ Sing Up</StyledLoginButton>
      </Link>
    );
  }
  return (
    <StyledButtonBar>
      <Link to="/"><div className="headers_button cart" /></Link>
      <Link to="/"><div className="headers_button heart" /></Link>
      <Link to="/profile"><div className="headers_button profile" /></Link>
    </StyledButtonBar>
  );
};

export default HeaderButton;
