import React from 'react';
import { BookInCartStyle } from './BookInCart.styles';
import { useAppSelector } from '../../../store';

type BookInCartType = {
  cover: string;
  author: string;
  price: string;
  title: string;
};

const BookInCart:React.FC<BookInCartType> = (props) => {
  const cartState = useAppSelector((store) => store.userState.user);
  const targetBook = useAppSelector((store) => store.bookState.books[0]);
  const BookPrice = `$ ${props.price} USD`;
  return (
    <BookInCartStyle cover={props.cover}>
      <div className="book_cover" />
      <div>
        <h1 className="book_title">{props.title}</h1>
        <h2 className="book_author">{props.author}</h2>
        <div className="book_buttons-block">
          <div className="book_buttons-block_increment">-</div>
          <div className="book_buttons-block_counter">1</div>
          <div className="book_buttons-block_increment">+</div>
          <div className="book_buttons-block_delete" />
        </div>
        <h1 className="book_price">{BookPrice}</h1>
      </div>
    </BookInCartStyle>
  );
};

export default BookInCart;
