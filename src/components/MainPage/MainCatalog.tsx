import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBar.Styles';

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
