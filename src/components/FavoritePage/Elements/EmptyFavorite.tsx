import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../elements/Button';
import { EmptyFavoriteContainer } from './EmptyFavorite.styles';
import emptyCart from '../../../assets/images/empty-cart.png';

const EmptyFavorite:React.FC = () => {
  return (
    <EmptyFavoriteContainer>
      <div className="cart_container">
        <img className="cart_container_img" src={emptyCart} />
      </div>
      <div className="cart_info">
        <h1 className="cart_info_title">Your favorites is empty</h1>
        <p className="cart_info_text">
          Add items to cart to make a purchase.<br />Go to the catalogue now.
        </p>
        <Link to="/">
          <ButtonComponent text="Go to catalog" />
        </Link>
      </div>
    </EmptyFavoriteContainer>
  );
};

export default EmptyFavorite;
