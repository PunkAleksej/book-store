import React from 'react';
import BookCard from './elements/BookCard';
import { BookContainer } from './MainCatalogBarStyle';
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
}

export default Catalog;
