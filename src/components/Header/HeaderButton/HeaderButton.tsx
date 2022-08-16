import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar, ButtonContainer } from './HeaderButton.Styles';
import { useAppSelector } from '../../../store/index';
import ButtonComponent from '../../Elements/Button';

const HeaderButton:React.FC = () => {
  const user = useAppSelector((store) => store.userState.user);
  if (!user) {
    return (
      <ButtonContainer>
        <Link to="/login">
          <ButtonComponent
          text="Log In/ Sing Up"
          />
        </Link>
      </ButtonContainer>

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
