import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';
import { useAppSelector } from '../../store';

const Catalog:React.FC = () => {
  const booksInStore = useAppSelector((store) => store.bookState.books);
  return (
    <BookContainer>
        {!!booksInStore.length &&
          booksInStore.map((book) => (
            <BookCard
              key={book.id}
              middleRating={book.middleRating}
              bookName={book.name}
              cover={book.cover}
              price={book.price}
              author={book.author.name}
            />
          ))
        }
    </BookContainer>
  );
};

export default Catalog;
