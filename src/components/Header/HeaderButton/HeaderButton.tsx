import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonBar, ButtonContainer } from './HeaderButton.styles';
import { useAppSelector } from '../../../store/index';
import ButtonComponent from '../../elements/Button';


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
        <div className="header_button-container">
          { cartCounter !== 0 &&
          <div className="header_button-container_counter">{cartCounter}</div>}
          <button className="headers_button cart" />
          {/* <ButtonComponent size="small" icon={cart} /> */}
        </div>
      </Link>
      <Link to="/favorite">
        <div className="header_button-container">
          { favoriteCounter !== 0 &&
          <div className="header_button-container_counter">{favoriteCounter}</div>}
          <button className="headers_button heart" />
          {/* <ButtonComponent size="small" icon={heart} /> */}
        </div>
      </Link>
      <Link to="/profile">
        <button className="headers_button profile" />
        {/* <ButtonComponent size="small" icon={profile} /> */}
      </Link>
    </StyledButtonBar>
  );
};

export default HeaderButton;
