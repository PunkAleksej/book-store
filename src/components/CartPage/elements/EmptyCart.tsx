import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Elements/Button';
import { EmptyCartContainer } from './EmptyCart.styles';
import emptyCart from '../../../assets/images/empty-cart.png';

const EmptyCart:React.FC = () => {
  return (
    <EmptyCartContainer>
      <div className="cart_container">
        <img className="cart_container_img" src={emptyCart} />
      </div>
      <div className="cart_info">
        <h1 className="cart_info_title">Your cart is empty</h1>
        <p className="cart_info_text">
          Add items to cart to make a purchase.<br />Go to the catalogue now.
        </p>
        <Link to="/">
          <ButtonComponent text="Go to catalog" />
        </Link>
      </div>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
