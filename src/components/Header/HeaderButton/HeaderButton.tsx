import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar, ButtonContainer } from './HeaderButton.styles';
import { useAppSelector } from '../../../store/index';
import ButtonComponent from '../../Elements/Button';
import profile from '../../../assets/images/User_profile_white.svg';
import heart from '../../../assets/images/Heart.svg';
import cart from '../../../assets/images/Cart.svg';

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
      <Link to="/cart"><ButtonComponent size="small" icon={cart} /></Link>
      <Link to="/favorite"><ButtonComponent size="small" icon={heart} /></Link>
      <Link to="/profile"><ButtonComponent size="small" icon={profile} /></Link>
    </StyledButtonBar>
  );
};

export default HeaderButton;
