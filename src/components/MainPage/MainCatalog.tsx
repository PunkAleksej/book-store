import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.styles';

const Catalog:React.FC = () => {
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
