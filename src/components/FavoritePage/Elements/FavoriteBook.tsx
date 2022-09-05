import React from 'react';
import { FavoriteBookStyle } from './FavoriteBook.style';

type BookInCartType = {
  cover: string;
  author: string;
  price: string;
  title: string;
};

const FavoriteBook:React.FC<BookInCartType> = (props) => {
  const BookPrice = `$ ${props.price} USD`;
  return (
    <FavoriteBookStyle cover={props.cover}>
      <div className="book_cover" />
      <div>
        <h1 className="book_title">{props.title}</h1>
        <h2 className="book_author">{props.author}</h2>
        <h1 className="book_price">{BookPrice}</h1>
      </div>
    </FavoriteBookStyle>
  );
};

export default FavoriteBook;
