import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';
import { useAppSelector } from '../../store';

const Catalog:React.FC = () => {
  const booksInStore = useAppSelector((store) => store.bookState.books);
  return (
    <BookContainer>
        {booksInStore[0] &&
          booksInStore.map((book) => (
            <BookCard
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
