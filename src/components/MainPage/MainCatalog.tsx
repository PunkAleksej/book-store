import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';
import { useAppSelector } from '../../store';

const Catalog:React.FC = () => {
  const booksInStore = useAppSelector((store) => store.bookState.books);
  
  return (
    <BookContainer>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </BookContainer>
  );
};

export default Catalog;
