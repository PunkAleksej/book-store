import React from 'react';
import Header from '../Header/Header';
import { CartContainer } from './CartPage.styles';
import { useAppDispatch, useAppSelector } from '../../store';

const CartPage:React.FC = () => {
  const cartState = useAppSelector((store) => store.userState.user);
  const dispatch = useAppDispatch();
  console.log(cartState);
  return (
    <div>
      <Header />
      <CartContainer>
        <div className="book">
          <div className="book_cover" />
          <h1 className="book_title">1</h1>
          <h2 className="book_author">2</h2>
          <div className="book_buttons-block">
            <div className="book_buttons-block_increment">-</div>
            <div>1</div>
            <div className="book_buttons-block_increment">+</div>
            <div className="book_buttons-blick_delete" />
          </div>
          <h1 className="book_price">$ 14.99 USD</h1>
        </div>
      </CartContainer>
    </div>
  );
};

export default CartPage;
