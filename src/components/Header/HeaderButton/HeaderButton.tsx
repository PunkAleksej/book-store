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
  const favoriteCounter = user?.favorite.length;
  const cartCounter = user?.cart.length;
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
      <Link to="/cart">
        <div className="header_butoon-container">
          { cartCounter !== 0 &&
          <div className="header_butoon-container_counter">{cartCounter}</div>}
          <ButtonComponent size="small" icon={cart} />
        </div>
      </Link>
      <Link to="/favorite">
        <div className="header_butoon-container">
          { favoriteCounter !== 0 &&
          <div className="header_butoon-container_counter">{favoriteCounter}</div>}
          <ButtonComponent size="small" icon={heart} />
        </div>
      </Link>
      <Link to="/profile"><ButtonComponent size="small" icon={profile} /></Link>
    </StyledButtonBar>
  );
};

export default HeaderButton;
